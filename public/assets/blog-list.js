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
            console.log("success");
          }
        });
        return false;
    });
  
    $('li').on('click', function(){
        var urlTitle = $(this).find(':nth-child(2)').text().replace(/ /g, '-');
        console.log(urlTitle);
        $.ajax({
          type: 'DELETE',
          url: '/blog/' + urlTitle,
          success: function(data){
            location.reload();
          }
        });
    });
  
  });