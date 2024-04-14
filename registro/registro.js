document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        registro();
    }
});

async function registro() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var dataNascimentoFormatada = formatarDataNascimentoAnoMesDia(dataNascimento);
    var telefone = document.getElementById('telefone').value;
    var telefoneFormatado = await formatarTelefoneToInteger(telefone);
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

    var data = {
        id: '0',
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimentoFormatada,
        telefone: telefoneFormatado,
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
            if (!response.ok) {
                // Se a resposta não for bem-sucedida, lance um erro
                return response.json().then(err => { throw err; });
            }
            // Se a resposta for bem-sucedida, retorne os dados
            return response.json();
        })
        .then(data => {
            // Faça algo com os dados retornados, como redirecionar o usuário ou exibir uma mensagem
            console.log('Resposta:', data);
            alert('Registro realizado com sucesso, redirecionando para página de login...');
        })
        .catch(error => {
            // Capture e exiba quaisquer erros
            console.error('Erros:', error.errors);
            alert("Erros de autenticação aconteceram. F12 para mais informações.");
        });

}

function toggleVisibility() {
    var senha = document.getElementById('senha');
    var confirmacaoSenha = document.getElementById('confirmacaoSenha');
    var botaoSenha = document.querySelector('#senha + button');
    var botaoConfirmacaoSenha = document.querySelector('#confirmacaoSenha + button');

    if (senha.type === "password") {
        senha.type = "text";
        confirmacaoSenha.type = "text";
        botaoSenha.textContent = '👁️';
        botaoConfirmacaoSenha.textContent = '👁️';
    } else {
        senha.type = "password";
        confirmacaoSenha.type = "password";
        botaoSenha.textContent = '🙈';
        botaoConfirmacaoSenha.textContent = '🙈';
    }
}


function formatarDataNascimentoAnoMesDia(dataNascimento) {

    // Dividir a data em dia, mês e ano
    var partesData = dataNascimento.split('/');

    // Reorganizar no formato AAAA-MM-DD
    var dataFormatada = `${partesData[2]}-${partesData[1]}-${partesData[0]}`;

    return dataFormatada;
}

function formatarTelefone(input) {
    let value = input.value;
    let oldValue = input.defaultValue;

    // Verificar se o usuário está tentando apagar um caractere
    if (oldValue.length > value.length) {
        input.defaultValue = value;
        return;
    }

    // Remove caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Formatar de acordo com o número de dígitos
    if (value.length <= 2) {
        // Incluir os parênteses após o segundo dígito
        value = `(${value.slice(0, 2)}`;
    } else if (value.length <= 6) {
        // Adicionar um traço após o sexto dígito
        value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}`;
    } else if (value.length <= 10) {
        // Adicionar um traço após o sexto dígito
        value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`;
    } else {
        // Reservar os 2 primeiros para o DD, e adicionar o - após o sétimo dígito
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }

    // Limitar a 11 caracteres
    value = value.slice(0, 16);

    input.value = value;
    input.defaultValue = value;
}

function formatarTelefoneToInteger(telefone) {
    var telefoneFormatado = telefone.replace(/\D/g, '');
    console.log(telefoneFormatado);
    return telefoneFormatado;
}


function formatarDataNascimento(input) {
    let value = input.value;
    let oldValue = input.defaultValue;

    // Verificar se o usuário está tentando apagar um caractere
    if (oldValue.length > value.length) {
        input.defaultValue = value;
        return;
    }

    // Remove caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Formatar para DD/MM/AAAA
    if (value.length > 4) {
        value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8) || ''}`;
    } else if (value.length > 2) {
        value = `${value.slice(0, 2)}/${value.slice(2, 4) || ''}`;
    }

    // Limitar a 8 caracteres
    value = value.slice(0, 10);

    input.value = value;
    input.defaultValue = value;
}

function irParaLogin() {
    window.location.href = "../index.html"
}
