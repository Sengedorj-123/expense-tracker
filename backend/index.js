import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcrypt";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3030;
const sql = neon(`${process.env.DATABASE_URL}`);

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await sql`SELECT * FROM "user" WHERE email = ${email}`;

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await sql`
      INSERT INTO "user" (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
      RETURNING id, name, email
    `;

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser[0] });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error during user creation" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await sql`SELECT * FROM "user" WHERE email = ${email}`;
    if (user.length === 0) {
      return res
        .status(400)
        .json({ message: "Email or password does not match" });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password does not match" });
    }

    res.status(200).json({ message: "Login successful", user: user[0] });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error during user login" });
  }
});

app.post("/records", async (req, res) => {
  const { name, amount, transaction_type, description, createdat } = req.body;
  console.log("req body", req.body);

  try {
    const records = await sql`

      INSERT INTO "record" (name , amount, transaction_type , description, createdat)
      VALUES (${name},${amount},${transaction_type},${description},${createdat})
            RETURNING *
    `;
    console.log("records", records);

    res
      .status(201)
      .json({ message: "Record added successfully", record: records[0] });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error during record creation" });
  }
});

app.get("/records", async (req, res) => {
  try {
    const records = await sql`SELECT * FROM "record" ORDER BY createdAt DESC`;
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error during fetching records" });
  }
});
app.post("/category", async (req, res) => {
  const { name, description, category_icon, icon_color } = req.body;
  console.log("req body", req.body);

  try {
    const category = await sql`

      INSERT INTO "category" (name ,  description, category_icon , icon_color)
      VALUES (${name} ,${description},${category_icon}, ${icon_color})
            RETURNING *
    `;
    console.log("category", category);

    res
      .status(201)
      .json({ message: "category added successfully", category: category[0] });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error during category creation" });
  }
});

app.get("/category", async (req, res) => {
  try {
    const category =
      await sql`SELECT * FROM "category" ORDER BY createdAt DESC`;
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error during fetching records" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
