// Baneer slider
$('.owl-carousel.slider_main').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    smartSpeed:500,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})


// testimonial
$(document).ready(function(){

    
    $('.owl-carousel.testimonial_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        center:false,
        dots:false,
        nav:false,
        autoplay:true,
        smartSpeed:500,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
     })
    });



//  companies_slide
 $('.owl-carousel.companies_slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    smartSpeed:400,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
   })