$(document).ready(function () {
    $('.wrapper').slick({
        dots: true,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1140,
                settings:{
                    arrows: false
                }
            }
        ]   
    });

    $('.new-arrivals-cards').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.prev-arrivals'),
        nextArrow: $('.next-arrivals'),
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.publishing-cards').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.prev-publishing'),
        nextArrow: $('.next-publishing'),
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.news-items').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.prev-news'),
        nextArrow: $('.next-news'),
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                }
            }
        ]
    });
});

