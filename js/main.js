
alert("Bienvenido a HardCity");
alert("Necesitamos que genere su usuario");

let Nombre = prompt("Ingrese su Nombre");

if(Nombre ==""){
    alert ("Debe ingresar su nombre para generar el usuario")
}

let Apellido = prompt("Ingrese su Apellido");
    if(Apellido == "")
    {
        alert("Debe ingresar su apellido para generar el usuario")
    }
    else{
        alert("Bienvenido " + Nombre + " " + Apellido + "!")
    }

alert ("Podemos ofrecerte una computadora a buen precio")

let precioFinal = 0;
let pcmedia = 80000;
let pcalta = 120000;
let pcbaja = 20000;
const iva = 0.21;

function IVACalc (precio, ivanum){
    precioFinal = precio + precio*iva;
}

let salir = 0;

while(salir != 1){
    let PrecioDeseado= prompt ("Ingrese el precio deseado o si queres salir ingresa 1")
    if(PrecioDeseado == 1){
        salir = 1;
    }
    else{
        if(PrecioDeseado > 100000){
            alert ("tenemos una computadora a $120.000 de Gamma Alta!")
            IVACalc(pcalta,iva);
            alert("Con iva el precio final es de: "+precioFinal)
            salir = 1;
        }
        if(PrecioDeseado < 100000 && PrecioDeseado > 40000 ){
            alert ("tenemos una computadora a $80.000 de Gamma Media!")
            IVACalc(pcmedia,iva);
            alert("Con iva el precio final es de: "+precioFinal)
            salir = 1;
        }
        else{
            alert ("tenemos una computadora a $20.000 de Gamma Media!")
            IVACalc(pcbaja,iva);
            alert("Con iva el precio final es de: "+precioFinal)
            salir = 1;
        }

    }
    

}
