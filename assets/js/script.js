// carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        //nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items:1,
    });
});

// navbar mobile button
document.addEventListener('DOMContentLoaded', function() {

    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

});

