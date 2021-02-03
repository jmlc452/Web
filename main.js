document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});

//window.alert(gamesConst[0].link);

const form = document.querySelector("#barra-busqueda");
const resul = document.querySelector("#resultados");


const filt = () => {
    resul.innerHTML = "";
    const text = form.value.toLowerCase();
    var imgCantidad = 0;
    for (let game of gamesConst) {
        let name = game.name.toLocaleLowerCase();
        if (name.indexOf(text) !== -1) {
            if (imgCantidad < 20) {
                imgCantidad++;
                resul.innerHTML += `<img class="ima-resultado" data-link1="${game.link1}" data-link2="${game.link2}" data-link3="${game.link3}" src="${game.ima}">`
            }
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

            const link1 = elemento.dataset.link1;
            const link2 = elemento.dataset.link2;
            const link3 = elemento.dataset.link3;
            overlay.classList.add('activo');
            cargartexto(link1, "#textlink1");
            cargartexto(link2, "#textlink2");
            cargartexto(link3, "#textlink3");
        });

    });

}

// Eventlistener del overlay
overlay.addEventListener('click', (evento) => {
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
});
var x = false;
var y = false;
var z = false;

function mostrartextlink1() {
    x = !x;
    if (x == true) {
        document.getElementById('textlink1').style.display = "block";
    } else {
        document.getElementById('textlink1').style.display = "none";
    }
}

function mostrartextlink2() {
    y = !y;
    if (y == true) {
        document.getElementById('textlink2').style.display = "block";
    } else {
        document.getElementById('textlink2').style.display = "none";
    }
}

function mostrartextlink3() {
    z = !z;
    if (z == true) {
        document.getElementById('textlink3').style.display = "block";
    } else {
        document.getElementById('textlink3').style.display = "none";
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


function cargartexto(rutaTexto, idDepositoTexto) {
    $.ajax({
        url: rutaTexto,
        dataType: "text",
        success: function(data) {
            $(idDepositoTexto).html("");
            $(idDepositoTexto).html("<pre>" + data + "</pre>");
        }
    });
}

/* $(function() {
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
}); */
