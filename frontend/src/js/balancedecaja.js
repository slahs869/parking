
button_imprimir = document.querySelector(".imprimir");
tabla_balance=document.querySelector(".tabla_balance");
tabla_totalesHD = document.querySelector(".tabla_totalesHD");
tabla_mensualidades = document.querySelector(".tabla_mensualidades");
tabla_totalesMes = document.querySelector(".tabla_totalesMes");
boton_balance = document.querySelector(".boton_balance");
const url = 'http://localhost:3000/message'
const url2 = 'http://localhost:3000/mensualidades'



  



async function leer() {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
  
    return data
    console.log(data);
  }

  async function leerMensualidad() {
    const response = await fetch(url2, {
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
                var contador=0;
                var suma=0;
                for(let i=0; i < objeto.body.length; i++){
                        if(objeto.body[i].fechaEntrada==fechaActual && objeto.body[i].total != "NaN" ){ 
                          //console.log(objeto.body[i])  
                                               
                            const div = document.createElement('TR');

                             const showText = `
                                <tr>
                                <td>${objeto.body[i]._id}</td>
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
                            contador = contador+1;
                            
                            
                        } 
            }
            var resultado1=0;
            var contador1=0;
                var suma1=0;
            let objetoMensualidad = await leerMensualidad();
            for(let i=0; i<objetoMensualidad.body.length; i++){
              
              if(objetoMensualidad.body[i].mensualidad=="si" && objetoMensualidad.body[i].fechaEntrada==fechaActual){
                
                console.log(objetoMensualidad.body[i]);
                
                const div = document.createElement('TR');
                const showText = `
                                <tr>
                                <td>${objetoMensualidad.body[i]._id}</td>
                                <td>${objetoMensualidad.body[i].placa}</td>
                                <td>${objetoMensualidad.body[i].message}</td>
                                <td>${objetoMensualidad.body[i].fechaEntrada}</td>
                                <td>${objetoMensualidad.body[i].fechaSalida}</td>
                                <td>${objetoMensualidad.body[i].total}</td>
                                                           </tr>
                                `
                                div.innerHTML = showText;
                                tabla_mensualidades.appendChild(div);
                                numero3 = parseInt(objetoMensualidad.body[i].total);
                            numero4 = parseInt(suma1);
                            suma1=numero3 + numero4;
                            resultado1=parseInt(suma1);
                            contador1 = contador1+1;
                           // console.log(contador1)

              }
              else{
               // console.log(fechaActual);
                //console.log(objetoMensualidad.body[i]);
              }
            }


            
                            const divtotal = document.createElement('TR');
                            divtotal.innerHTML = ` `;
                            tabla_totalesHD.appendChild(divtotal);
                            const showText1 = `
                                <tr>
                                <td>${contador}</td>
                                <td>${resultado}</td>
                                                                </tr>`
                            divtotal.innerHTML = showText1;
                            tabla_totalesHD.appendChild(divtotal);

                            //________________________________________________________________________



                            const divtotalMes = document.createElement('TR');
                            divtotalMes.innerHTML = ` `;
                            tabla_totalesMes.appendChild(divtotalMes);
                            const showText2 = `
                                <tr>
                                <td>${contador1}</td>
                                <td>${resultado1}</td>
                                                                </tr>`
                            divtotalMes.innerHTML = showText2;
                            tabla_totalesMes.appendChild(divtotalMes);
                            

           

             print();
}


  button_imprimir.addEventListener("click", cargarBalance)
  
  
 
  
  