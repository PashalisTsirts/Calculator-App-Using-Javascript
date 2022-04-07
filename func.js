function Celcius() {
    var display = document.getElementById("display").value;
    var CelciusResult = 5/9*(display-32);   
    document.getElementById("display").value = CelciusResult + " °C";
}

function Fahrenheit() {
    var display = document.getElementById("display").value;
    var FahrenheitResult = 9/5*display + 32 
    document.getElementById("display").value = FahrenheitResult + " °F";
}