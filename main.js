document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});

window.alert(gamesConst[0].link);

const form = document.querySelector("#barra-busqueda");
const resul = document.querySelector("#resultados");


const filt = () => {
    resul.innerHTML = "";
    const text = form.value.toLowerCase();
    for (let game of gamesConst) {
        let name = game.name.toLocaleLowerCase();
        if (name.indexOf(text) !== -1) {
            resul.innerHTML += `<img class="ima-resultado" data-linkmg="${game.linkmg}" data-linkgd="${game.linkgd}" src="${game.ima}">`
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

            const linkMG = elemento.dataset.linkmg;
            const linkGD = elemento.dataset.linkgd;
            overlay.classList.add('activo');
            cargartexto(linkGD, "#textgoogledrive");
            cargartexto(linkMG, "#textmega");
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

function mostrargoogledrive() {
    x = !x;
    if (x == true) {
        document.getElementById('textgoogledrive').style.display = "block";
    } else {
        document.getElementById('textgoogledrive').style.display = "none";
    }
}

function mostrarmega() {
    y = !y;
    if (y == true) {
        document.getElementById('textmega').style.display = "block";
    } else {
        document.getElementById('textmega').style.display = "none";
    }
}

/* fetch('res/texto.txt')
    .then(res => res.text())
    .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(line => document.write(line));
    })

 */
function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement('input');
    aux.setAttribute('value', document.getElementById(id_elemento).innerText);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

$(document).ready(function() {
    $("#button").width(500).height(500).hide().fadeIn(10000);


});

function cargartexto(rutaTexto, idDepositoTexto) {
    $.ajax({
        url: rutaTexto,
        dataType: "text",
        success: function(data) {
            $(idDepositoTexto).html("<pre>" + data + "</pre>");
        }
    });
}

$(function() {
    $("#button").click(function() {
        //var TXT_URL = 'https://www.mozilla.org/media/MPL/2.0/index.815ca599c9df.txt';
        var TXT_URL = $("#input-url").val();

        $.ajax({
            url: TXT_URL,
            dataType: "text",
            success: function(data) {
                $(".text").html("<pre>" + data + "</pre>");
            }
        });
    });
});
