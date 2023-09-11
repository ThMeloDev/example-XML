// Criando um novo objeto XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurando o tipo da requisição (POST) e a URL da API
xhr.open('POST', 'https://api.nossaempresa.com/login');

// Definindo o tipo de conteúdo da requisição como JSON
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

// Registrando o callback que será ativado quando a requisição for completada
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Requisição foi bem-sucedida - processar a resposta
    console.log('Sucesso:', JSON.parse(xhr.responseText));
  } else {
    // Requisição falhou com o status xhr.status
    console.log('Erro:', xhr.status);
  }
};

// Preparando os dados que serão enviados
const data = {
    user: 'teste131',
    preco: 'testandoSenha123'
  };

// Enviando a requisição com os dados em formato JSON
xhr.send(JSON.stringify(data));
