$(document).ready(function () {
  
const nextIcon = '<i class="fa fa-angle-left"></i>'
const prevIcon = '<i class="fa fa-angle-right"></i>'
$('#owl-latest-courses').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    nav:true,
    autoplay:true,
    dots:false,
    navText: [
        nextIcon,
        prevIcon
        
    ],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2
        },
        1000:{
            items:3,
            nav:true,
        }
    }
});
$('#owl-partners').owlCarousel({
    nav:false,
    loop:true,
    margin:10,
    responsiveClass:true,   
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});
$("#owl-testimonial").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    nav: false,
    autoplay:true,
    dots: false,
    autoplayTimeout:1000,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
  });
$("").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    nav: false,
    autoplay:true,
    dots: false,
    autoplayTimeout:1000,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
  });
});



