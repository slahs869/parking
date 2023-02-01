const express = require("express");
const mysql = require("mysql"); const { send } = require("process");
//const port = 3306;
const app = express();
const cors = require('cors')

app.use(cors())
const port = process.env.PORT || 3000;

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: ''
});
console.log(conexion)
conexion.connect(function (error) {

    if (error) {
        console.log('error de conexion', error.stack);
        return;
    }
    console.log('Conexion Exitosa', conexion.threadId);
});


app.get("/usuarios", (req, res) => {
    let sql = "select * from users";
    conexion.query(sql, function (error, result, fields) {
        if (error) {
            throw error;
            return;
        }
        for (var i in result) {
            console.log(`name ${result[i].nombre} descripcion  ${result[i].descripcion}`);
        }
        res.send(result)
       // res.send("consulta con exito" , result);
        console.log(result);
        return;
    })
    

});

app.post("/usuario", (req,res)=>{
    
        let sql="INSERT INTO users (name,email, avatar,email_verified_at, password) VALUES ('usuario de prueba','usuario@usuario.com','avatar1',01-01-2023,'12345')";
        conexion.query(sql, function (error,result,fields){
            if(error){
                throw error;
                return;
            }
            for (var i in result){
                console.log(result);
                return;
            }
            res.send(result);
            return;
        })
})


app.listen(port, () => {
    console.log('conectado')
})