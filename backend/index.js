// import express from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cors from "cors";
// import { neon } from "@neondatabase/serverless";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const port = 3030;
// const sql = neon(`${process.env.DATABASE_URL}`);

// app.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await sql`SELECT * FROM "user" WHERE email = ${email}`;

//     if (existingUser.length > 0) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const newUser = await sql`
//         INSERT INTO "user" (name, email, password)
//         VALUES (${name}, ${email}, ${password})
//         RETURNING id, name, email, password
//       `;

//     res
//       .status(201)
//       .json({ message: "User created successfully", user: newUser[0] });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Internal server error during create user" });
//   }
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await sql`SELECT * FROM "user" WHERE email = ${email}`;
//     if (user.length === 0) {
//       return res.status(400).json({ message: "email or password not match" });
//     }

//     if (user[0].password !== password) {
//       return res.status(400).json({ message: "password not match" });
//     }

//     res.status(200).json({ message: "Login successful", user: user[0] });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Internal server error during login user" });
//   }
// });

// // app.post("/records", async (req,res)=>{
// //   const{name, description} =req.body
// //   try{
// //     const use = await
// //   }
// // })

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });
// import express from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cors from "cors";
// import { neon } from "@neondatabase/serverless";
// import bcrypt from "bcrypt"; // For password hashing

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const port = 3030;
// const sql = neon(`${process.env.DATABASE_URL}`);

// // User signup
// app.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await sql`SELECT * FROM "user" WHERE email = ${email}`;

//     if (existingUser.length > 0) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the password before storing it
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await sql`
//       INSERT INTO "user" (name, email, password)
//       VALUES (${name}, ${email}, ${hashedPassword})
//       RETURNING id, name, email
//     `;

//     res
//       .status(201)
//       .json({ message: "User created successfully", user: newUser[0] });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Internal server error during user creation" });
//   }
// });

// // User login
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await sql`SELECT * FROM "user" WHERE email = ${email}`;
//     if (user.length === 0) {
//       return res
//         .status(400)
//         .json({ message: "Email or password does not match" });
//     }

//     // Check hashed password
//     const isMatch = await bcrypt.compare(password, user[0].password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Password does not match" });
//     }

//     res.status(200).json({ message: "Login successful", user: user[0] });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Internal server error during user login" });
//   }
// });

// // Add a record
// app.post("/records", async (req, res) => {
//   const { category, amount, date, time, isExpense } = req.body;

//   try {
//     const newRecord = await sql`
//       INSERT INTO "record" (category, amount, date, time, isExpense)
//       VALUES (${category}, ${amount}, ${date}, ${time}, ${isExpense})
//       RETURNING *
//     `;

//     res
//       .status(201)
//       .json({ message: "Record added successfully", record: newRecord[0] });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Internal server error during record creation" });
//   }
// });

// // Retrieve records
// app.get("/records", async (req, res) => {
//   try {
//     const records = await sql`SELECT * FROM "record" ORDER BY createdAt DESC`;
//     res.status(200).json(records);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Internal server error during fetching records" });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
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

// User signup
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

// User login
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
  const { name, amount, transaction_type } = req.body;
  console.log("req body", req.body);

  try {
    const records = await sql`

      INSERT INTO "record" (name , amount, transaction_type)
      VALUES (${name},${amount},${transaction_type})
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
