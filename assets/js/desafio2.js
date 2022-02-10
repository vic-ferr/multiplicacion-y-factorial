
// Una empresa del área educacional te ha contratado para desarrollar programas que les
// permitan realizar distintos tipos de cálculos matemáticos para facilitar el aprendizaje de sus
// estudiantes.
// Para ello, en una primera etapa, te han pedido un programa que al ingresar un número,
// obtenga las tablas de multiplicar desde el 1 hasta el número ingresado. Además, debe
// mostrar el factorial para los mismos números. El resultado debe ser mostrado por la
// consola del navegador, por ejemplo, si ingresan el número 3 en la consola deberían obtener
// el siguiente resultado:
// 1 x 3 = 3
// 2 x 3 = 6
// 3 x 3 = 9
// Factorial de 1 es: 1
// Factorial de 2 es: 2
// Factorial de 3 es: 6


////  desafio  dia DOS MULTIPLICACION Y FACTORIAL



let numero = parseInt(prompt("ingrese su numero para la calculadora: "));
let resultado = 1;

const calculo = () => {

  if ( numero <= 0 || numero >= 20) {
    alert("ingrese un numero mayor a 0 ó menor a 20");

  } 
  else {

// multuplicacion
    for (let i = 1; i <= numero; i++) {
        console.log(i + " x " + numero + " = " + (i * numero));
      }

      //factorial
    for (let i = 1; i <= numero; i++) {
      resultado = resultado * i;

      console.log("Factorial de " + i + " es: " + resultado);
    }


  }
};

calculo(numero);
