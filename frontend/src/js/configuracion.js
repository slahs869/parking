const url = 'http://localhost:3000/user';    //'https://parqueadero2.herokuapp.com/user';
const url2 = 'http://localhost:3000/price'; // 'https://parqueadero2.herokuapp.com/price';

const container = document.querySelector(".container1");
const link_tarifa = document.querySelector(".link_tarifa");
const link_usuarios = document.querySelector(".link_usuarios");
const link_impresoras = document.querySelector(".link_impresoras");
const link_factura = document.querySelector(".link_factura");
const boton = document.querySelector(".botones");
// aca lo llame

async function formularioTarifas() {
      const div = document.createElement("DIV") // crea un div en memoria 
      container.innerHTML = ` `;
      container.appendChild(div);
      let variableError = ` 
      <div id="container2">
			<h1> PLAN DE TARIFAS </h1> 

		<div id="div_tarifa">
          <h2 class="motosTitle"> MOTOS: </h2> 
          <h3>HORA:</h3>
		  <input type="text" class="iMoto">
          <h3>DIA:</h3>
		  <input type="text" class="iMoto_dia"> 
		  <h3>MES:</h3>
		  <input type="text" class="iMoto_mes">
		  <button id="boton_guardar" class="guardar_Moto ">Guardar</button>
		  </div>

		  <div id="div_tarifa">
			<h2 class="carrosTitle">CARROS: </h2>			
                  <h3> HORA:</h3> 
		      <input type="text" class="iCarro"> 
		      <h3>DIA:</h3>        
                  <input type="text" class="iCarro_dia">          
                  <h3>MES: </h3>
		      <input type="text" class="iCarro_mes">
		      <button id="boton_guardar" class="guardar_carro ">Guardar</button>
                  </div>
          
      <div class="iCarro">
		
		</div> 


		<div class="containertarifas" id="containertarifas">
            </div> 
            <div class="containertarifas_mes" id="containertarifas_mes">
            </div> 
                       
          `       // crea el formularios para el div
      div.innerHTML = variableError;            // metemos el mensaje al div que creamos
      container.appendChild(div);
      // metemos el div en memoria al container del html    
      botonCarro = document.querySelector('.guardar_carro');
      inputCarroHora = document.querySelector('.iCarro');
      inputCarroDia=document.querySelector(".iCarro_dia");
      inputCarroMes=document.querySelector(".iCarro_mes");
      h2Carros=document.querySelector(".carrosTitle");
      h2Motos=document.querySelector(".motosTitle")


      botonMoto = document.querySelector('.guardar_Moto');
      inputMotoHora = document.querySelector('.iMoto');
      inputMotoDia=document.querySelector(".iMoto_dia");
      inputMotoMes=document.querySelector(".iMoto_mes");

      botonMoto.addEventListener("click", moto);
      botonCarro.addEventListener("click", carro);
      let MostarPrecio = await leerPrecio()
      let tarifas = document.querySelector('.containertarifas')
      tarifas.innerHTML = `<h3>TARIFAS MOTO:</h3>
     <h4>HORA MOTO: ${MostarPrecio.body[0].carro}</h4>
     <h4>DIA MOTO: ${MostarPrecio.body[0].moto}</h4>
     <h4>MES MOTO: ${MostarPrecio.body[0].nombre}</h4>`

     let tarifas_mes = document.querySelector('.containertarifas_mes')
     tarifas_mes.innerHTML = `<h3>TARIFAS CARRO:</h3>
    <h4>HORA CARRO: ${MostarPrecio.body[2].carro}</h4>
    <h4>DIA CARRO: ${MostarPrecio.body[2].moto}</h4>
    <h4>MES CARRO: ${MostarPrecio.body[2].nombre}</h4>`;


      async function carro() {
            if (inputCarroHora.value != '' && !isNaN(inputCarroHora.value) && inputCarroDia.value != '' && !isNaN(inputCarroDia.value) && inputCarroMes.value != '' && !isNaN(inputCarroMes.value)) {
                  let datosPrecio = await leerPrecio()

                  await precio('63eb5ea5197365e272f55725', {
                        carro: inputCarroHora.value,
                        moto:  inputCarroDia.value,
                        nombre:  inputCarroMes.value,
                  })

                  tarifas_mes.innerHTML = `
                  <h4 style="color:#39FF14">A??adido correctamente</h4>
                  <h4 style="color:#39FF14">TARIFAS CARRO:</h4>
                  <h4 style="color:#39FF14">HORA CARRO: ${MostarPrecio.body[2].carro}</h4>
                  <h4 style="color:#39FF14">DIA CARRO: ${MostarPrecio.body[2].moto}</h4>
                  <h4 style="color:#39FF14">MES CARRO: ${MostarPrecio.body[2].nombre}</h4>`;
                  //localStorage.setItem("carro", inputCarro.value)
                  setTimeout(() => {
                        formularioTarifas() 
                  }, 600);
               //   formularioTarifas()
            } else{  //
                        h2Carros.innerHTML=`<h2 style="color:#39FF14">Ingrese todos los campos</h2>`;
                       // h2.carros.setAttribute("id","cambiaColor");

            }
      }
      async function moto() {
            if (inputMotoHora.value != '' && !isNaN(inputMotoHora.value) && inputMotoDia.value != '' && !isNaN(inputMotoDia.value) && inputMotoMes.value != '' && !isNaN(inputMotoMes.value)) {
                  let datosPrecio = await leerPrecio()
                  await precio('63e183f27dda95ae0da4ebcd', {
                        carro: inputMotoHora.value,
                        moto:  inputMotoDia.value,
                        nombre: inputMotoMes.value,
                  })

                  tarifas.innerHTML = `
                  <h3  style="color:#39FF14">TARIFAS MOTO:</h3>
                  <h4  style="color:#39FF14">HORA MOTO: ${MostarPrecio.body[0].carro}</h4>
                  <h4  style="color:#39FF14">DIA MOTO: ${MostarPrecio.body[0].moto}</h4>
                  <h4 style="color:#39FF14">MES MOTO: ${MostarPrecio.body[0].nombre}</h4>`

                  setTimeout(() => {
                        formularioTarifas() 
                  }, 600);
                //  localStorage.setItem("moto", inputMoto.value)
            } else{
                  h2Motos.innerHTML=`<h2 style="color:#39FF14">Ingrese todos los campos</h2>`;
                  // h2.carros.setAttribute("id","cambiaColor");
            }
      }



    



}

formularioTarifas();



link_tarifa.addEventListener("click", formularioTarifas);

//_______________________________________________________________________________________________________


function formularioUsuarios() {
      const div = document.createElement("DIV") // crea un div en memoria 
      container.innerHTML = ` `;
      //containercrear.innerHTML = ` `;
      // container.appendChild(div);
      let variableError = `      
      <div id="container">
            <form>               
                  <h1> USUARIOS </h1>
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
						<th>Contrase??a</th>
						
					</tr>	
				</tbody>
			</table>
		</div>         
            `                                         // crea el formularios para el div
      div.innerHTML = variableError;            // metemos el mensaje al div que creamos
      container.appendChild(div);// metemos el div en memoria al container del html 
      const containercrear = document.querySelector(".containercrear");
      const boton_crear = document.querySelector(".boton_crear");
      const boton_editar = document.querySelector(".boton_editar");
      const boton_eliminar = document.querySelector(".boton_eliminar");
      boton_crear.addEventListener("click", formularioCrear);
      boton_crear.addEventListener("click", lectura);
      boton_editar.addEventListener("click", editar_usuario)
      boton_eliminar.addEventListener("click", eliminar)
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
            <label>contrase??a</label>
            <input class="input_contrase??a" type="password" placeholder="Password">
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
      const input_contrasena = document.querySelector(".input_contrase??a");
      let nombre = input_nombre.value;
      let correo = input_correo.value;
      let contrase??a = input_contrasena.value;

      const mandarTodo = await agregar(
            {
                  name: `${nombre}`,
                  email: `${correo}`,
                  password: `${contrase??a}`,
                  estado: 'activo'

            })


      const div = document.createElement("DIV") // crea un div en memoria 
      container.innerHTML = ` `;
      container.appendChild(div);
      let variableError = `   <div>
            <h2>cargado con exito</h2>
		</div>  `
      div.innerHTML = variableError;            // metemos el mensaje al div que creamos
      container.appendChild(div);

}

async function editar_usuario() {
      const objeto = await leer()

      tabla.innerHTML = `<h4>editar</h4>
         <tr>
         <th>Id</th>
         <th>Nombre</th>
         <th>Correo</th>
         <th>Contrase??a</th>
         <th>Estado</th>
         <th>Enviar</th>
      </tr>`

      let a = [];
      let b = [];
      let c = [];
      let d = [];
      let e = [];
      let identi = [];

      for (let i = 0; i < objeto.body.length; i++) {
            //recorro el objeto que me entrego la consulta 
            // creo un elemento HTML y lo asigno a una variable
            const div = document.createElement('TR');
            div.setAttribute("id", `${objeto.body[i]._id}`)
            //<tr id=>

            const sql = `    
                  
      
                  <td>${objeto.body[i]._id}</td>
                  <td id="${objeto.body[i].name}">${objeto.body[i].name}</td>
                  <td id="${objeto.body[i].email}">${objeto.body[i].email}</td>
                  <td id="${objeto.body[i].password}">${objeto.body[i].password}</td>
                  <td id="${objeto.body[i].estado}" >${objeto.body[i].estado} </td>
                  <td id=${i}><input class=editar type='checkbox' name='radio'></td>
                        `
            // creo una variable donde se va a guardar  el resultado de la consulta sql
            div.innerHTML = sql;
            tabla.appendChild(div);

            a[i] = `${objeto.body[i]._id}`
            b[i] = `${objeto.body[i].name}`
            c[i] = `${objeto.body[i].email}`
            d[i] = `${objeto.body[i].password}`
            e[i] = `${objeto.body[i].estado}`
            identi[i] = i



      }
      // 
      tabla.setAttribute("contentEditable", "true")

      a.forEach(list => {
            let datoscon = document.getElementById(list)

            datoscon.addEventListener("click", (e) => {
                  // datoscon.setAttribute("contentEditable","true")
                  let start = datoscon.textContent.trimStart()

                  let cadena = start.split("  ")
                  let cadenaSin = []

                  for (let i = 0; i < cadena.length; i++) {
                        if (cadena[i] !== '' && cadena[i] !== '\n') {

                              cadenaSin.push(cadena[i])
                        }
                  }


                  nuevaCadena = []
                  cadenaSin.forEach(cadena => {
                        let finali = cadena.replace('\n', '')
                        nuevaCadena.push(finali)

                  })


                  identi.forEach(id => {
                        let enviarCheck = document.getElementById(id)
                        enviarCheck.addEventListener("click", (e) => {
                              let ok = e.target.value;
                              if (ok == 'on' && nuevaCadena !== '') {
                                    agregarUnDato(nuevaCadena[0], {
                                          name: `${nuevaCadena[1]}`,
                                          email: `${nuevaCadena[2]}`,
                                          password: `${nuevaCadena[3]}`,
                                          estado: `${nuevaCadena[4]}`,
                                    })
                              }
                        })

                  })
            })
      });


}

async function eliminar() {
      const objeto = await leer()

      tabla.innerHTML = `<h4>click en la colunma hasta que seleccione, luego click en id para eliminar </h4>
   <tr>
  <!-- <th>check</th>  -->
   <th>Id</th>
   <th>Nombre</th>
   <th>Correo</th>
   <th>Contrase??a</th>
   <th>Estado</th>

</tr>`

      let a = [];
      let b = [];
      let c = [];
      let d = [];
      let e = [];
      let identi = [];

      for (let i = 0; i < objeto.body.length; i++) {
            //recorro el objeto que me entrego la consulta 
            // creo un elemento HTML y lo asigno a una variable
            const div = document.createElement('TR');
            //   tabla.innerHTML=''
            div.setAttribute("id", `${i}`)
            //<tr id=>

            const sql = `    
           <!-- <td><input id="${objeto.body[i]._id}+z" class=editar type='checkbox' name='radio'></td> -->
            <td id="${objeto.body[i]._id}">${objeto.body[i]._id}</td>
            <td id="${objeto.body[i].name}">${objeto.body[i].name}</td>
            <td id="${objeto.body[i].email}">${objeto.body[i].email}</td>
            <td id="${objeto.body[i].password}">${objeto.body[i].password}</td>
            <td id="${objeto.body[i].estado}" >${objeto.body[i].estado} </td>
          
                  `
            // creo una variable donde se va a guardar  el resultado de la consulta sql
            div.innerHTML = sql;
            tabla.appendChild(div);

            a[i] = `${objeto.body[i]._id}`
            b[i] = `${objeto.body[i]._id}+z`
            c[i] = `${objeto.body[i].email}`
            d[i] = `${objeto.body[i].password}`
            e[i] = `${objeto.body[i].estado}`
            identi[i] = i
      }
      let columna = true;
      let resalto;
      identi.forEach(list => {
            let datos = document.getElementById(list)

            datos.addEventListener("click", () => {
                  columna = !columna
                  if (columna == true) {
                        datos.setAttribute("class", "color")
                        resalto = true


                  }
                  if (columna === false) {
                        datos.setAttribute("class", "vacio")
                        resalto = false
                  }

            })
      })
      a.forEach(list => {
            let datoscon = document.getElementById(list)

            datoscon.addEventListener("click", deleteOne)


      })


      async function deleteOne(e) {
            // datoscon.setAttribute("contentEditable","true")



            let id = e.target
            let dato = id.innerHTML

            if (resalto == true) {
                  let confirmacion = confirm("??Deseas elimnar el usuario?")
                  if (confirmacion == true) {
                        await borrar(dato)
                        tabla.innerHTML = ''
                        await eliminar()
                  }

            }
      }

}

//_______________________________________________________________________________________________________________

function formularioImpresoras() {
      const div = document.createElement("DIV") // crea un div en memoria 
      container.innerHTML = ` `;
      container.appendChild(div);
      let variableError = ` 
      
      <div id="container">
                           
             <h1> IMPRESORAS </h1>
            <form>
            <h3>Seleccione Impresora:</h3>
            <select> 
                  <option>Epson TM 20II</option>
                  <option>Generic Only Text</option>
                  <option>Print to PDF</option>            
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

async function infoFactura() {

      const div = document.createElement("DIV") // crea un div en memoria 
      container.innerHTML = ` `;
      container.appendChild(div);
      let variableError = `<style>
      
#label_moto{

      margin-left:180px;
}
      </style>
      <h1> INFO PARQUEADERO </h1>
      <label>Nombre:</label>
      <input type="text" class="nombre">
      <label>Nit:</label>
      <input type="text" class="nit">
      <label>Direccion:</label>
      <input type="text" class="direccion"><br>
      <label>Telefono:</label>
      <input type="text" class="telefono"><BR> <br>
      <label>CAPACIDAD:</label>
      <label>Carros:</label>
      <input type="text" class="capacidadC">
      <label>Logo:</label>
      <input type="file" name="imagensubida" accept="image/*" class="imagen"><br>
      <label id="label_moto" >Motos:</label>
      <input type="text" class="capacidadM">
      <button class="guardar">Guardar</button>
      
      
      `

      div.innerHTML = variableError;            // metemos el mensaje al div que creamos
      container.appendChild(div);

      const imagen = document.querySelector('.imagen')
      const guardar = document.querySelector('.guardar')
      const nombre = document.querySelector('.nombre')
      const nit = document.querySelector('.nit')
      const direccion = document.querySelector('.direccion')
      const telefono = document.querySelector('.telefono')
      const capacidadC = document.querySelector('.capacidadC')
      const capacidadM = document.querySelector('.capacidadM')

      let datos = await leerPrecio()


      guardar.addEventListener("click", aggdatos)

      async function aggdatos() {

            let nombre1 = nombre.value;
            let nit1 = nit.value;
            let direccion1 = direccion.value;
            let telefono1 = telefono.value;
            let capacidadC1 = capacidadC.value;
            let capacidadM1 = capacidadM.value;

            console.log(nombre1, nit1, direccion1, telefono1, capacidadC1, capacidadM1)
            const reader = new FileReader();
            reader.readAsDataURL(imagen.files[0]);
            reader.addEventListener("load", async (e) => {
                  let img = e.currentTarget.result;
                  localStorage.setItem("foto", img)
                  localStorage.setItem("direccion", direccion1)
                  localStorage.setItem("telefono", telefono1)
                  localStorage.setItem("nit", nit1)

                  await precio("63eae3f325b8cb0812bb7a2b", {
                        nombre: `${nombre1}`,
                        nit: `${nit1}`,
                        direccion: ` ${direccion1}`,
                        telefono: `${telefono1}`,
                        capacidadC: `${capacidadC1}`,
                        capacidadM: `${capacidadM1}`,
                        carro: `hola`
                  })

                  location.reload()

            })
      }


}




link_factura.addEventListener("click", infoFactura)







link_impresoras.addEventListener("click", formularioImpresoras)


async function leer() {
      const response = await fetch(url, {
            method: 'GET'
      });
      const data = await response.json();

      return data
}

async function leerPrecio() {
      const response = await fetch(url2, {
            method: 'GET'
      });
      const data = await response.json();

      return data
}

async function lectura() {
      const objeto = await leer()

      // containercrear.innerHTML = ` `;
      for (let i = 0; i < objeto.body.length; i++) {
            //recorro el objeto que me entrego la consulta 
            // creo un elemento HTML y lo asigno a una variable
            const div = document.createElement('TR');
            const sql = `    
            <tr>
            <td>${objeto.body[i]._id}</td>
            <td>${objeto.body[i].name}</td>
            <td>${objeto.body[i].email}</td>
            <td>${objeto.body[i].password}</td>
            
                  `
            // creo una variable donde se va a guardar  el resultado de la consulta sql
            div.innerHTML = sql;
            tabla.appendChild(div);
      }

}



async function agregar(datos) {
      await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(datos), // data can be `string` or {object}!
            headers: {
                  'Content-Type': 'application/json'
            }
      }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('a??adido correctamente'));

}




async function agregarUnDato(id, datos) {
      await fetch(`${url}/${id}`, {

            method: 'PATCH', // or 'PUT'
            body: JSON.stringify(datos), // data can be `string` or {object}!
            headers: {
                  'Content-Type': 'application/json'
            }
      }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('a??adido correctamente'));

}

async function precio(id, datos) {
      await fetch(`${url2}/${id}`, {

            method: 'PATCH', // or 'PUT'
            body: JSON.stringify(datos), // data can be `string` or {object}!
            headers: {
                  'Content-Type': 'application/json'
            }
      }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('a??adido correctamente'));

}

async function borrar(id) {
      const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
      });
      const data = await response.json();

      return data;
}




