const mongoose = require('mongoose');

//connect to db

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
}).then(() => console.log("DB connected Successfully"))
.catch(err => console.log("DB connection Error: ", err));