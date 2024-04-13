function registro() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

    var data = {
        id: '0',  
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
        telefone: telefone,  
        email: email,
        senha: senha,
        confirmacaoSenha: confirmacaoSenha,
        perfil: [] 
    };

    fetch('https://caiobadev-api-arqtool.azurewebsites.net/api/Usuarios/Cadastro/Cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Verifique se a resposta foi bem-sucedida
        if (!response.ok) {
            return response.json();
        }
        // Retorne os dados da resposta como texto
        return response.text();
    })
    .then(data => {
        // Faça algo com os dados retornados
        console.log('Resposta:', data);
        alert(data);  // Mostrar a mensagem de texto diretamente
    })
    .catch(error => {
        // Capture e exiba quaisquer erros
        console.error('Erro:', error);
        alert('Erro ao fazer o registro: ' + error.message);
    });
}

function irParaLogin() {
    window.location.href="../index.html"
}
