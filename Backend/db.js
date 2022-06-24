const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/cloudbook";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connection sucessful");
    }) /// THIS IS ASYNC THAT'S WHY IT TAKES SOME EXTRA TIME TO GET CONNECTED
}

module.exports = connectToMongo;