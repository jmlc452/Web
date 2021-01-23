document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input[type=text]').forEach(node => node.addEventListener('Keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});


const form = document.querySelector("#barra-busqueda");
const resul = document.querySelector("#resultados");


const filt = () => {
    resul.innerHTML = "";
    const text = form.value.toLowerCase();
    for (let game of gamesConst) {
        let name = game.name.toLocaleLowerCase();
        if (name.indexOf(text) !== -1) {
            resul.innerHTML += `<img class="ima-resultado" data-link="${game.link}" src="${game.ima}">`
            click();
        }
    }
    if (resul.innerHTML === "") {
        resul.innerHTML += ''
    }
    if (text == "") {
        resul.innerHTML = "";
    }
}

// Agregamos el listener para la barra de busqueda
form.addEventListener('input', filt);



function click() {
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('#resultados img').forEach((elemento) => {
        elemento.addEventListener('click', () => {

            const link = elemento.dataset.link;
            overlay.classList.add('activo');
            /* for (var i = 0; i < 8; i++) {
                overlay.innerHTML += `<img class="ima-resultado">`
            } */
        });

    });

}

// Eventlistener del overlay
overlay.addEventListener('click', (evento) => {
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
});
var x = false;
var y = false;

function mostrarmediafire() {
    x = !x;
    if (x == true) {
        document.getElementById('textmediafire').style.display = "flex";
    } else {
        document.getElementById('textmediafire').style.display = "none";
    }
}

function mostrarmega() {
    y = !y;
    if (y == true) {
        document.getElementById('textmega').style.display = "flex";
    } else {
        document.getElementById('textmega').style.display = "none";
    }
}
fetch('res/texto.txt')
    .then(res => res.text())
    .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(line => document.write(line));
    })

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement('input');
    aux.setAttribute('value', document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}