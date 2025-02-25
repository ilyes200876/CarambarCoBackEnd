const express = require("express");
const jokeController = require('../controllers/JokeController');
const router = express.Router();


/**
 * @swagger
 * /createJoke:
 *     post:
 *         summary: "Créer une blague"
 *         description: "Cette route permet d'ajouter une nouvelle blague"
 *         requestBody:
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         required:
 *                             - question
 *                             - response
 *                         properties:
 *                             question:
 *                                 type: string
 *                                 description: "La question de la blague"
 *                             response:
 *                                 type: string
 *                                 description: "La réponse à la blague"
 *         responses:
 *             201:
 *                 description: "Blague créée avec succès"
 *             400:
 *                 description: "Erreur de validation"
 */
router.route('/createJoke')
    .post(jokeController.createJoke);


/**
 * @swagger
 * /blagues:
 *     get:
 *         summary: "Affiche toutes les blagues"
 *         description: "Cette route permet d'afficher toutes les blagues"
 *         responses:
 *             200:
 *                 description: "Liste des blagues récupérée"
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: array
 *                             items:
 *                                 type: object
 *                                 properties:
 *                                     id:
 *                                         type: integer
 *                                         description: "ID de la blague"
 *                                     question:
 *                                         type: string
 *                                         description: "La question de la blague"
 *                                     response:
 *                                         type: string
 *                                         description: "La réponse de la blague"
 */
    
router.route('/blagues')
    .get(jokeController.getAllJokes);


/**
 * @swagger
 * /blagues/random:
 *     get:
 *         summary: "Affiche une blague au hasard"
 *         description: "Cette route permet d'afficher une blague aléatoire"
 *         responses:
 *             200:
 *                 description: "Une blague radom"
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 id:
 *                                     type: integer
 *                                     description: "ID de la blague"
 *                                 question:
 *                                     type: string
 *                                     description: "La question de la blague"
 *                                 response:
 *                                     type: string
 *                                     description: "La réponse de la blague"
 */
    router.route('/blagues/random')
    .get(jokeController.getRandomJoke);


/**
 * @swagger
 * /blagues/{id}:
 *     get:
 *         summary: "Affiche une blague spécifique"
 *         description: "Cette route permet d'afficher une blague à partir de son ID"
 *         parameters:
 *           - name: id
 *             in: path
 *             required: true
 *             description: "L'ID de la blague à récupérer"
 *             schema:
 *               type: integer
 *         responses:
 *             200:
 *                 description: "Blague trouvée"
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 id:
 *                                     type: integer
 *                                     description: "ID de la blague"
 *                                 question:
 *                                     type: string
 *                                     description: "La question de la blague"
 *                                 response:
 *                                     type: string
 *                                     description: "La réponse de la blague"
 */
    router.route('/blagues/:id')
    .get(jokeController.getJokeById);


/**
 * @swagger
 * /blagues/delete/{id}:
 *     delete:
 *         summary: "Effacer une blague spécifique"
 *         description: "Cette route permet d'effacer une blague à partir de son ID"
 *         parameters:
 *           - name: id
 *             in: path
 *             required: true
 *             description: "L'ID de la blague à récupérer"
 *             schema:
 *                 type: integer
 *         responses:
 *             200:
 *                 description: "Joke deleted"   
 *             400:
 *                 description: "Joke not found"
 */
    router.route('/blagues/delete/:id')
    .delete(jokeController.deleteJoke);

module.exports = router;