import validator from './validator.js';

const bttnValidar = document.getElementById ("validarTC");

bttnValidar.addEventListener ("click", () => {

    let numberTC = document.getElementById ("numberTC").value;
    const isValid =  validator.isValid(numberTC);
    const masquify = validator.maskify (numberTC); 
    let arraySum = 0;
    let newNumberTC = 0 

    for (let i = 0; i< numberTC.length; i++){
      newNumberTC = Number(numberTC[i]); 
      arraySum = arraySum + newNumberTC; 
    } 


    if( numberTC.length<16){
        alert ("Ingresa un numero de tarjeta valido"); 
    }else if (arraySum === 0){
        alert ("Ingresa un numero de tarjeta valido");
    }else if (isValid===true){
        alert ("Tarjeta " + masquify + " valida" );    
    }else {
        alert ("Tarjeta " + masquify + " invalida");
    }

});

const copyBttn = document.getElementById ("copyBttn");


copyBttn.addEventListener("click",() => {
    let numberTC = document.getElementById ("numberTC").value;
    const guestName =document.getElementById ("guestName").value;
    const expiration = document.getElementById ("expiration").value;
    const cvc = document.getElementById ("cvc").value;
    const space = " "
    let copyInputs = numberTC + space +  guestName + space + (expiration) + space + cvc; 
    let hiddenInput = document.getElementById ("hiddenInput");
    hiddenInput.value = copyInputs;
    hiddenInput.select();
    document.execCommand("copy");
}); 


