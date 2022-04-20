$(document).ready(function(){
    $(".input-field").focusout(function(){
        var inputValue=$(this).val();
        if(inputValue===""){
            $(this).removeClass("hasValue");
            }
        else{
            $(this).addClass("hasValue");
        }
    });
     
});