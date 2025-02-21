const express = require("express");
const jokeController = require('../controllers/JokeController');
const router = express.Router();



router.route('/createJoke')
    .post(jokeController.createJoke);

    router.route('/blagues')
    .get(jokeController.getAllJokes);

    router.route('/blague/random')
    .get(jokeController.getRandomJoke);

    router.route('/blagues/:id')
    .get(jokeController.getJokeById);


module.exports = router;