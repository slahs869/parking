
button_imprimir = document.querySelector(".imprimir");
tabla_balance=document.querySelector(".tabla_balance");
const url = 'http://localhost:3000/message'



async function leer() {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
  
    return data
    console.log(data);
  }

async function cargarBalance (){
    // crea un nuevo objeto `Date`
    var today = new Date();
 
    var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'};
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';
     
    var now = today.toLocaleString('en-US', options);
   // console.log(today);
 

                let objeto = await leer();
                fechaActual = (now);
                //console.log(objeto.body[1].fecha);
                //console.log(fechaActual);
                for(let i=0; i < objeto.body.length; i++){
                    
                    objeto.body[i].fechaEntrada = new Date().toLocaleDateString();
                    console.log(objeto.body[i].fechaEntrada);
                    console.log(now);
                    
                        if(objeto.body[i].fechaEntrada==now){

                            console.log('esto es la fechaEntrada'+objeto.body[i].fechaEntrada);
                            console.log('esto es la actual' + fechaActual);
                           
                            const div = document.createElement('TR');
                             const showText = `
                                <tr>
                                <td>${objeto.body[i].id}</td>
                                <td>${objeto.body[i].placa}</td>
                                <td>${objeto.body[i].message}</td>
                                <td>${objeto.body[i].fechaEntrada}</td>
                                <td>${objeto.body[i].fechaSalida}</td>
                                <td>${objeto.body[i].total}</td>
                                </tr>`
                            div.innerHTML = showText;
                            tabla_balance.appendChild(div);

                        } 

            }


}






  button_imprimir.addEventListener("click", cargarBalance);

  