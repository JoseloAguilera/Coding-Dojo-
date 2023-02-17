const BromaController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/jokes", BromaController.allJokes);
    app.get("/jokes/:id", BromaController.findJokeById);
    app.put("/jokes/update/:id", BromaController.updateJoke);
    app.post("/jokes/new", BromaController.createJoke);
    app.delete("/jokes/delete/:id", BromaController.deleteJoke);
    app.get("/random-jokes/", BromaController.RandomJoke);
};