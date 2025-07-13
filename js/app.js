const btn = document.getElementById('btn');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');

function test() {
    const name1 = nameInput.value.trim();
    const surname1 = surnameInput.value.trim();
    const email1 = emailInput.value.trim();
    const password1 = passwordInput.value.trim();
    error1.innerHTML = '';
    error2.innerHTML = '';
    error3.innerHTML = '';
    error4.innerHTML = '';
    nameInput.style.border = '';
    surnameInput.style.border = '';
    emailInput.style.border = '';
    passwordInput.style.border = '';

    let ok = true;

    if (name1 === '') {
        error1.innerHTML = `<text class="error">First name cannot be empty</text>`;
        nameInput.style.border = '2px solid rgba(255,121,120)';
        nameInput.classList.add('is-invalid');
        ok = false;
    }

    if (surname1 === '') {
        error2.innerHTML = `<text class="error">Last name cannot be empty</text>`;
        surnameInput.style.border = '2px solid rgba(255,121,120)';
        surnameInput.classList.add('is-invalid')
        ok = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    //   ^[^\s@]+: começa com um ou mais caracteres que não são espaço ou @
    //   @: precisa ter exatamente um @
    //   [^\s@]+: depois do @, mais uma sequência de caracteres sem espaço ou @
    //   \.: exige um ponto (.)
    //   [^\s@]+$: e termina com algo depois do ponto

    if ((email1 === '') || (!emailRegex.test(email1))) {
        error3.innerHTML = `<text class="error">Looks like this is not an email</text>`;
        emailInput.style.border = '2px solid rgba(255,121,120)';
        emailInput.classList.add('is-invalid')
        ok = false;
    }

    if (password1 === '') {
        error4.innerHTML = `<text class="error">Password cannot be empty</text>`;
        passwordInput.style.border = '2px solid rgba(255,121,120)';
        passwordInput.classList.add('is-invalid')
        ok = false;
    }

    if (ok) {
        const modalBootstrap = new bootstrap.Modal(document.getElementById('exampleModal'));
        modalBootstrap.show();
    }
}

btn.addEventListener('click', test);
