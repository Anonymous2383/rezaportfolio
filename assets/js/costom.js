$(document).ready(function() {
    // Remove preloader
    $("#preloader").fadeOut("slow");

    // Set Animate
    init_animate();

    // Trigger Element with class animate_animated
    function init_animate() {
        $(".animate_animated").each(function () {
            $(this).on('inview', function (event, isInView) {
                var animate_class = $(this).attr("data-animate");
                // mendeteksi elemenmt ketika tampil
                if (isInView) {
                    //jika tampil / visibel
                    $(this).addClass(animate_class);
                } else{
                    //jika tidak tampil / not vidibele
                    $(this).removeClass(animate_class);
                }
            });
        });
        
    }

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        ioop: true,
        margin: 15,
        autoplay: true,
        responsive: {
            0: {
                item: 1,
                nav: false
            },
            764: {
                item: 2,
                nav: false
            },
            1000: {
                item: 4,
                nav: false,
                loop: false,
            }
        }
    })

    // NAvigasi aktif
    $("a.nav-link").on("click",function() {
        //menghilanggkan class active pada setiap element a.nav-link
        $("a.nav-link").removeClass("active");
        $(this).addClass("active");9
    })

});
