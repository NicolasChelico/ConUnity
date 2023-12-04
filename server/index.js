import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection( {
    host: 'conunity.cnf1ohaicmy9.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Conunity357',
    database: 'ConUnity'
})

app.use(express.json())
app.use(cors())


app.get("/", (req,res) => {
    res.json("hello this is the backend")
})

app.get("/Averages/:id/:courseID" , (req,res) => {
    const cID = req.params.courseID;
    const q = "SELECT CEILING(AVG(examRating)) as examRating, CEILING(AVG(assRating)) as assRating, CEILING(AVG(contentRating)) as contentRating FROM Review r WHERE r.courseID = " + cID;
    db.query(q,(err,data) => {
        if(err) return(res.json(err))
        return(res.json(data))
    })
})
app.get("/Home", (req,res) => {
    const q = "SELECT * FROM Program"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/CourseInfo/:courseID", (req,res) => {
    const cID = req.params.courseID;
    const q = "SELECT c.courseName, c.courseCode, c.description FROM Course c WHERE c.courseID = "+cID
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})
// 

// reads all programs for to have the specific program for naming
app.get("/Main/:id", (req,res) => {
    const pID = req.params.id;
    const q = "SELECT p.programName FROM Program p WHERE p.programID = "+pID;
    db.query(q, (err, data) => {
        if(err) return res.json(err)

        const programName = data[0] ? data[0].programName : null;
        return res.json(programName)
    })
})

// gets each program courses
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


// Create a new user
app.post("/CreateAccount/NewUser", (req,res) => {
    const q = "INSERT INTO User (`userName`,`password`) VALUES(?)";
    const values =[
        req.body.username,
        req.body.password
    ]
    db.query(q,[values], (err,data) => {
        if(err) return res.json(err);
        return res.json('User was successfully created');
    })
})

app.get("/LoginAuthentication/:userName/:password", (req,res) => {
    const userName = req.params.userName;
    const password= req.params.password;
     const q = "SELECT DISTINCT u.userName, u.password FROM User u WHERE u.userName = ? AND u.password = ?";
     db.query(q, [userName,password], (err,data) => {
        if(err)return res.json(err)
        return res.json(data)
     })
})


app.listen(8801, () => {
    console.log("Connected to the backend")
})