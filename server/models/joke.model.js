// import mongoose
const mongoose = require('mongoose')


const JokeSchema = new mongoose.Schema({ //change NameSchema for each project
    // key names here, with values that are objects with validations like type and minlength
    setup: {
        type: String,
        required: [true, "Setup is required for a joke!"],
        minlength: [5, "Minimum length of the setup is 5 characters!"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required for a joke silly!"],
        minlength: [2, "Punchline requires a minimum of 2 characters!"]
    }
})





const Joke = mongoose.model('Joke', JokeSchema) //change Name, tableName and NameSchema for each project
//mongoose creates a table named ___ using instructions for ____ above

module.exports = Joke //change Name for each project