$("ul").hide();


$(function(){
        
    $("#enter").on('click',function(){
        var val = $("#obj").val();
        if(val!==''){
            var item = $("<li  class = 'mains' ></li>").text(val);
            $(item).append("<button class='del'>X</button>");
            $("#todo").append(item);
            $("#obj").val("");
            $(".del").on('click',function(){ $(this).parent().remove();  });
        }
        
        });      
        $("#obj").keypress(function(event) { 
            if (event.keyCode === 13) { 
                $("#enter").click(); 
            } 
        }); 


        $( "#menu" ).click(function() {
            $( "ul" ).slideToggle( "medium", function() {
              // Animation complete.
            });
          });
});