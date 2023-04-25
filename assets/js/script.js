
$.ajax({
    type: "get",
    url: "https://digimon-api.vercel.app/api/digimon",
    dataType: "json",
    success: function (response) {
        tabla(response);
    }
});

function crearImagen(src, alt) {
    var imagen = document.createElement('img');
    imagen.setAttribute('src', src);
    imagen.setAttribute('alt', alt);
    digimagen =imagen
    return imagen;

}


function tabla(datos){
    var cuerpoTabla = document.querySelector('#cuerpoTabla');
    for(var i = 0 ; i < datos.length ; i = i + 1){
        var fila = document.createElement('tr');
        var columnaUno = document.createElement('td');
        var columnaDos = document.createElement('td');
        var columnaTres = document.createElement('td');

        columnaUno.innerHTML = datos[i].name;
        columnaDos.appendChild(crearImagen(datos[i].img, datos[i].name));
        columnaTres.innerHTML = datos[i].level;

        fila.append(columnaUno, columnaDos, columnaTres);
        cuerpoTabla.append(fila);

        console.log(columnaUno, columnaDos, columnaTres)
    }
}
