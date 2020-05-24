function changeLang(lang) {
    if (lang == 0) {
        $("#en").removeClass("active");
        $("#pt").addClass("active");
    } else {
        $("#pt").removeClass("active");
        $("#en").addClass("active");
    }
}

$(".parallax").height($(window).height());

$(".menuHid").height($(window).height());
function openContact() {
    $("#openContact").fadeOut("slow", function () {
        $("#sendMsg").fadeIn();
        $("#txtArea").fadeIn();
    });

}
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
function sendMsg() {
    $("#sendMsg").fadeOut("slow");
    $("#txtArea").fadeOut("slow", function () {
        $("#openContact").fadeIn();
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        openInNewTab("https://api.whatsapp.com/send?text=" + $("#txtArea").val() + "&phone=5535999144165");
    } else {
        openInNewTab("https://web.whatsapp.com/send?text=" + $("#txtArea").val() + "&phone=5535999144165");
    }
}

$("#btn").click(function () {
    $(".menuHid").fadeToggle("slow", function () {

        $("#li1").fadeToggle("slow", function () {
            $("#li2").fadeToggle("slow", function () {
                $("#li3").fadeToggle("slow", function () {
                    $("#li4").fadeToggle("slow");
                });
            });
        });
    });
});

$(document).ready(function () {

    $('#tech').slick({
        dots: false,
        arrows: false,
        swipeToSlide: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    var mediaR = document.getElementsByClassName('media-r');
    var mediaL = document.getElementsByClassName('media-l');
    for (i = 0; i < 1; i++) {
        mediaR[i].style.transform = 'translate(15%, 0px)';
    }
    for (i = 0; i < 2; i++) {
        mediaL[i].style.transform = 'translate(-15%, 0px)';
    }

    var cardR = document.querySelector('.card-r');
    var cardL = document.querySelector('.card-l');
    cardR.style.transform = 'translate(15%, 0px)';
    cardL.style.transform = 'translate(-15%, 0px)';


    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.media').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);
                this.style.transform = 'none';
                this.style.transform = 'none';
            }

        });

        /* Check the location of each desired element */
        $('.card').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);
                this.style.transform = 'none';
                this.style.transform = 'none';
            }

        });

        /* Check the location of each desired element */
        $('.title').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);
            }

        });

    });
});