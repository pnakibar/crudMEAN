$(function() {
    $(".remove-button").click(function(event){
        var id = event.currentTarget.dataset.id;
        var target = event.currentTarget;
        $.ajax({
            url: '/aluno',
            data: {id:id},
            type: 'DELETE',
            success: function(result) {
                $(target.parentElement.parentElement).remove();
            }
        });
    });
});