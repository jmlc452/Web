const formulario = document.querySelector("#barra-busqueda");
const resultados = document.querySelector("#resultados");
const boton = document.getElementById("boton");

const filtrar = () => {
    resultados.innerHTML = "";
    const texto = formulario.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.nombre.toLocaleLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultados.innerHTML += `<img class="ima-resultado" data-nombre="${producto.nombre}" data-descripcion="${producto.descripcion}" data-link="${producto.link}" data-requisitos="${producto.requisitos}" src="${producto.ima}">`
            click();
        }
    }
    if (resultados.innerHTML === "") {
        resultados.innerHTML += ''
    }
    if (texto == "") {
        resultados.innerHTML = "";
    }
}

boton.addEventListener("click", filtrar)


function click() {
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('#resultados img').forEach((elemento) => {
        elemento.addEventListener('click', () => {
            const nombre = elemento.dataset.nombre;
            const descripcion = elemento.dataset.descripcion;
            const contenido = elemento.dataset.contenido;
            const requisitos = elemento.dataset.requisitos;
            const link = elemento.dataset.link;

            document.querySelector('#overlay .nombre').innerHTML = nombre;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
            document.querySelector('#overlay .contenido').innerHTML = contenido;
            document.querySelector('#overlay .requisitos').innerHTML = requisitos;
            document.querySelector('#overlay .links').innerHTML = link;
            overlay.classList.add('activo');
        });

    });
    overlay.addEventListener('click', (evento) => {
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
    });
}

window.addEventListener('load', () => {
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');


            const cotenedorCategorias = document.querySelectorAll('#categorias p');
            cotenedorCategorias.forEach(element => {
                element.classList.remove('pactivo');
                if ("b-" + element.id == evento.target.id) {
                    element.classList.add("pactivo");
                };

            });
        });
    });
})