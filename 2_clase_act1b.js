// Se implementa la modularizacion del codigo (podria haber escrito la funcion en el modulo principal)

const mostrarListaEstudiantes = (lista) => {
    console.log('Lista de estudiantes registrados:')
lista.forEach((estudiante) => {console.log(`Nombre: ${estudiante.nombre} | Edad: ${estudiante.edad}`)})
};

module.exports = {mostrarListaEstudiantes};