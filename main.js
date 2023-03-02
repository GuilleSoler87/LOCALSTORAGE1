// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje
////////HECHO//////////


// // Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)

// const form = document.getElementById("formulario");
// const nombreInput = form.elements['nombre'];
// const emailInput = form.elements['email'];
// const mensajeInput = form.elements['mensaje'];
// const container = document.querySelector(".container");

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const nombre = nombreInput.value;
//     const email = emailInput.value;
//     const mensaje = mensajeInput.value;

// localStorage.setItem('userData', JSON.stringify({ nombre, email, mensaje }));
// });


// // // // Muestra el usuario que has guardado en el DOM

// let userData = JSON.parse(localStorage.getItem('userData'))
// console.log(userData)
// container.innerHTML = "<p>"+userData.nombre + "<br>" + "<br>" + userData.email + "<br>" + "<br>" + userData.mensaje + "</p>"



// 2. Extra
// Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)

const form = document.getElementById("formulario");
const nombreInput = form.elements['nombre'];
const emailInput = form.elements['email'];
const mensajeInput = form.elements['mensaje'];
const container2 = document.querySelector(".container2");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = nombreInput.value;
    const email = emailInput.value;
    const mensaje = mensajeInput.value;


    const inData = JSON.parse(localStorage.getItem("usuarios")) || [];


    const newData = { nombre, email, mensaje };
    inData.push(newData);


    localStorage.setItem("usuarios", JSON.stringify(inData));
    pintar()
});

// Mostrar los datos de los contactos guardados en el DOM

function pintar() {
    const inData = JSON.parse(localStorage.getItem("usuarios")) || [];

    inData.forEach(function (persona) {
        const div = document.createElement("div");
        const nombreP = document.createElement("p");
        const emailP = document.createElement("p");
        const mensajeP = document.createElement("p");

        nombreP.textContent = `Nombre: ${persona.nombre}`;
        emailP.textContent = `Email: ${persona.email}`;
        mensajeP.textContent = `Mensaje: ${persona.mensaje}`;

        div.appendChild(nombreP);
        div.appendChild(emailP);
        div.appendChild(mensajeP);
        container2.appendChild(div);
    });
}
pintar()


// Crea un botón para borrar todos los contactos guardados en Local Storage

const btnBorrar = document.getElementById("btn-borrar");

btnBorrar.addEventListener("click", function () {

    localStorage.removeItem("usuarios");
    container2.innerHTML = ""
});
