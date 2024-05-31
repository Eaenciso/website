// Validación del formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    alert('Formulario enviado. ¡Gracias por contactarme!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Cambio de tema
const themeButton = document.createElement('button');
themeButton.innerText = 'Cambiar Tema';
themeButton.classList.add('theme-button'); // Añadir la clase al botón
document.body.appendChild(themeButton);

themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Animaciones suaves
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
