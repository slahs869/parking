const url ='https://parqueadero2.herokuapp.com/user';

button_ingresar = document.querySelector(".button_ingresar");
input_nombre = document.querySelector(".input_nombre");
input_password = document.querySelector(".input_password");
container = document.querySelector(".container_login");
container_mensaje = document.querySelector(".container_mensaje");



function validarUsuario () {


}
button_ingresar.addEventListener("click", lectura)


async function leer() {
    const response = await fetch(url, {
          method: 'GET'
    });
    const data = await response.json();
    console.log(data)
    return data
}

async function lectura() {
    const objeto = await leer()
    
    // containercrear.innerHTML = ` `;
    for (let i = 0; i < objeto.body.length; i++) {
        console.log(objeto.body[i].name)
         
          
   

    if(objeto.body[i].name == input_nombre.value && objeto.body[i].password == input_password.value) {
        window.open('operaciones.html',  "_self");
        console.log(objeto.body[i]._id)
        const div = document.createElement("DIV") // crea un div en memoria 
        container.innerHTML = `Usuario logeado `;

    } else {
        
        console.error("no validado");
         
        container_mensaje.innerHTML = ` 
        <p>ERROR DE USUARIO Y/O CONTRASEÑA</p>`;
       

        }
        
    }
     
}
button_ingresar.addEventListener("click", lectura)
