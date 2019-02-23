//Check off specific todos
//Must set up listener on element that exists when page loads (ul)
//And specify which elements to listen for (li)
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
    //Removes entire LI
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //Prevents event bubbling
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle();
})