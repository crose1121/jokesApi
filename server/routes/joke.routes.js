// import controller file using require() and save it as a variable (ex: NameController)

const controllerFile = "joke.controller" //change this for each project

const JokeController = require(`../controllers/${controllerFile}`) //change NameController for each project

module.exports = (app) => {
    app.get('/api/jokes',JokeController.findAll)
    app.get('/api/jokes/random',JokeController.findRandomJoke)
    app.get('/api/jokes/:id',JokeController.findOne)
    app.post('/api/jokes',JokeController.createJoke)
    app.put('/api/jokes/:id',JokeController.updateJoke)
    app.delete('/api/jokes/delete/:id',JokeController.deleteJoke)
}
