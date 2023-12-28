//query selector
const heading = document.querySelector('.header__texto h2')
heading.textContent = 'nuevo heading';
console.log(heading);

// queryselectorall
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace')

const nuevoEnlace = document.createElement('A')
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Tienda virtual'
nuevoEnlace.classList.add('navegacion__enlace');
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace)



//eventos
// console.log(1);

// window.addEventListener('load', function() {  //load esperra a que el JS y los archivos que dependen del html esten listos
//     console.log(2);
// })

// window.onload = function() {
//     console.log(3)
// }

// document.addEventListener('DOMContentLoaded', function() { //Solo espera por el HTML, pero no espera CSS o imagenes
//     console.log(4)
// })

// console.log(5)

//click

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log('enviando formulario');
// });



// evento de los inputs

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)


//evento submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //validando el formulario
    const { nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){

        mostrarAlterta('Todos los campos son obligatorios', true);
        return;
    }
    

        mostrarAlterta('Se a enviado el formulario')
    


    //Enviar formulario



    console.log('enviando formulario')
});


function leerTexto(e){

    datos[e.target.id] = e.target.value;
    console.log(datos);

};

function mostrarAlterta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();

    },5000);
    
}
