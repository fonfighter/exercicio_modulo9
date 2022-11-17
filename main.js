const form = document.getElementById('form-tarefa');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const lista = document.querySelector('ul');
    const inputNomeTarefa = $('#nome-tarefa').val();
    const novaTarefa = $('<h2></h2>');
    
    $(`<li>${inputNomeTarefa}</li>`).appendTo(novaTarefa);

    $(novaTarefa).click(function() {

        $(this).css('text-decoration', 'line-through');

    })

});