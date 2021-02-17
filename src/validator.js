const validator = {

    //Funcion para determinar si la tarjeta es valida o no
    isValid: (numberTC) => {
      //Se declara la siguiente variable para convertir el valor de la tarjeta de credito en un array e invertirlo.
      let convertir = numberTC.split('').reverse();
      let suma = 0;
      let n = 0;
      //Se crea un bucle for para recorrer todas las pocisiones de la tarjeta y realizar las operaciones matematicas.
      for (let i = 0; i < convertir.length; i++) {
        //A continuacion se multiplican las pocisiones pares.
        if (i % 2 === 1) {
          n = Number(convertir[i]) * 2;
          // Si n es mayor o igual a 10 se suman los numero del digito 1 y 2 del valor.
          if (n >= 10) {
            n = (n - 10) + 1;
          }
          //Bajan las pocisiones impares
        } else {
          n = Number(convertir[i]);
        }
        // Se suman todos los numeros de la tarjeta.
        suma = suma + n;
      }
      // Y decimos que si el valor residual entre el total y 10 es 0 entonces de devuelve true, o si no false.
      return suma % 10 === 0 ? true : false;
    },


    masquify: (numberTC) => {
      let masquifyNumber = numberTC;
      let finalNumber = '';
      for (let i = 0; i < masquifyNumber.length; i++) {
        if (i < masquifyNumber.length - 4) {
          finalNumber = finalNumber + '#';
        } else {
          finalNumber = finalNumber + (masquifyNumber[i]); 
        }     
      }
      return finalNumber;
    }
  };

  export default validator ;
