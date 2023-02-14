const store=require('./store')

function addUser(carro,moto, carroMes,motoMes,nombre,nit,direccion,telefono,capacidadM,capacidadC){
    if(!carro){
        return Promise.reject('invalid name');
    }

    const user = {
        carro,
       moto,
       carroMes,
       motoMes,
       nombre,
       nit,
       direccion,
       telefono,
       capacidadM,
       capacidadC
      
    }
    return store.add(user)
}

function listUsers(){
    return store.list();
}

function updateMessage(id,carro,moto,carroMes,motoMes,nombre,nit,direccion,telefono,capacidadM,capacidadC){
    return new Promise(async  (resolve, reject) =>{
        if(!id || !carro){
            reject('invalid data')
            return false;
        }
       const result = await store.updateText(id,carro,moto, carroMes,motoMes,nombre,nit,direccion,telefono,capacidadM,capacidadC)
       resolve(result)
    })
}

function deleteMessage(id){
    return new Promise((resolve, reject)=>{
        if(!id){
            reject('ID invalido')
            return false;
        }
        store.remove(id)
        .then(()=>{ 
            resolve()
        })
        .catch(e => {
            reject(e)
        })
    })
}


module.exports = {
    addUser,
    listUsers,
    updateMessage,
    deleteMessage,
}