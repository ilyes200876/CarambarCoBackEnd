const Joke = require('../models/Joke');

const getAllJokes = async(req, res) => {
    try{
        const jokes = await Joke.findAll();
        res.json(jokes);
    } catch (error) {
        res.status(400).json({error: "Les blagues sont introuvables"});
    };
};

const getRandomJoke = async(req, res) => {
    try {
        const count = await Joke.count();
        const randomI = Math.floor(Math.random( )* count) + 1;
        const randomJoke = await Joke.findByPk(randomI);
        res.json(randomJoke);
    } catch (error) {
        res.status(400).json({error: "Blague introuvable"});
    }

};

const getJokeById = async(req, res) => {
    try{
        const id = req.params.id;
        const jokeId = await Joke.findByPk(id);
        if(!jokeId){
            res.sendStatus(404);
        }else
        res.json(jokeId);

    }catch (error) {
        res.status(400).json({error: "Cette blague est introuvable"});
    }
};

const createJoke = async(req, res) => {
    try {
        const {question, response} = req.body;
    const joke = await Joke.create({question, response});
    res.status(201).json(joke);
    }catch (error) {
        console.error(error);
        res.status(400).json({error: "Erreur lors de la création de la blague"});
    };
};

module.exports = {getAllJokes, getRandomJoke, getJokeById ,createJoke};