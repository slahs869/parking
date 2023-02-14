
button_imprimir = document.querySelector(".imprimir");
tabla_balance=document.querySelector(".tabla_balance");
tabla_totalesHD = document.querySelector(".tabla_totalesHD");
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
     
    var now = today.toLocaleString();
   // console.log(today);
   
    
   const fixCadena = now.slice(0, 9);
   
                let objeto = await leer();
                fechaActual = (fixCadena);
                var suma=0;
                for(let i=0; i < objeto.body.length; i++){
                        if(objeto.body[i].fechaEntrada==fechaActual && objeto.body[i].total != "NaN"){                           
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
                            numero1 = parseInt(objeto.body[i].total);
                            numero2 = parseInt(suma);
                            suma=numero1 + numero2;
                            resultado=parseInt(suma);
                            console.log(resultado);
                            
                            

                        } 

            }
            const divtotal = document.createElement('TR');
                             const showText1 = `
                                <tr>
                                <td>${resultado}</td>
                                <td>${suma}</td>
                                                                </tr>`
                            divtotal.innerHTML = showText1;
                            tabla_totalesHD.appendChild(divtotal);
           


}


  button_imprimir.addEventListener("click", cargarBalance)
  
  