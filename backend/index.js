import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3030;
const sql = neon(`${process.env.DATABASE_URL}`);

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await sql`
        INSERT INTO users (email, password) 
        VALUES (${email}, ${password})
        RETURNING id, email
      `;

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser[0] });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error during create user" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (user.length === 0) {
      return res.status(400).json({ message: "email or password not match" });
    }

    if (user[0].password !== password) {
      return res.status(400).json({ message: "password not match" });
    }

    res.status(200).json({ message: "Login successful", user: user[0] });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error during login user" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
