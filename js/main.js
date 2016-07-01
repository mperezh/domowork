$(document).ready(function(){

    $('.parallax').parallax();
    $(".button-collapse").sideNav();

    $('.ir-arriba').click(function(){
      $('body,html').animate({
        scrollTop: '0px'
      }, 800);
    });

    var fecha = new Date(),
        dia = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
        mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto'
              ,'Septiembre','Octubre','Noviembre','Diciembre'],
        hora = fecha.getHours();


    $("#fecha").text(dia[fecha.getDay()] + ", " + fecha.getDate() + " de " +
                      mes[fecha.getMonth()] + " del " + fecha.getFullYear() +
                      " | " + hora + ":" + fecha.getMinutes());



    $('#enviar').click(function(){
      //e.preventDefault();
      var uno = $('input[name="radio1"]:checked').val(),
          dos = $('input[name="radio2"]:checked').val(),
          tres = $('input[name="radio3"]:checked').val(),
          cuatro = $('input[name="radio4"]:checked').val(),
          cinco = $('input[name="radio5"]:checked').val(),
          radios = $.merge( $.merge( $.merge( $.merge( $.merge( [], uno ), dos ), tres ), cuatro ), cinco ),
          cont = 0,
          msj = "";

      for (i = 0; i < radios.length; i++){
        if (radios[i] == "1"){
          cont += 1;
        }
      }

      cont *= 4;

      if(cont == 0){
        cont = 1;
      }

      if (cont < 8) {
        msj = "Bueno, gracias por visitar."
      } else if (cont < 12){
        msj = "Debeías leer otra vez."
      } else if (cont < 16) {
        msj = "Buen trabajo, leiste y entendiste."
      } else if (cont <= 20) {
        msj = "Excelente, prestaste mucha atención al tema. Espero te haya gustado ;)."
      }

      alert("Su puntuación es: "+cont+"/20. "+msj);
      return false;
    });

});
