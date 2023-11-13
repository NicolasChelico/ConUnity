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

app.get("/Program/:id" , (req,res) => {
    const pID = req.params.id;
    const q =" SELECT p.programName, c.courseName, c.courseID , c.description , c.courseCode, c.credits FROM Program p JOIN MadeUp mu ON p.programID = mu.programID JOIN Course c ON c.courseID = mu.courseID WHERE p.programID = " + pID + " ORDER BY c.courseID ASC";
    db.query(q, (err,data) => {
        if(err) return console.log(err)
        return (res.json(data));
    })
})


app.listen(8801, () => {
    console.log("Connected to the backend")
})