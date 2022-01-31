const express = require('express');
const cors = require('cors');
require('dotenv').config();
require("./db/connectDB");
const app = express();
//import Routes
const authRoutes=require("./routes/signup");

//
app.use(express.json());
app.use(cors())

//middlewares
app.use('/api', authRoutes);

const port=process.env.PORT;
app.listen(port, () =>{
    console.log(`Server is Running on port: ${port}`);
})