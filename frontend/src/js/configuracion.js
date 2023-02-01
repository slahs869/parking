const container = document.querySelector(".container1");
const link_tarifa = document.querySelector(".link_tarifa");
const link_usuarios = document.querySelector(".link_usuarios");
const link_impresoras = document.querySelector(".link_impresoras");
const boton = document.querySelector(".botones");
// aca lo llame

function formularioTarifas() {
      const div = document.createElement("DIV") // crea un div en memoria 
      container.innerHTML = ` `;
      container.appendChild(div);
      let variableError = ` 
    <div id="container2">
                    
          <h2> Defina la tarifa para: </h2> 
          <h3>AUTOMOVIL:</h3>
          <input type="text"> 
          <button>Guardar</button><br><br>
          <h3>MOTO: </h3>
          <input type="text" class="input_tarifa">
          <button id="boton_guardar">Guardar</button>
      
    </div> 
    <div class="containertarifas" id="containertarifas">
    </div>                  
          `       // crea el formularios para el div
      div.innerHTML = variableError;            // metemos el mensaje al div que creamos
      container.appendChild(div);
      // metemos el div en memoria al container del html      
}
link_tarifa.addEventListener("click", formularioTarifas)

//_______________________________________________________________________________________________________


function formularioUsuarios() {
      const div = document.createElement("DIV") // crea un div en memoria 
      container.innerHTML = ` `;
      //containercrear.innerHTML = ` `;
      // container.appendChild(div);
      let variableError = `      
      <div id="container">
            <form>               
                  <h2> Menu usuarios </h2>
                  <button class="boton_crear">Crear Usuario</button>
                  <button class="boton_editar">Editar Usuario</button>
                  <button class="boton_eliminar">Eliminar Usuario</button> 
            </form> 
      </div> 
          
      <div class="containercrear" id="containercrear">
			<table>
				<tbody class="tabla" id="tabla">
					<tr>
						<th>Id</th>
						<th>Nombre</th>
						<th>Correo</th>
						<th>Contraseña</th>
						<th>Estado</th>
					</tr>	
				</tbody>
			</table>
		</div>         
            `                                         // crea el formularios para el div
      div.innerHTML = variableError;            // metemos el mensaje al div que creamos
      container.appendChild(div);// metemos el div en memoria al container del html 
      const containercrear = document.querySelector(".containercrear");
      const boton_crear = document.querySelector(".boton_crear");
      const boton_editar = document.querySelector(".editar_usuario");
      const boton_eliminar = document.querySelector(".eliminar_usuario");
      boton_crear.addEventListener("click", formularioCrear);
      boton_crear.addEventListener("click", lectura);
}
link_usuarios.addEventListener("click", formularioUsuarios)
link_usuarios.addEventListener("click", lectura)

//_____________________________________________________________________________________________________________________


function formularioCrear() {
      const div = document.createElement("DIV") // crea un div en memoria 
      container.innerHTML = ` `;
      container.appendChild(div);
      let variableError = `   <div>
            <h2>Crear Usuario</h2>
            <label>nombre</label>
            <input class="input_nombre" type="text" placeholder="Nombre"><br>
            <label>correo</label>
            <input class="input_correo" type="text" placeholder="Correo"><br>
            <label>contraseña</label>
            <input class="input_contraseña" type="password" placeholder="Password">
            <button class="boton_ingresar">ingresar</button>      
      
      </div> 
      <div class="containercrear" id="containercrear">
      </div>
       `
      div.innerHTML = variableError;            // metemos el mensaje al div que creamos
      container.appendChild(div);
      

      
      const boton_editar = document.querySelector(".boton_editar");
      const boton_eliminar = document.querySelector(".boton_eliminar");
      const containercrear = document.querySelector(".containercrear");
      
      
      const boton_ingresar = document.querySelector(".boton_ingresar");
      //
     // boton_editar.addEventListener("click", lectura);
      boton_ingresar.addEventListener("click", agregarUsuario);
}
       async function agregarUsuario() {
            const input_nombre = document.querySelector(".input_nombre");
            const input_correo = document.querySelector(".input_correo");
            const input_contrasena = document.querySelector(".input_contraseña");
            let nombre = input_nombre.value;
            let correo = input_correo.value;
            let contraseña = input_contrasena.value;
      
            const mandarTodo = await agregar(
                  {
                        name: `${nombre}`,
                        email: `${correo}`,
                        password: `${contraseña}`
      
                  })
                  
            console.log(nombre,correo,contraseña)
            const div = document.createElement("DIV") // crea un div en memoria 
      container.innerHTML = ` `;
      container.appendChild(div);
      let variableError = `   <div>
            <h2>cargado con exito</h2>
		</div>  `
      div.innerHTML = variableError;            // metemos el mensaje al div que creamos
      container.appendChild(div);

      }

            

//_______________________________________________________________________________________________________________

function formularioImpresoras() {
      const div = document.createElement("DIV") // crea un div en memoria 
      container.innerHTML = ` `;
      container.appendChild(div);
      let variableError = ` 
      
      <div id="container">
                           
             <h2> Menu Impresoras: </h2>
            <form>
            <h3>Seleccione Impresora</h3>
            <select> 
                  <option>Impresora 1</option>
                  <option>Impresora 2</option>
                  <option>Impresora 3</option>            
            </select>
            <button> GUARDAR</button>
            <input type="checkbox">
            <label>Elegir como predeterminada</label>
            </form>      
      </div>                   
            `                                         // crea el formularios para el div
      div.innerHTML = variableError;            // metemos el mensaje al div que creamos
      container.appendChild(div);
      // metemos el div en memoria al container del html       

}

link_impresoras.addEventListener("click", formularioImpresoras)


async function leer() {
      url2 = 'http://localhost:8000/usuarios';
      url3 = 'http://localhost:8000/home';
     

      const response = await fetch(url3, {
            method: 'GET'
      });
      const data = await response.json();
      console.log(data)
      return data
}

async function lectura() {
      const objeto = await leer()
      // containercrear.innerHTML = ` `;
      for (let i = 0; i < objeto.length; i++) {
            //recorro el objeto que me entrego la consulta 
            // creo un elemento HTML y lo asigno a una variable
            const div = document.createElement('TR');
            const sql = `    
            <tr>
            <td>${objeto[i].id}</td>
            <td>${objeto[i].name}</td>
            <td>${objeto[i].email}</td>
            <td>${objeto[i].password}</td>
            <td>${objeto[i].estado}</td>
                  `
            // creo una variable donde se va a guardar  el resultado de la consulta sql
            div.innerHTML = sql;
            tabla.appendChild(div);
      }
      containercrear.setAttribute("contentEditable","true")

}



async function agregar(datos) {
      await fetch(url3, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(datos), // data can be `string` or {object}!
            headers: {
                  'Content-Type': 'application/json'
            }
      }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

}






