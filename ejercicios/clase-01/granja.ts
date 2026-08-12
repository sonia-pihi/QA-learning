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

function calcularAlimento(tipo: string): number {
   switch (tipo) {
      case "vaca":
         return 10;
      case "cerdo":
         return 5;
      case "gallina":
         return 1;

      default:
         return 0;
   }
}

function esAdulto(tipo: string, edad: number): boolean {
   if (tipo == "vaca" && edad >= 3) {
      return true;
   }
   else if (tipo == "cerdo" && edad >= 2) {
      return true;
   }
   else if (tipo == "gallina" && edad >= 1) {
      return true;
   }
   else {
      return false;
   }
}

const animalesSinAlimentar: string[] = [];
const animalesAdultos: string[] = [];

let alimentoTotal: number = 0;
