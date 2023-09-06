import express  from "express"
import sql from "./db.js";

const app = express();

app.get("/",(req,res) =>

{
res.send("welcome heheh ")

})

app.listen(3040,() => {

    console.log('server runnning on port 300')
})
console.log("sofftdddmmm")