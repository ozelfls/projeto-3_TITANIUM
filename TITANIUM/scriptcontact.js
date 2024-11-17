const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');


form.addEventListener('submit', function(event) {
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    
    formMessage.textContent = '';
    formMessage.style.color = '';

    
    if (name === '' || email === '' || message === '') {
        event.preventDefault();  
        formMessage.textContent = 'Por favor, preencha todos os campos.';
        formMessage.style.color = 'red';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // vi essa bomba no video de um chines kkkkkkkkkkkkkkkkkkk
    if (!emailPattern.test(email)) {
        event.preventDefault();  
        formMessage.textContent = 'Por favor, insira um e-mail válido.';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.textContent = 'Enviando...';
    formMessage.style.color = 'blue';
});