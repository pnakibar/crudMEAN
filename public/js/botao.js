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

/*modal atualizar*/
$('#modal-put').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var idaluno = button.data('id') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
  
    $.ajax({ 
        type: "GET", 
        url: "/aluno/"+idaluno,
        dataType: 'json',
        success: function(data){ 
            modal.find('.modal-title').text('Editar aluno: ' + data.name);
            modal.find('.modal-body input#name').val(data.name);
            modal.find('.modal-body input#age').val(data.age);
            modal.find('.modal-body input#forcelevel').val(data.forcelevel);
        }
    });

  /* função do put */
    $(function() {
        $(".send-button").click(function(event){
            var name = modal.find('input#name').val();
            var age = modal.find('input#age').val();
            var forcelevel = modal.find('input#forcelevel').val(); 

        
            $.ajax({
                url: '/aluno/'+idaluno,
                data: "name="+name+"&age="+age+"&forcelevel="+forcelevel,
                type: 'PUT',    
                success: function(result) {            
                    //TODO: melhorar refresh
                    location.reload(true);
                }
            });

        });
    });
});


$('#modal-post').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var modal = $(this);
    
    $(function() {
        $(".post-button").click(function(event){
            
            var name = modal.find('.modal-body input#name').val();
            var age = modal.find('.modal-body input#age').val();
            var forcelevel = modal.find('.modal-body input#forcelevel').val();

            $.ajax({
                url: '/aluno',
                data: {name:name,age:age,forcelevel:forcelevel},
                type: 'POST',    
                success: function(result) {            
                    location.reload(true);
                }
            });

        });
    });
});

