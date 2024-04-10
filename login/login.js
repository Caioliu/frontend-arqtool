function login() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var data = {
        email: email,
        senha: senha
    };

    fetch('https://caiobadev-api-arqtool.azurewebsites.net/api/Autenticacao/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Verifique se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao fazer login');
        }
        // Retorne os dados da resposta como JSON
        return response.json();
    })
    .then(data => {
        // Faça algo com os dados retornados, como redirecionar o usuário ou exibir uma mensagem
        console.log('Resposta:', data);
        alert('Login bem-sucedido!');
    })
    .catch(error => {
        // Capture e exiba quaisquer erros
        console.error('Erro:', error);
        alert('Erro ao fazer login: ' + error.message);
    });
}

