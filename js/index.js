//************Add the CSS animation to the SVG Loader *************/
document.addEventListener("DOMContentLoaded", () => {
    rect_1 = document.getElementById("rect-1");
    rect_2 = document.getElementById("rect-2");
    rect_3 = document.getElementById("rect-3");
    //start the css animation by adding css class
    rect_1.classList.add("animate-rect-1");
    rect_2.classList.add("animate-rect-2");
    rect_3.classList.add("animate-rect-3");

}, false );
//*******************This is code to start using sweet scroll for smooth scrolling*********************/
document.addEventListener("DOMContentLoaded", () => {
    const sweetScroll = new SweetScroll({ /* some options */ 
        duration: 1200,
        easing: 'easeOutQuad',
    });
}, false );
//*************Stop animation after a certain time after site loads *******/
window.addEventListener("load", function(event){  //when page loads, fade out the page loader/spinner
    const loader = document.querySelector(".loading__wrapper"); 
    this.setTimeout(stopAnimation, 2200);
    function stopAnimation(){
        loader.className += " loading__fadeout";
        rect_1.classList.remove("animate-rect-1");
        rect_2.classList.remove("animate-rect-2");
        rect_3.classList.remove("animate-rect-3");
    }
    this.setTimeout(fadeout, 1500);
    function fadeout(){
        loader.className += " loading__fadeout";
    }
}, false);
//*******************This code executes the scroll-reveal effect*****************************/
window.addEventListener("load", function(event){  //when page loads, fade out the page loader/spinner
    //ScrollReveal().reveal('.headline2', { delay: 1000, distance: '150px', origin: 'left', easing: 'ease-out', reset: true, desktop: true });
    ScrollReveal().reveal('.heading__title--h1', { delay: 300, duration: 900, distance: '150px', origin: 'bottom', easing: 'ease-out', reset: true, desktop: true });
    ScrollReveal().reveal('.heading__title--h2', { delay: 300, duration: 900, distance: '150px', origin: 'bottom', easing: 'ease-out', reset: true, desktop: true });
    ScrollReveal().reveal('.whatWeDo--p', { delay: 300, duration: 600, distance: '150px', origin: 'bottom', easing: 'ease-out', reset: true, desktop: true });
    ScrollReveal().reveal('.ourStory--p', { delay: 300, duration: 600, distance: '150px', origin: 'bottom', easing: 'ease-out', reset: true, desktop: true });
    ScrollReveal().reveal('.testimonials--text', { delay: 300, duration: 600, distance: '150px', origin: 'bottom', easing: 'ease-out', reset: true, desktop: true });
    ScrollReveal().reveal('.findUs__txtBox', { delay: 400, duration: 600, distance: '200px', origin: 'right', easing: 'ease-out', reset: true, desktop: true });
    ScrollReveal().reveal('.footer__ThankYou', { delay: 300, duration: 600, distance: '150px', origin: 'bottom', easing: 'ease-out', reset: true, desktop: true });
    

}, false);
//*************this code executes when the credits button is clicked****************************
let condition;
function test_1() {
    //let condition;
    var btn = document.getElementById("credit-content_1");
    var content = document.getElementById("credit-content_2");
    if (!condition) {
        content.style.transition = "all 0.5s ease-out";
        content.style.maxHeight = "500px";
        content.style.paddingTop = "30px";
        setTimeout(function(){
            content.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        },250);
        btn.classList.add("credits__active");
        condition = true;
    } else {
        content.style.maxHeight = "0px";
        content.style.paddingTop = "0px";
        btn.classList.remove("credits__active");
        condition = false; 
    }
}