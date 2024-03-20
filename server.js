const express = require('express');
const app = express();
const port = 3000;
require("dotenv").config();
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin:'*'}))

//middelwares
const error404 = require('./middlewares/error404.js')
const morgan = require('./middlewares/morgan')

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));


//rutas


//para rutas no existentes
app.use('*',error404)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});