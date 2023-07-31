const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (rec,res) => res.sendFile(path.join(__dirname, "views", "home.html")))
app.get("/register", (rec,res) => res.sendFile(path.join(__dirname, "views", "register.html")))
app.get("/ingresar", (rec,res) => res.sendFile(path.join(__dirname, "views", "ingresar.html")))

app.post("/register", (req,res) =>{
    res.redirect("http://localhost:3023")
})

app.post("/ingresar", (req,res) =>{
    res.redirect("/")
})


app.listen(PORT, () => console.log("servidor corriendo en el puerto: " + PORT ))


