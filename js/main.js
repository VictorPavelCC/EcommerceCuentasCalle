

/* 
mi proyecto trata de un login de usuario, y un carrito para la pagina que tengo creada del curso de desarrollo web

*/

const productos =[
    {
        id:1,
        name:"pc bajos Recursos", 
        precio:20000,
        img:"../assets/gtx1660super6gb.jpg"
    },
    {
        id:2,
        name:"Pc gamma Media", 
        precio:80000,
        img:"../assets/video-geforce-rtx-3050-8gb-msi-ventus-2x-oc-0.jpg"
    },
    {
        id:3,
        name:"PC gamma Alta", 
        precio:120000,
        img:"../assets/video-geforce-rtx-3050-8gb-msi-ventus-2x-oc-0.jpg"
    }

];

const carrito = [];
const usuariosReg = [];
const usuario1={
    nombre:"matias",
    apellido:"montes",
    email: "ejemplo@gmail.com"
};


let Nombre = "a"
let Apellido = "a"
let email = "a"

function ingresarUser (){

}

function comprobarusuario(nombre,apellido,email){
 if (nombre == usuario1.nombre && apellido == usuario1.apellido && email == usuario1.email){
    alert("Usuario encontrado")
 }
 else{
    return false
 }
 
};

function usuario(nombre,apellido,email){
    this.nombre= nombre;
    this.apellido = apellido;
    this.email = email;
}



alert("Bienvenido a HardCity");
alert("Ingrese su nombre, apellido y email");
Nombre = prompt("Ingrese su Nombre");
Apellido = prompt("Ingrese su Apellido");
email = prompt("escriba su email");

if(comprobarusuario(Nombre,Apellido,email)==false){
    alert("Usuario no encontrado")
    alert("vamos a generar su usuario")
    Nombre = prompt("Ingrese su Nombre");
    if(Nombre ==""){
        alert ("Debe ingresar su nombre para generar el usuario")
    }
    
    Apellido = prompt("Ingrese su Apellido");
    if(Apellido == "")
    {
        alert("Debe ingresar su apellido para generar el usuario")
    }
    email = prompt("Ingrese su email");
    if(email == "")
    {
        alert("Debe ingresar su email para generar el usuario")
    }

    const usuario2= new usuario(Nombre,Apellido,email)
    console.log(usuario2)
}
alert("Bienvenido " + Nombre + " " + Apellido + "!")

alert ("Podemos ofrecerte una computadora a buen precio")

let PrecioDeseado = 0;
let precioFinal = 0;
let pcmedia = 80000;
let pcalta = 120000;
let pcbaja = 20000;
const iva = 0.21;
let salir = 0;

const sumarCarrito= (id) => {
    const producto = productos.find( (prod) => prod.id === id )
    carrito.push(producto)
    console.log(carrito)
}

function IVACalc (precio, ivanum){
    precioFinal = precio + precio*iva;
}


function promocion(precio){
    if(PrecioDeseado > 100000){
        alert ("tenemos una computadora a $120.000 (sin iva) de Gamma Alta!")
        IVACalc(pcalta,iva);
        alert("Con iva el precio final es de: "+precioFinal)
        sumarCarrito(3)
        salir = 1;
    }
    if(PrecioDeseado < 100000 && PrecioDeseado > 20000 ){
        alert ("tenemos una computadora a $80.000 (sin iva) de Gamma Media!")
        IVACalc(pcmedia,iva);
        alert("Con iva el precio final es de: "+precioFinal)
        sumarCarrito(2)
        salir = 1;
    }
    if(PrecioDeseado<20000){
        alert ("tenemos una computadora a $20.000 (sin iva) de Gamma Baja!")
        IVACalc(pcbaja,iva);
        alert("Con iva el precio final es de: "+precioFinal)
        sumarCarrito(1)
        salir = 1;
    }

}


while(salir != 1){
    PrecioDeseado= prompt ("Ingrese el precio deseado o si queres salir ingresa 1")
    if(PrecioDeseado == 1){
        salir = 1;
    }
    else{
        promocion(PrecioDeseado)
    }
    

}

