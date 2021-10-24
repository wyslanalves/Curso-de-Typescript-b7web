let names = ['wyslan', 'pedro', 'paulo', 'cristina', 90]

names.forEach(function (nome) {
  //console.log(nome.toLowerCase())
})


//=============solução===============
names.forEach(function (nome) {
  if (typeof nome === 'string') {
    console.log(nome.toLowerCase())
  } else {
    console.log(nome)
  }
})
