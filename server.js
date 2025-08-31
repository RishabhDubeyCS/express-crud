const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const db = require("./db"); // Import DB connection

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Session + Flash Messages
app.use(
  session({
    secret: "crudsecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

// Middleware to pass flash messages to views
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ----------------------
// Routes
// ----------------------

// Home Page (READ)
app.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.render("index", { users: results });
  });
});

// Add User Form
app.get("/users/new", (req, res) => {
  res.render("new");
});

// Create User
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err) => {
    if (err) throw err;
    req.flash("success", "User added successfully ✅");
    res.redirect("/");
  });
});

// Edit User Form
app.get("/users/edit/:id", (req, res) => {
  db.query("SELECT * FROM users WHERE id = ?", [req.params.id], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      req.flash("error", "User not found ❌");
      return res.redirect("/");
    }
    res.render("edit", { user: results[0] });
  });
});

// Update User
app.post("/users/update/:id", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [name, email, req.params.id],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows > 0) {
        req.flash("success", "User updated successfully ✏️");
      } else {
        req.flash("error", "User not found ❌");
      }
      res.redirect("/");
    }
  );
});

// Delete User
app.get("/users/delete/:id", (req, res) => {
  db.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      req.flash("success", "User deleted successfully 🗑️");
    } else {
      req.flash("error", "User not found ❌");
    }
    res.redirect("/");
  });
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
