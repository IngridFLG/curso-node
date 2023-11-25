
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



const getEmpleado = (id, callback) => {

    const empleado = empleados.find( e  => e.id  === id )?.nombre

    if ( empleado ) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }
    
}

const getSalario = (id, callback) => {

    const salario =  salarios.find( e => e.id === id)?.salario

    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario con id ${ id } no existe`);
    }

}

 getEmpleado(1, (error, empleado) => {

    if (error){
        console.log('ERROR!');
        return console.log(error);
    }

    // console.log('Empleado existe!');
    // console.log(empleado.nombre);

    getSalario(1, (error, salario) => {

        if (error){
            console.log('ERROR!');
            return console.log(error);
        }
    
        console.log('El empleado:', empleado, 'tiene un salario de:', salario);
       
     })
    
 })
 
//  getSalario(10, (error, salario) => {

//     if (error){
//         console.log('ERROR!');
//         return console.log(error);
//     }

//     console.log('Salario');
//     console.log(salario);

//  })



