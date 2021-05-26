//Refrescar la pagina cuando se confirma el modal
$('#myModal').on('hidden.bs.modal', function () { location.reload(); })


//funcion para read more

$(".readmore-btn").on('click', function (){
    $(this).parent().toggleClass("showContent");
    var replaceText = $(this).parent().hasClass("showContent") ? "Leer Menos" : " Leer Más";
    $(this).text(replaceText);
});

