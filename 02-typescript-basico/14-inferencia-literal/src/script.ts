function fazerRequisicao(url: string, method: 'GET' | 'POST'){
  //....
}


///=======================
//aqui estou definindo que minha requisição so pode ter url tipo string
// e dois tipos de metodo get ou post 
type RequestDetails = {
  url: string,
  method: 'GET' | 'POST'
};

let req: RequestDetails = {
  url: 'https://www.google.com.br',
  method: 'GET'
};
fazerRequisicao(req.url, req.method)