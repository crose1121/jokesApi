const modelFile = 'joke.model'; //change the modelFile for each project

// import model and save as a variable

const Joke = require(`../models/${modelFile}`) //change Name for each project

// module.exports.mongooseCommands here

module.exports.findAll = (req,res) => {
    Joke.find()
    .then(allJokes=>{
        res.json({results: allJokes})
    })
    .catch(err=>console.log("Error when trying to find all jokes: ",err))
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
    .then(newJoke=>{
        res.json({results: newJoke})
    })
    .catch(err=>console.log("Error when trying to create a new joke: ",err))
}

module.exports.findOne = (req,res) => {
    Joke.findOne({_id: req.params.id})
    .then(singleJoke=> {
        res.json({results: singleJoke})
    })
    .catch(err=>console.log("Error when trying to find a single joke: ",err))
}

module.exports.findRandomJoke = (req,res) => {

    function randomInt(max) {
        return Math.floor(Math.random()*max)
    }

    Joke.find()
        .then(allJokes=>{
            let randomIndex = randomInt(allJokes.length)
            res.json({results:allJokes[randomIndex]})
    })
        .catch(err=>console.log("There was an error when trying to find a random joke: ",err))
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(newJoke=>{
        res.json({results: newJoke})
    })
    .catch(err=>console.log("Error when trying to update a joke: ",err))
}

module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke=>console.log("The joke has been deleted",deletedJoke))
        .catch(err=>console.log("Error when trying to delete joke: ",err))
}