

$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000, 
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: [" ", "Web Developer", "Food Connoisseur", "Front-End Developer", "Full Stack Developer"],
        typeSpeed: 120, 
        loop: true, 
        startDelay: 20, 
        showCursor: false
    }); 

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }, 
            938: {
                item: 4
            }
        }
    });
    

    var skillsTopOffset = $(".skillsSection").offset().top;
    
    $(window).scroll(function(){
        if(window.pageYOffset  > skillsTopOffset - $(window).height() + 300) {
            console.log(skillsTopOffset)
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: "#c0392b",
                trackColor: "#ffffff",
                scalecColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });


});





