//problema:calcular el total de una compra con descuento
// 1. que datos tengo ?  valor del producto, porcentaje o valor del descuento
// 2. que resultado necesito ? el total
// 3. que pasos intermedios necesito para llegar al resultado? 
// a. calcular, %descuento * valor producto /100 = descuento
// b. valor - descuento = total
// c. devolver el total
// 4. que casos especiale spueden aparecer en un problema?

function calculaTotal(valor, descuento) {
  const calculoDescuento = valor * descuento / 100
  const total = valor - calculoDescuento
  return total
}
console.log(calculaTotal(5000, 15))

//metodo simple: D.R.R.F
// D: DATOS
// R: RESULTADO
// R: REGLAS
// F: FLUJO

/*PROBLEMA: crea una funcion que reciba una lista de notas y diga cuantos aprobaron cuantos reprobaron.nota maxima 100 
si un estudiante obtiene 70 o mas puntos (aprobado), si tiene menos de 70 reprueba
// que informacion recibe ? (DATOS) lista de notas
// que necesito devolver ? (RESULTADO) cuantos aprobaron y cuantos reprobaron 
// que condiciones existen? (REGLAS)  >= 70 = aprueba , <70 = reprueba, nota max 100
// que pasos debo seguir? (FLUJO)   
//  A. Crear una funcion 
//  B. Definir los parametros
//  C. Declarar las variables, notasAprobadas , notasReprobadas
//  D, recorrer la lista con un For
//  E. identifico datos de cada nota (aprobados, reprobados)
//  F. sumar cuantos fueron aprobados y cuantos reprobados
//  G. retornar el resultado
//  H. Imprimir y llamr la funcion */

function definirAprobadosReprobados(listaNotas) {
  let aprobados = 0
  let reprobados = 0
  for (let nota of listaNotas) {
    if (nota <= 100) {
      if (nota >= 70) {
        //aprobados = aprobados + 1;
        aprobados += 1
        //aprobados++
        console.log("nota aprobada: " + nota)
      }

      else {
        reprobados += 1
        console.log("nota reprobada: " + nota)
      }
    }
  }
  return [aprobados, reprobados]
}
console.log(definirAprobadosReprobados([40, 80, 50, 120, 10, 35, 70]))
 
/* Una tienda necesita decidir si puede enviar un pedido.

Para enviar un pedido se deben cumplir estas reglas:

La dirección debe estar completa.
Debe haber al menos un producto.
El pago debe estar aprobado.
Todos los productos deben estar disponibles.

Este es el pedido:

Cliente: Laura
Dirección: Calle 10 # 20-30
Pago: aprobado

Productos:

Sábanas: disponible
Almohada: agotada

Explícame:

Qué debes revisar.
En qué orden lo revisarías.
Qué decisión tomas en cada paso.
Si el pedido se puede enviar o no.
Por qué llegaste a esa conclusión.

//metodo simple: D.R.R.F
// D: DATOS: DIRECCION, PRODUCTO Y PAGO APROBADO, ENVIO
// R: RESULTADO: Decidir si se envia o no un producto
// R: REGLAS: Direccion completa, al menos un producto, pago aprobado, los productos deben estar disponibes
// F: FLUJO: Funcion,hago revision de cada una de las reglas, si no se cumplen , mostrar error, 
//  con un for y que retorne un booleano */

