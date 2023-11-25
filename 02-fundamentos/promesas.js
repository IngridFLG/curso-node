
const empleados = [
    {
        id: 1,
        nombre: 'Juan',
    },
    {
        id: 2,
        nombre: 'Camilo',
    },
    {
        id: 3,
        nombre: 'Berta',
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];


const getEmpleado = (id) => {

    const empleado = empleados.find( e  => e.id  === id )
    const promesa =  new Promise( ( resolve, reject ) => {
        
        

         ( empleado ) 
           ? resolve ( empleado.nombre )
           : reject ( `No existe empleado con id ${ id }` )
    })

    return promesa;
}

const getSalario = (id) => {

    const salario = salarios.find( s  => s.id  === id )
    const promesa =  new Promise( ( resolve, reject ) => {
        
        

         ( salario ) 
           ? resolve ( salario.salario )
           : reject ( `No existe salario con id ${ id }` )
    })

    return promesa;
}

const id = 3;

// getEmpleado(id).then( empleado => console.log ( empleado )).catch( err => console.log(err));

// getSalario(id).then( salario => console.log ( salario )).catch( err => console.log(err));

getEmpleado(id).then( empleado => {
    getSalario( id ).then(salario => {
        console.log('El empleado', empleado, 'tiene un salario de:', 'salario', salario).catch(err => console.log(err))
    }).catch(err => console.log(err))
})

