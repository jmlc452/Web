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
            if (imgCantidad < 12) {
                imgCantidad++;
                resul.innerHTML += `<img class="ima-resultado" data-link1="${game.link1}" src="${game.ima}">`
            }
            //
        }
    }
    if (resul.innerHTML === "") {
        resul.innerHTML += ''
    }
    if (text == "") {
        resul.innerHTML = "";
    }
    click();
}

// Agregamos el listener para la barra de busqueda
form.addEventListener('input', filt);



function click() {
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('#resultados img').forEach((elemento) => {
        elemento.addEventListener('click', () => {

            const link1 = elemento.dataset.link1;
            overlay.classList.add('activo');
            cargartexto(link1, "#textlink1");

        });

    });

}

// Eventlistener del overlay
overlay.addEventListener('click', (evento) => {
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
});

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