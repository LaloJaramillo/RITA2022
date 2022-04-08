var fecha = new Date("Oct 4, 2022 12:00:00").getTime();

// Actualizar
var x = setInterval(function () {
        // Fecha de hoy
        var hoy = new Date().getTime();

        var tiempo = fecha - hoy;

        var days = Math.floor(tiempo / (1000 * 60 * 60 * 24));
        var hours = Math.floor((tiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((tiempo % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((tiempo % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is over, write some text 
        if (tiempo < 0) {
            clearInterval(x);
        }
    }
, 1000);

