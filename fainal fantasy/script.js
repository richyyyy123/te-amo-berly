// Obtener el elemento donde se mostrará el mensaje
const welcomeMessage = document.querySelector('.welcome-message p');

// Obtener la hora actual
const currentHour = new Date().getHours();

// Cambiar el mensaje según la hora
if (currentHour >= 5 && currentHour < 12) {
    welcomeMessage.textContent = "¡Buenos días, Berly! Esta página está dedicada a ti por tu amor a Final Fantasy.";
} else if (currentHour >= 12 && currentHour < 19) {
    welcomeMessage.textContent = "¡Buenas tardes, Berly! Esta página está dedicada a ti por tu amor a Final Fantasy.";
} else {
    welcomeMessage.textContent = "¡Buenas noches, Berly! Esta página está dedicada a ti por tu amor a Final Fantasy.";
}
