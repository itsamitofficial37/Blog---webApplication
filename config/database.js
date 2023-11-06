const mongoose = require("mongoose");
require('dotenv').config();

async function connectDB() {
    await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser :true,
        useUnifiedTopology : true,

    })
    .then(()=> {
        console.log("Succesfully connected with Database");
    })
    .catch((err)=> {
        console.error(error.message);
        console.log(err);
        process.exit(1);
    });
   
}

module.exports = connectDB;