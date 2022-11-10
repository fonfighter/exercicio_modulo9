const form = document.getElementById('form-tarefa');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeTarefa = document.getElementById('nome-tarefa');

    let linha = '<tr>';
    linha += `<td>${inputNomeTarefa.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    $('.task').click(function() {

        $(td).css('text-decoration', 'line-through');

    })

});