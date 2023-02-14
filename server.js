const express = require('express');
const bodyParser=require('body-parser');
const cors = require('cors')

const db= require('./db')
db('mongodb+srv://parqueadero:1234@parqueadero.bukk0tt.mongodb.net/?retryWrites=true&w=majority')
//const router = require('./components/message/network')
const router = require('./network/routes')

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
//app.use(router);

app.use(cors())
router(app);


const port = process.env.PORT || 3000;
console.log(port)

app.use('/app', express.static('public'));


app.listen(port);

console.log('la aplicacion està escuchando en http://localhost:3000');

