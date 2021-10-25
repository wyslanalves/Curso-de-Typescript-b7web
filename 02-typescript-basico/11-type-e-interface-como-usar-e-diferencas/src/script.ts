// criar nosso proprios types
// 1 - so usamos em duas situação simplifica e organizar melhor o codigo / geralmento com objeto
// 2 - quando o type e repricavel em outro codigos
type NomeCompleto = string;

let nome15: NomeCompleto = 'wyslan'
//exemplo, aqui estou dizendo que idade tanto e string como number, vai ter momento do programa que idade e string ou number
type Idade = string | number;
let idade20: Idade = 90;
let idade21: Idade = '90'

// o samos os type quando temos um objeto
// essa e uma das formas
// uma vez que você cria como type ele não pode ser alterado
type User = {
  nome: string,
  idade: number
}
function resumo1(usuario: User){
  return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo1({
  nome: 'wyslan',
  idade: 90
})

// essa forma de interfaces
// aki você conseguir fazer alteração
interface User1 {
  nome: string,
  idade: number
}
// desse jeito que incremento no interface
interface User1{
  habilitação: boolean;
}
function resumo2(usuario: User1){
  return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo2({
  nome: 'wyslan',
  idade: 90
})