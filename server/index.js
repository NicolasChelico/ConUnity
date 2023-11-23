import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'Hockeys9@',
    database: 'ConUnity'
})

app.use(express.json())
app.use(cors())


app.get("/", (req,res) => {
    res.json("hello this is the backend")
})

app.get("/Home", (req,res) => {
    const q = "SELECT * FROM Program"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// reads all programs for the navbar and cards
app.get("/Main", (req,res) => {
    const q = "SELECT * FROM Program"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/ReviewCourse", (req,res) => {
    const q = "SELECT c.courseID, c.courseName, c.courseCode, m.programID FROM Course c JOIN MadeUp m ON m.courseID = c.courseID;";
    db.query(q, (err,data) => {
        if(err) return (res.json(err))
        return res.json(data);
    })
})


// gets the courses according to each program
app.get("/Program/:id" , (req,res) => {
    const pID = req.params.id;
    const q = " SELECT p.programName, c.courseName, c.courseID , c.description , c.courseCode, c.credits FROM Program p JOIN MadeUp mu ON p.programID = mu.programID JOIN Course c ON c.courseID = mu.courseID WHERE p.programID = " + pID + " ORDER BY c.courseID ASC";
    db.query(q, (err,data) => {
        if(err) return console.log(err)
        return (res.json(data));
    })
})

// Gets the reviews for each classes
app.get("/Program/:id/:courseID" , (req, res) => {
    const courseID = req.params.courseID;
    const q = "SELECT c.courseID, c.courseName, c.description, r.review, r.date, r.grade, r.examRating,r.contentRating,r.assRating, r.reviewID FROM Course c JOIN Review r ON r.courseID = c.courseID WHERE c.courseID = " + courseID + " ORDER BY r.date DESC";
    db.query(q, (err,data) => {
        if(err) return console.log(err)
        return (res.json(data))
    })
})

app.post("/Review/:courseCode/:courseID" , (req,res) => {
    const q = "INSERT INTO Review (`review`,`date`,`courseID`,`grade`,`examRating`,`contentRating`,`assRating`) VALUES (?)";
    const values = [
        req.body.review,
        req.body.date,
        req.body.courseID,
        req.body.grade,
        req.body.examRating,
        req.body.contentRating,
        req.body.assRating
    ]
    db.query(q, [values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Review was successfully added")
    });
})

app.listen(8801, () => {
    console.log("Connected to the backend")
})