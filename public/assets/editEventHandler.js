$(document).ready(function(){
    const urlTitle = window.location.pathname.substring(6);
    $('#saveButton').on('click', function(){
        let author = $('#author-field-edit');
        let title = $('#title-field-edit');
        let body = $('#body-field-edit');
        let updatedArticle = {author: author.val(), title:title.val(), body:body.val()};

        $.ajax({
            type: 'DELETE',
            url: '/blog/' + urlTitle,
            success: function(data){
                console.log('Success');
                $.ajax({
                    type: 'POST',
                    url: '/blog',
                    data: updatedArticle,
                    success: function(data){
                      console.log("Success!");
                      location.pathname = "/blog"
                    }
                });
            }
        });
    });
  
    $('#deleteButton').on('click', function(){
        $.ajax({
          type: 'DELETE',
          url: '/blog/' + urlTitle,
          success: function(data){
            console.log('Success');
            location.pathname = "/blog"
          }
        });
    });
});