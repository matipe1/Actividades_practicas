// Generar un registro de estudiantes con modulo readline-sync
// Esto se realiza ya que no disponemos de una funcion prompt (estamos desde node)

const readLineSync = require('readline-sync');
const {mostrarListaEstudiantes} = require('./2_clase_act1b.js');

const registrarEstudiantes = () => {
    const cantidadEstudiantes = readLineSync.question('Ingrese la cantidad de estudiantes a registrar: ');
    const estudiantes = [];

for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readLineSync.question(`Ingrese el nombre del estudiante ${i + 1}: `);
    const edad = readLineSync.question(`Ingrese edad del estudiante ${nombre}: `);

    const estudiante = {
        nombre,
        edad
    }
    estudiantes.push(estudiante)
}

mostrarListaEstudiantes(estudiantes);
};


// Iniciar el registro de estudiantes
registrarEstudiantes()
