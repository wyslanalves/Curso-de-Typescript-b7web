// idade pode ser string ou number
let idade: string | number = 90;
idade = '25'


// quando temos uma função que tem dois tipos temos que fzer uma verifivação
function mostrarIdade(idade: string | number){
  if(typeof idade === "string"){
    console.log(idade.toUpperCase())

  }else{
    console.log("minha idade è: " + idade)

  }
}
mostrarIdade(90);
mostrarIdade('90')