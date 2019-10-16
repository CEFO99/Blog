var lunes = document.getElementById("lun");
var martes = document.getElementById("mart");
var miercoles = document.getElementById("mierc");
var jueves = document.getElementById("juev");
var viernes = document.getElementById("vier");

lunes.addEventListener("click", function(){
    document.getElementById("lunes").style.display = "block";
    document.getElementById("martes").style.display = "none";
    document.getElementById("miercoles").style.display = "none";
    document.getElementById("jueves").style.display = "none";
    document.getElementById("viernes").style.display = "none";
    document.getElementById("alerav").style.display = "none";
})

martes.addEventListener("click", function(){
    document.getElementById("martes").style.display = "block";
    document.getElementById("lunes").style.display = "none";
    document.getElementById("miercoles").style.display = "none";
    document.getElementById("jueves").style.display = "none";
    document.getElementById("viernes").style.display = "none";
    document.getElementById("alerav").style.display = "none";
})

miercoles.addEventListener("click", function(){
    document.getElementById("miercoles").style.display = "block";
    document.getElementById("martes").style.display = "none";
    document.getElementById("lunes").style.display = "none";
    document.getElementById("jueves").style.display = "none";
    document.getElementById("viernes").style.display = "none";  
    document.getElementById("alerav").style.display = "none";
})

jueves.addEventListener("click", function(){
    document.getElementById("jueves").style.display = "block";
    document.getElementById("martes").style.display = "none";
    document.getElementById("miercoles").style.display = "none";
    document.getElementById("lunes").style.display = "none";
    document.getElementById("viernes").style.display = "none";
    document.getElementById("alerav").style.display = "none";
})

viernes.addEventListener("click", function(){
    document.getElementById("viernes").style.display = "block";
    document.getElementById("martes").style.display = "none";
    document.getElementById("miercoles").style.display = "none";
    document.getElementById("jueves").style.display = "none";
    document.getElementById("lunes").style.display = "none";
    document.getElementById("alerav").style.display = "none";
})