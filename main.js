console.log("JavaScript conectado");

// 1. Definís la fecha final en ms
const fechaFinal = new Date("August 4, 2025 00:00:00").getTime();

// 2. Función que calcula y vuelca al DOM
function updateCountdown() {
    const ahora = Date.now();
    const diff = fechaFinal - ahora;
    console.log(diff)










 // Conversión de ms a unidades
const msDia = 1000 * 60 * 60 *24;
const msHora   = 1000 * 60 * 60;
const msMinuto = 1000 * 60;

const días = Math.floor(diff / msDia);
const horas = Math.floor((diff % msDia) / msHora);
const minutos = Math.floor((diff % msHora) / msMinuto);
const segundos = Math.floor((diff % msMinuto) / 1000);

 //Actualizar el DOM

document.getElementById("días").textContent = String(días).padStart(2,"0");
document.getElementById("horas").textContent = String(horas).padStart(2, "0");
document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

// 5. Ejecutar al cargar y luego cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);
