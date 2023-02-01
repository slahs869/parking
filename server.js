const express= require('express')
const mysql= require('mysql')
const cors = require('cors')


const connection = mysql.createConnection({
    host:'localhost',
    database:'blog',
    user:'root',
    password:'',
});

connection.connect(function(e){
    if(e){
         console.log('error', e.stack);
    return;
    }
    console.log('success', connection.threadId)
   
});

app=express()
app.use(cors())
const port = process.env.PORT || 3000;
//ESTOS DOS SE necesitan para poder leer el req.body y el req.params
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/home', (req,res)=>{
    let get="SELECT * from users";
    connection.query(get, function (error, results, fields){
        if(error) throw error;
        res.send(results)
    })
   
})

app.post('/home', (req,res)=>{
    let post=`INSERT INTO users (name,email, password) VALUES ('${req.body.name}','${req.body.email}','${req.body.password}')` 
    connection.query(post, function (error, results, fields){
        if(error) throw error;
        res.send(results)
    })
   
})

app.patch('/home/:id', (req,res)=>{
    let patch=`UPDATE users SET name='${req.body.name}' WHERE id=${req.params.id} `
    connection.query(patch, function (error, results, fields){
        if(error) throw error;
        res.send(results)
    })
   
})

app.delete('/home/:id', (req,res)=>{
    let borrar=`DELETE FROM users WHERE id=${req.params.id}`
    connection.query(borrar, function (error, results, fields){
        if(error) throw error;
        res.send(results)
    })
   
})
app.listen(8000, ()=>{
    console.log("escuchando en el puerto 3000")
})