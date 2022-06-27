const mongoose = require('mongoose')
const passcode = require('./local')

const mongoURI = `mmongodb+srv://lostinpresent:${passcode}@cluster0.a5ibf.mongodb.net/?retryWrites=true&w=majority`;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connection sucessfull");
    }) /// THIS IS ASYNC THAT'S WHY IT TAKES SOME EXTRA TIME TO GET CONNECTED
}

module.exports = connectToMongo;