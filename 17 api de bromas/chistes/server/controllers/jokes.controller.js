const Broma = require("../models/jokes.model");


module.exports.allJokes = (req, res) => {
    Broma.find()
        .then((allJokes) => res.json({ jokes: allJokes }))
        .catch((err) =>
            res.json({ message: "Error", error: err })
        );
};

module.exports.findJokeById = (req, res) => {
    Broma.findOne({ _id: req.params.id })
        .then((jokeById) => res.json({ joke: jokeById }))
        .catch((err) =>
            res.json({ message: "Error", error: err })
        );
};

module.exports.createJoke = (req, res) => {
    Broma.create(req.body)
        .then((createdJoke) => res.json({ joke: createdJoke }))
        .catch((err) =>
            res.json({ message: "Error", error: err })
        );
};

module.exports.updateJoke = (req, res) => {
    Broma.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) =>
            res.json({ message: "Error", error: err })
        );
};

module.exports.deleteJoke = (req, res) => {
    Broma.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) =>
            res.json({ message: "Error", error: err })
        );
};

module.exports.RandomJoke = (req, res) => {
    
    Broma.aggregate([{ $sample: { size: 1 } }])
        .then((randomJoke) => res.json({ joke: randomJoke }))
        .catch((err) =>
            res.json({ message: "Error", error: err })
        );
};