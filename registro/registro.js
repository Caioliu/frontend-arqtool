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
        if (response.ok) {
            return response.text(); // Retorna os dados da resposta como texto
        } else {
            return response.json(); // Retorna os dados da resposta como JSON
        }
    })
    .then(data => {
        // Faça algo com os dados retornados
        console.log('Resposta:', data);
        if (typeof data === 'string') {
            alert(data);  // Mostrar a mensagem de texto diretamente
        } else {
            alert(data.title);  // Mostrar a mensagem de erro do JSON
        }
    })
}

function irParaLogin() {
    window.location.href="../index.html"
}
