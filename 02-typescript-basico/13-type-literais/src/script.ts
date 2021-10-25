let nome99: 'wyslan' = 'wyslan';
nome99 = 'wyslan'
nome98 = 'pedro';

// casos de uso dos literais
function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center'){
return `<div style="text-align: ${alinhamento}">${texto}</div>`
}
mostrarTexto('wyslan', 'left')
mostrarTexto('tiago', 'right')
mostrarTexto('pedro', 'blabla')

function temNome(nome: string): true | false{
  if(nome ! == ''){
    return true
  }else{
    return false
  }
}


type Opcoes = {
  width: number,
  height: number
}
function configuar(props: Opcoes | 'auto'){

}
configuar({width: 100, height: 200});
configuar('auto');
configuar('automatico')