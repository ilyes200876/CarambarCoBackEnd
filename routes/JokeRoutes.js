const express = require("express");
const jokeController = require('../controllers/JokeController');
const router = express.Router();



router.route('/createJoke')
    .post(jokeController.createJoke);
// router.get('/blagues', getAllJokes);

// router.get('/blague/random', getR)

module.exports = router;