function mostrarMensaje() {
    alert("Este es mi mensaje personalizado.");
  }

  

  window.onload = function() {
    setInterval(function() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    // Agrega un cero delante de los minutos y segundos si es necesario
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }

    // Muestra la hora en el elemento HTML correspondiente
    document.getElementById("hora").innerHTML = hora + ":" + minutos + ":" + segundos;
  }, 1000); // 1000 milisegundos = 1 segundo

 
  var fechaActual = new Date();
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1; // Suma 1 porque los meses comienzan en 0
  var año = fechaActual.getFullYear();
  var fechaFormateada = dia + '/' + mes + '/' + año;
  document.getElementById('fecha').innerHTML = fechaFormateada;

}