function mensaje(){
	    var cadena = prompt("Introduce un texto:");
    var numchar = cadena.length;    
    cadena = cadena.toUpperCase();  
    var car;
    var contador = 0;
    var i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);    
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
        }
    }
    alert("Número de Vocales: " + contador + ".");
}