// como define um objeto e o que vai ter dentro de um objeto

// nessa função eu definir os tipos de disse que idade e opcional 
function resumo1(usuario: { nome: string; idade?: number }) {
  if (usuario.idade !== undefined) {
    return `Olá ${usuario.nome}, tudo bem? Voce tem ${usuario.idade} anos`
  }else{
    return `Olá ${usuario.nome}, tudo bem?`
  }
}

// implementação da funcao
let u1 = {
  nome: 'wyslan',
  idade: 90
}
resumo1(u1)
