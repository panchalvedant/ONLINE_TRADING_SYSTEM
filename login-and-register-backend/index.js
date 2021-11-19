import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/trading_online", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: Date,
    phone: Number,
    acno: Number,
    pass: String
})

const User = new mongoose.model("User", userSchema)

app.post("/login", (req, res)=> {
    const { email, pass} = req.body
    User.findOne({ email: email}, (err,user) => {
        if(user){
            if(pass === user.pass ) {
                res.send({message: "Login Sucessfull", user: user})
            } else {
                res.send({message: "Password did not match"})
            }
        } else {
            res.send({message:"User not registered"})
        }
    })
})

app.post("/register", (req, res)=> {
    const {name, email, pass, phone, acno} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already register"})
        } else {
            const user= new User({
                name,
                email,
                pass,
                phone,
                acno
            })
            user.save( err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfull Register"})
                }
            })
        }
    })
    
})

app.listen(9002,() => {
    console.log("Db Started at port 9002")
})