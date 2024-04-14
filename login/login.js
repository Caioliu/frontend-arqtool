document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});

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
        // Se a resposta não for bem-sucedida, lance um erro
        return response.json().then(err => { throw err; });
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
    console.error('Erros:', error.errors);
    alert("Erros de autenticação aconteceram. F12 para mais informações.");
});

}

function irParaRegistro() {
    window.location.href= "../registro/registro.html";
}

function toggleVisibility() {
    var senha = document.getElementById('senha');
    var botaoSenha = document.querySelector('#senha + button');

    if (senha.type === "password") {
        senha.type = "text";
        botaoSenha.textContent = '👁️';
    } else {
        senha.type = "password";
        botaoSenha.textContent = '🙈';
    }
}
