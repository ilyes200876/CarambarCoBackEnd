
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const server = express();
const bodyParser = require('body-parser');
const db = require('./models');
const cors = require('cors');


// const { sequelize } = require('./models');
const jokeRoutes = require('./routes/JokeRoutes')

const swaggerOptions = {
    swaggerDefinition: {
        myapi: '3.0.0',
        info: {
        title: 'JOKE API',
        version: '1.0.0',
        description: 'API de blagues',
        },
        servers: [
            {
            url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.use(cors({
    origin: "http://localhost:4200",
    methods: ["GET","POST","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
server.use(bodyParser.json());
server.use('/', jokeRoutes);


db.sequelize.sync({ force: false })
    .then(() => {
        console.log("la base de donnée est synchronisée");
        server.listen(3000, () => console.log("Le serveur fonctionne."));
    })
    .catch(err => console.error('Echec de synchronisation de la BDD'));





