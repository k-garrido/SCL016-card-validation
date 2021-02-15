import validator from './validator.js';

const bttnValidar = document.getElementById ("validarTC");

bttnValidar.addEventListener ("click", () => {

    const isValid =  validator.isValid(numberTC.value)
    const masquify = validator.masquify (numberTC.value)
    

    if (isValid===true) {
        alert ("Tarjeta " + masquify + " valida " );    
    }
    else {
        alert ("Tarjeta invalida " + masquify);
    }

});
