const express = require('express');
const app = express();
const port = 3000;
require("dotenv").config();
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin:'*'}))

//middelwares
const error404 = require('./middlewares/error404.js')
const morgan = require('./middlewares/morgan.js')

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));


//rutas
const conversionRoutes = require("./routes/conversion.routes.js");

app.use('/api', conversionRoutes);


if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/dist'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'dist','index.html')));
  }

//para rutas no existentes
app.use('*',error404)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});