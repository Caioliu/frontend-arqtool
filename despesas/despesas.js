// Cria um array para armazenar as despesas
var expenses = [];
// var token = localStorage.getItem("token");
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InN1cGVyYWRtaW5AdGVzdGUuY29tIiwianRpIjoiYTcyZDA1MjktOTk1Ny00NTg0LWExZmItNDk1MTQxNzJkMzMyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InN1cGVyYWRtaW5AdGVzdGUuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoic3VwZXJhZG1pbiIsImV4cCI6MTcxNDExMDI4NiwiaXNzIjoiQ2Fpb2JhX0lzc3VlciIsImF1ZCI6IkNhaW9iYV9BdWRpZW5jZSJ9.1z2-jyRQ8MF21vHf5FxdtstmvVMfOn9MFpMqgKQX_EI";
var urlLocal = "https://localhost:7177/api/";

document.getElementById('expense-form').addEventListener('submit', async function (event) {
    // Evita o comportamento padrão do formulário
    event.preventDefault();

    // Obtém os valores dos inputs
    var expenseName = document.getElementById('expense-name').value;
    var monthlyCost = document.getElementById('monthly-cost').value;
    // var userId = await getUserId(token);
    var userId= "asd"
    console.log(userId);

    // Adiciona a nova despesa ao array
    expenses.push({ despesaId: 0, usuarioId: userId, expenseName, gastoMensal: monthlyCost });

    // Cria uma nova linha na tabela
    var row = document.createElement('tr');
    row.innerHTML = `
        <td>${expenseName}</td>
        <td>${monthlyCost}</td>
        <td>${"-"}</td>
        <td>${"-"}</td>
        <td>${"-"}</td>
        <td><button class="remove-button">Remover</button></td>
    `;

    // Adiciona a nova linha à tabela
    document.querySelector('#expense-table tbody').appendChild(row);

    // Limpa os inputs
    document.getElementById('expense-name').value = '';
    document.getElementById('monthly-cost').value = '';

    // Adiciona o evento de clique ao botão remover
    row.querySelector('.remove-button').addEventListener('click', function () {
        // Remove a despesa do array
        var index = expenses.findIndex(function (expense) {
            return expense.name === expenseName && expense.cost === monthlyCost;
        });
        if (index !== -1) {
            expenses.splice(index, 1);
        }

        // Remove a linha da tabela
        row.remove();
    });

    console.log(expenses);
});

async function getUserId(t) {
    const config = {
        headers: {
            'Authorization': `Bearer ${t}`, // Esquema Bearer com o token
            'Accept': 'application/json, text/plain, */*', // Tipos de conteúdo aceitos
        },
        withCredentials: true, // Adicione esta linha
    }

    const response = await axios.get(urlLocal + "Usuarios/Informacao", config);
    console.log(response);
}

