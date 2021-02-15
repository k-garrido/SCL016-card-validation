const validator = {

  isValid:(numberTC)=>{
    let convertir = numberTC.split('').reverse()    
    let suma = 0;
    let n = 0;
  for(let i=0; i<convertir.length; i++){
    if(i%2 === 1){
      n= Number(convertir[i])*2;
      if(n>=10){
        n= (n-10)+1  
      };
  } else{
    n= Number(convertir[i])
    };
  suma = suma + n
  }; 
  return suma % 10 === 0 ? true : false
  },
  

  masquify:(numberTC)=>{
    let masquifyNumber = numberTC.split(''); console.log (masquifyNumber)
    let replacement = "";
  for(let i = 0; i<numberTC.length;i++){
    if (i <=12){
      replacement = masquifyNumber.replacement ( i,"#")
    };
    
  };  
}


};

export default validator;
