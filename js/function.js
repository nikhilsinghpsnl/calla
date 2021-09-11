// HEADER BUTTON
$("document").ready(function (){
    $("#wrapper").click(function(){
        $(".icon").toggleClass("close")
    })
});

// SLICK
$(document).ready(function(){

    // CAROUSEL
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
    });

    // PRODUCT SLIDER
    $('.product-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        infinite:true,
        dots: false,
        prevArrow: '.arrows-prev',
        nextArrow: '.arrows-next',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
});

// Scrool Function
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1000) {
        $('.back-to-top').fadeIn(500);

    } else {
        $('.back-to-top').fadeOut(300);
    }
});
$('.back-to-top').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

// PAGE LOADER
var myVar;

function pageLoader() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myPage").style.display = "block";
}

// Newsletter Email Varification
function varifMail(){
    var email = document.getElementById('newsEmail').value;
    var emailPattern = /^[a-z 0-9 @ .]{6,20}$/;

    if(emailPattern.test(email)){
        document.getElementById('noteForEmail').innerHTML = '';
    } else{
        document.getElementById('noteForEmail').innerHTML = 'Please Enter Correct Email';
        document.getElementById('noteForEmail').style.color = 'red';
        document.getElementById('noteForEmail').style.fontWeight = 'bold';
    }
}