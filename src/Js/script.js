const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const type =
    passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
});


const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  if (password.length < 6) {
    alert('A senha deve ter no mínimo 6 caracteres.');
    return;
  }

  alert('Login bem-sucedido!');
});


// Adiciona um botão para voltar ao topo da página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

// Exibe o ano atual
document.getElementById("currentYear").textContent = new Date().getFullYear();

