const express = require('express');
const app = express();
const UserRoutes = require('./routes/user');
const documentRoute = require('./routes/document');
const connectDB = require('./config/db');
const { authorize } = require('./middleware/auth');
require('dotenv').config();

app.use(express.json());
app.use("/api/document", authorize, documentRoute);
app.use("/api/", UserRoutes);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})

// Build application with frontend and backend where you register a user and assign roles and permission to the user and based on roles display different view
// Roles and Permission should be a Middleware in backend
// Backend should be service driven architecture and preferably a microservice approach.
// 2 roles and permission based role.
// i. Role A uploads a document
// ii. Role B approves the uploaded document after viewing
// Time Frame: Max 1hr 30 min.
// Tech Stack: MERN – Typescript

/*
User 
    -role - roleA, roleB
    -permission - upload a document, approve the document
*/