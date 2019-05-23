$(document).ready(function (){
    $(".smooth-scroll").click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top + 160
        }, 2000);
    });
    //smooth-scroll-home
    $(".smooth-scroll-home").click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top 
        }, 2000);
    });
    // slider
    
    //create the slider
});
//alert("hello world"); 
//$(".waypoint--1").waypoint(function(direction){
//    if(direction == "down"){
//        //alert("hellow worlds");
///        $('.waypoint--1').addClass('fixed-nav');
//    }
//}, {
//    offset: '65%'
///});
//$(".waypoint--2").waypoint(function(direction){
//    if(direction == "down"){
///        //alert("hellow worlds");
///        $('.waypoint--2').addClass('fadeIn-center');
//    }
//}, {
//    offset: '65%'
//});

