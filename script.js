function fun() {
    searchForm = document.querySelector('.search-form');
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    userlog.classList.remove('active');
    navbar.classList.remove('active');
}

function fun1() {
    shoppingCart = document.querySelector('.shopping-cart');
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    userlog.classList.remove('active');
    navbar.classList.remove('active');
}
function fun2() {
    userlog = document.querySelector('.login-form');
    userlog.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

// function fun3() {
//     navbar = document.querySelector('.nav-bar');
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     userlog.classList.remove('active');
// }
function fun3() {
    navbar = document.querySelector('.navbar');
    document.querySelector('#menu-btn') 
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        userlog.classList.remove('active');
   
}

// window.onscroll = () => {
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     userlog.classList.remove('active');
//     navbar.classList.remove('active');
// }
// window.onscroll = () => {
//     userlog.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     searchForm.classList.remove('active');
//     menubar.classList.remove('active');
// }







var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableInteraction: false,
    },
    centerdSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: { 
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

// counter section start
$(document).ready(function(){
    $('.counter').each(function(){
        $(this).prop('Counter',0).animate({
            Counter:$(this).text()
        },{
            duration:3500,
            easing:'swing',
            step: function(now){
                $(this).text(Math.ceil(now)+ '+');
            }
        })
    })
})
// counter section end