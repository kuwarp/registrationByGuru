const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")
require("./dbase/connect")

// Database File
const Register = require("./models/register")
const { json } = require("express")
// const { start } = require("repl")

const port = process.env.PORT || 21000

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partial_path = path.join(__dirname, "../templates/partials")

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(express.static(static_path))
app.set("view engine", "hbs");

app.set("views", template_path)
hbs.registerPartials(partial_path)

app.get("/", (req, res) => {
    res.render("home")
})


app.get("/start1", (req, res) => {
    res.render("start1")
})

app.get("/quiz", (req, res) => {
    res.render("quiz")
})


app.get("/start", (req, res) => {
    res.render("start")
})


app.get("/login", (req, res) => {
    res.render("login")
})
app.get("/register", (req, res) => {
    res.render("register")
})
// POST METTHOD OPERATION
// NAME SECTION:::

app.post("/register", async  (req, res) => {
    try {
        const password = req.body.password
        const confirmpassword = req.body.confirm
         if (password === confirmpassword) {
            const userList = new Register({
                uname: req.body.uname,
                email: req.body.email,
                username: req.body.username,
                password: password,
                confirm: confirmpassword
            })
            const reg = await userList.save()
            res.status(201).render("login")
        } else {
            res.send("Maybe Your Password Or username Should be wrong?")
        }
       

        



    } catch (err) {
        res.status(400).send(err)

    }
   

})



// Log Form


app.post("/login", async (req, res) => {
    try {
        
        const email=req.body.email;
        const password=req.body.password; 

       const uemail=await Register.findOne({email:email})
    
       if(uemail.password===password){
           res.status(201).render("quiz")
       }
       else{
           res.send("password are not matching");
       }
        

    }   
     catch (error) {
        res.status(400).send("Connection Abort")
        
    }
})

app.post("/start1", async (req, res) => {
    try {
        
        const email=req.body.email;
        const password=req.body.password; 

       const uemail=await Register.findOne({email:email})
    
       if(uemail.password===password){
           res.status(201).render("quiz")
       }
       else{
           res.send("password are not matching");
       }
        

    }   
     catch (error) {
        res.status(400).send("Connection Abort")
        
    }
})




app.listen(port, () => {
    console.log(`on my port ${port}`);
})