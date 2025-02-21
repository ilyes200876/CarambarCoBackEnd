
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const db = require('./models');


const { sequelize } = require('./models');
const jokeRoutes = require('./routes/JokeRoutes')

server.use(bodyParser.json());
server.use('/', jokeRoutes);


db.sequelize.sync({ force: false })
    .then(() => {
        console.log("la base de donnée est synchronisée");
        server.listen(3000, () => console.log("Le serveur fonctionne."));
    })
    .catch(err => console.error('Echec de synchronisation de la BDD'));





