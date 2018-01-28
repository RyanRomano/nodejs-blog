$(document).ready(function(){


    $('form').on('submit', function(){
  
        let author = $('#author-field');
        let title = $('#title-field');
        let body = $('#body-field');

        let article = {author: author.val(), title:title.val(), body:body.val()};

        $.ajax({
          type: 'POST',
          url: '/blog',
          data: article,
          success: function(data){
            location.reload();
            console.log("Success!");
          }
        });
        return false;
    });
  
    $('li').on('click', function(){
        var urlTitle = '/edit/' + $(this).find(':nth-child(1)').text().replace(/ /g, '-');
        window.location = urlTitle;
    });
});