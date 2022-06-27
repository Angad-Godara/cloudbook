const mongoose = require('mongoose')

const mongoURI = process.env.URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connection sucessfulL");
    }) /// THIS IS ASYNC THAT'S WHY IT TAKES SOME EXTRA TIME TO GET CONNECTED
}

module.exports = connectToMongo;