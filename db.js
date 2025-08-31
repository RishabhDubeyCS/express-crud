// db.js
const mysql = require("mysql2");

// Create MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",     // your MySQL username
  password: "Saritadubey@2004",     // your MySQL password
  database: "express_crud",
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err.message);
    process.exit(1); // Exit app if DB fails
  }
  console.log("✅ Connected to MySQL Database");
});

module.exports = db;
