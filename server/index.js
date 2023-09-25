import express from "express";
import sql from "./db.js";
import cors from "cors";

// Step 1: Initial Client Setup
// Step 2: To Do List Component
// Step 3: Initial Sever Setup
// Step 4: Run the backend server
// Step 5: Setup and Connect to Postgres
// Step 6: Create a Table and Insert a Data.
// Step 6: Creata a dummy JSON in the backend that contains todos data

// postgres://username:password@host:port/database 

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json())



app.get("/", (req, res) => {
  res.send("welcome heheh ");
});
app.get("/api/todos", async (req, res) => {
  const todos = await sql`SELECT * FROM todos`;
  // res.json(data)
  res.json(todos)
 /*  if (todos) {
    res.status(200).send(todos);
  } else {
    res.status(404).send("not working");
  } */
  // res.send(data)
});



app.post("/api/todos2", async (req, res) => {
    
    const { task} = req.body
// 'Drink'. => ${task}
  const todos2 = await sql`INSERT INTO todos (task) VALUES ( ${task})`;

  //  res.json(todos2)
//   console.log(todos2);
  if (todos2) {
    res.status(201).send("Succesfully connected");
  } else {
    res.status(404).send("not working");
  } 

  // res.send(data)
});

app.listen(3000, () => {
  console.log("server runnning on port 3000");
});

console.log("sofftdddmmm");
