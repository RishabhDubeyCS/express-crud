# 📌 Express CRUD Project (Node.js + EJS + Bootstrap)

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-5-black?logo=express)
![EJS](https://img.shields.io/badge/EJS-Template-yellow?logo=ejs)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-blue?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🔥 Overview
This is a **mini CRUD application** built using **Node.js, Express.js, EJS (Embedded JavaScript templates)**, and **Bootstrap**.  
It demonstrates **REST API fundamentals** by performing **Create, Read, Update, and Delete (CRUD)** operations.  
Flash messages are included for user-friendly success/error notifications.  

---

## ⚡ Tech Stack
- **Backend:** Node.js, Express.js  
- **Frontend (Views):** EJS Template Engine  
- **Styling:** Bootstrap 5  
- **Middleware:** Express-Session & Connect-Flash  
- **Database:** In-memory array (can easily switch to MongoDB/MySQL later)  

---

## 📂 Project Structure
express-crud/
│-- node_modules/
│-- views/
│ ├── layout.ejs # Common layout (Bootstrap included)
│ ├── index.ejs # List all items
│ ├── new.ejs # Add new item form
│ ├── edit.ejs # Edit existing item form
│-- server.js # Main application file
│-- package.json # Dependencies & scripts


## 🛠 Installation & Usage
1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd express-crud