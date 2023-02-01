url = 'http://localhost:3000/usuarios';

const container = document.querySelector('.container')

async function leer() {
  const response = await fetch(url, {
    method: 'GET'
  });
  const data = await response.json();
  //console.log(data)
  //return data

}

async function lectura() {
  const objeto = await leer()                             //hace la consulta el metodo await espera un resultado

  for (let i = 0; i < objeto.length; i++) {              //recorro el objeto que me entrego la consulta 
    const div = document.createElement('DIV')             // creo un elemento HTML y lo asigno a una variable
    let sql = `${objeto[i].id} ${objeto[i].name} ${objeto[i].descripcion}`     // creo una variable donde se va a guardar  el resultado de la consulta sql

    div.innerHTML = sql;

    container.appendChild(div)


  }

}

//lectura()

async function crear() {
  const response = await fetch(url, {
    method: 'POST'
  });
  const data = await response.json();
  //console.log(data)
  //return data

}

//escritura