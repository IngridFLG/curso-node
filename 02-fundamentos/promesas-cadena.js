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

const id = 1;
let nombre;

getEmpleado(id).then( empleado => {
    nombre = empleado
    return getSalario(id);
})
.then(salario => console.log( 'El empleado:', empleado, 'Tiene un salario de:', salario ))
.catch( err => console.log (err));