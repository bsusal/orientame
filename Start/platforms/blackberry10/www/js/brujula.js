//Opciones de la brújula
blackberry.sensors.setOptions("devicecompass", { delay: 1000 });
document.addEventListener("devicecompass", compassCallback); //Definimos la función manejador del evento
blackberry.sensors.setOptions("devicecompass", { background: true, batching: true });
 

 navigator.compass.getCurrentHeading(onSuccess, onError);
 

// onSuccess: Se muestra por la salida de consola el valor leído de la brújula

function onSuccess(heading) {
    console.log('Heading: ' + heading.magneticHeading);

}

// Detección de errores en caso de que falle la brújula
//
function onError(compassError) {
    console.log('Compass Error: ' + compassError.code);
}

function compassCallback(sensor, data) {
    //Se llama cada vez que se lee la brújula y se repinta
     console.log(sensor.value);
     //console.log("Current azimuth: " + data.value);
     pintado(sensor.value);
     document.getElementById('posicion').innerHTML=sensor.value.toPrecision(4);
}

var ctx;
var aguja;
var brujula;

function initBrujula(){
    //Creación del canvas
    var canvas = document.getElementById("lienzo");
    ctx = canvas.getContext("2d");
    carga();
    
}

function limpiar() {
        ctx.clearRect(0, 0, 800, 800);
}

function carga(){
    aguja = new Image();
    //aguja.src = 'aguja.png';
    aguja.src='img/compass_needle.png';
    aguja.height = 700;
    // Load the compass image
    brujula = new Image();
    brujula.src = 'img/compass.gif';
    //brujula.height = 900;
    //brujula.onload = imgLoaded;
}
/* Repintado periódico. Se utilizan las lecturas de la brújula para ello
function imgLoaded() {
    setInterval(pintado, 1000);
}*/

function pintado(valor){
    //Valor es el dato leído de la brújula
    limpiar();
    ctx.drawImage(brujula, 0, 0, 800, 800);
    ctx.save();
    ctx.translate(400, 400);
    ctx.rotate(-valor * (Math.PI / 180));
    //ctx.rotate(valor);
    ctx.drawImage(aguja, -300, -300, 600, 600);
    
    ctx.restore();
}