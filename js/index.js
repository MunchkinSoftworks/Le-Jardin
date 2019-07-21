window.addEventListener("load", function(){  //when page loads, fade out the page loader/spinner
    const loader = document.querySelector(".loading__wrapper");
    loader.className += " loading__fadeout";
});
var condition = false;
function test_1 () {
    var btn = document.getElementById("credit-content_1");
    var content = document.getElementById("credit-content_2");
    if (condition == false) {
        $('#credit-content_2').animate({maxHeight: '500',
        },500, function() {
            content.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        });
        content.style.paddingTop = "30px";
        btn.classList.add("credits__active");
        condition = true;
    } else {
        $('#credit-content_2').animate({maxHeight: '0'},500);
        $('#credit-content_2').animate({paddingTop: '0'},100);
        btn.classList.remove("credits__active");
        condition = false; 
    }
}