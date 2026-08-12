const nombre: string = "Sonia";
let edad: number = 25;
let activo: boolean = true;
let hobbies: Array<string> = ["deporte", "musica", "arte"];
let luckyNumbers: number[] = [24, 57, 68, 77];

function saludar(persona: string): string {
    return "hola mundo " + persona;
}
console.log(saludar("Sebas"));
console.log(saludar(nombre));

function sumaNumeros(numero1: number, numero2: number): number {
    return numero1 + numero2;
}
console.log(sumaNumeros(3, 5));
console.log(sumaNumeros(35, 89));
let suma: number = sumaNumeros(57, Number("42"));
console.log(suma);

const intentosJuego: number = 4;
if (intentosJuego < 3) {
    console.log("puedes reintentar");
}
else {
    console.log("Demasiados intentos");
}

let dia: string = "Jueves";
switch (dia) {
    case "Lunes":
        console.log("Inicio de semana");
        console.log("Lunes");
        break;
    case "Martes":
    case "Jueves":
        console.log("El mejor dia de la semana");
        break;
    default:
        console.log("Otro dia");
}

if (edad >= 18 && activo) {
    console.log("Puede entrar")
}

/* 
Escribe una funcion en typescript llamada "puede entrar" que reciba 
edad, tiene entrada y es VIP. La funcion debe devolver true o false, segun estas reglas: 
Una persona puede entrar si tiene 18 años o más y tiene entrada. También puede entrar si es VIP, 
sin importar la edad ni si tiene entrada. Una persona menor de 18 años que no es VIP nunca puede entrar, aunque tenga entrada. */

function puedeEntrar(edad: number, tieneEntrada: boolean, esVIP: boolean): boolean {
    if ((edad >= 18 && tieneEntrada == true) || esVIP == true) {
        return true;
    }
    else {
        return false;
    }
    //return (edad >= 18 && tieneEntrada) || esVIP;
}


console.log(puedeEntrar(20, true, false));   // true
console.log(puedeEntrar(16, true, false));   // false
console.log(puedeEntrar(15, false, true));   // true
console.log(puedeEntrar(30, false, false));  // false 

for(let i: number = 0; i < 5; i++ ){
    console.log(i);
}

let frutas: string[] = ["Manzana", "Pera", "Banano", "Sandia"];
console.log(frutas[3]);
for(let i: number = 0; i < frutas.length; i++ ){
    console.log(frutas[i]);
}

for(let fruta of frutas){
    console.log(fruta)
}

for(let color of ["verde", "violeta", "rojo", "azul"]){
    if (color == "rojo"){
        console.log("amarillo")
    }
    else {
        console.log(color)
    }
}