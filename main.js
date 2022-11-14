const form = document.getElementById('form-tarefa');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeTarefa = document.getElementById('nome-tarefa');
    const corpoTabela = document.querySelector('tbody');
    const novaTarefa = $('<td></td>');
    $(`inputNomeTarefa`).appendTo(novaTarefa);

    $(novaTarefa).click(function() {

        $(this).css('text-decoration', 'line-through');

    })

});