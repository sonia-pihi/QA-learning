
EJERCICIO: ADMINISTRADOR DE UNA GRANJA

Crea un programa en TypeScript para generar el reporte diario de una granja.

DATOS INICIALES:

const animales: string[] = [
  "Margarita",
  "Pepa",
  "Claudio",
  "Lola",
  "Pancho"
];

const tipos: string[] = [
  "vaca",
  "gallina",
  "cerdo",
  "gallina",
  "vaca"
];

const edades: number[] = [5, 2, 4, 1, 8];

const alimentados: boolean[] = [
  true,
  false,
  true,
  true,
  false
];

Cada posición de los arrays representa al mismo animal.
Por ejemplo, Margarita es una vaca de 5 años y ya fue alimentada.

REQUISITOS:

1. Crea una función llamada calcularAlimento que reciba el tipo de animal
   y devuelva la cantidad de alimento que necesita diariamente.

   Reglas:
   - vaca: 10 kg
   - cerdo: 5 kg
   - gallina: 1 kg

   Debes usar un switch.

2. Crea una función llamada esAdulto que reciba el tipo de animal y su edad.
   La función debe devolver un boolean.

   Reglas:
   - Una vaca es adulta desde los 3 años.
   - Un cerdo es adulto desde los 2 años.
   - Una gallina es adulta desde 1 año.

   Debes usar if, else if y else.

3. Crea los siguientes arrays vacíos:

   const animalesSinAlimentar: string[] = [];
   const animalesAdultos: string[] = [];

4. Crea una variable numérica llamada alimentoTotal, comenzando en 0.

5. Usa un ciclo for para recorrer todos los animales.

   Por cada animal debes mostrar:

   - Nombre
   - Tipo
   - Edad
   - Si es adulto o joven
   - Cuánto alimento necesita
   - Si ya fue alimentado o está pendiente

   Ejemplo:

   Animal: Margarita
   Tipo: vaca
   Edad: 5 años
   Etapa: adulto
   Alimento necesario: 10 kg
   Estado: ya fue alimentado
   -------------------------

6. Durante el recorrido:

   - Suma el alimento de cada animal en alimentoTotal.
   - Guarda en animalesSinAlimentar los nombres de los animales pendientes.
   - Guarda en animalesAdultos los nombres de los animales adultos.

7. Al terminar el ciclo, muestra la cantidad total de alimento que necesita
   la granja.

8. Usa un for...of para mostrar los animales que todavía no han sido
   alimentados.

   Si el array está vacío, muestra:

   "Todos los animales fueron alimentados."

9. Usa otro for...of para mostrar los animales adultos.

10. Crea una variable boolean llamada granjaLista.

    Debe ser true solamente cuando todos los animales estén alimentados.

    Al final muestra:

    ¿La granja está lista?: true o false


RETO EXTRA: PRODUCCIÓN DIARIA

Agrega el siguiente array:

const produccion: number[] = [12, 4, 0, 3, 10];

Cada posición representa la producción del animal correspondiente.

Reglas:

- Las vacas producen litros de leche.
- Las gallinas producen huevos.
- Los cerdos no producen leche ni huevos.

Muestra mensajes como:

"Margarita produjo 12 litros de leche."
"Pepa produjo 4 huevos."
"Claudio no tiene producción registrada."

También debes calcular y mostrar:

- El total de litros de leche.
- El total de huevos.
