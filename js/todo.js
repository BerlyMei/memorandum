//Check off specific todos by clicking
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

//click x to delete
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();

});

$("input[type='text']").keypress(function(e){
    if(e.which=== 13){
        var todotext=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+todotext+"</li>");

    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});