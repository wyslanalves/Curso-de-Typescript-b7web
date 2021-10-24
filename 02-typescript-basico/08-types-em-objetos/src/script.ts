// como define um objeto e o que vai ter dentro de um objeto
function resumo(usuario: {nome: string, idade: number}){
return `Olá ${usuario.nome}, tudo bem? Voce tem ${usuario.idade} anos`;
}

// implementação da funcao
let u = {
  nome: 'wyslan',
  idade: 90,
  
}
resumo(u)