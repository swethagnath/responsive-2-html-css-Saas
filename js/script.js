$(document).ready(function(){
    $('.menu .fa-solid').click(function(){
        $(this).toggleClass("fa-xmark")
        $('nav').toggleClass('nav-toggle')
    })
})