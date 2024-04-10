function registro() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

    var data = {
        id: "string",
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
        telefone: telefone,
        email: email,
        senha: senha,
        confirmacaoSenha: confirmacaoSenha,
        perfil: ["string"]
    };

    fetch('https://caiobadev-api-arqtool.azurewebsites.net/api/Usuarios/Cadastro/Cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log(data);
        // Verifique se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao fazer o registro');
        }
        // Retorne os dados da resposta como JSON
        return response.json();
    })
    .then(data => {
        // Faça algo com os dados retornados, como redirecionar o usuário ou exibir uma mensagem
        console.log('Resposta:', data);
        alert('Registro bem-sucedido!');
    })
    .catch(error => {
        // Capture e exiba quaisquer erros
        console.error('Erro:', error);
        alert('Erro ao fazer o registro: ' + error.message);
    });
}

