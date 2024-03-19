document.addEventListener("DOMContentLoaded", function(){
//CAPTCHA
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
const caracteresMax = caracteres.length;
const formulario = document.querySelector(".formulario");
const checkbox = document.querySelector(".checkbox");
const capcha = document.querySelector(".inputCap");
const codigo = document.querySelector(".codigo");
let isChecked = false;
let almacenCapcha = "";

function stringAleatorio() {
    while (0 != caracteresMax) {
        let string = "";
        for (let i = 0; i < 10; i++) {
            string += caracteres[Math.floor(Math.random() * caracteres.length)];
        }
        return almacenCapcha = string;
    }
}

checkbox.addEventListener("change", (e) => {
    isChecked = event.target.checked;
    if (isChecked) {
        capcha.classList.remove('oculto');
        codigo.innerHTML = stringAleatorio();
        codigo.classList.remove('oculto');

    } else {
        capcha.classList.add('oculto');
        codigo.classList.add('oculto');


    }

})

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isChecked) {
        console.log(capcha.value);
        if (capcha.value === almacenCapcha) {
            console.log("Formulario enviado");
        } else {
            console.log("Por favor, intentelo de nuevo");
        }
    } else {
        console.log("Por favor valida que eres humano");
    }
});
});