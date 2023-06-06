// Obtener la fecha y hora del partido
var partidoDate = new Date(2023, 5, 10, 15, 0);  // Fecha y hora del partido (sábado 10 de junio a las 15:00)

// Obtener los elementos de la página
var dateElement = document.getElementById('date');
var confirmButton = document.getElementById('confirmButton');
var confirmationMessage = document.getElementById('confirmationMessage');

// Formatear la fecha y hora del partido
var formattedDate = partidoDate.toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
});

// Mostrar la fecha y hora del partido en el elemento correspondiente
dateElement.textContent = formattedDate;

// Agregar evento de clic al botón de confirmación
confirmButton.addEventListener('click', function() {
    confirmationMessage.textContent = 'nos vemos el sabado :D';
});