// document.addEventListener('contextmenu', event => event.preventDefault());
$(document).ready(function () {
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

/*});
$(document).ready(function () {*/
    $('.testimonial-slider-1').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Scroll page to Contact form
    $(".get_quote").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact_form").offset().top
        }, 2000);
    });
});

// map section
// $('.mainmapImg .myBtn').on('click', function () {
//     if ($(this).siblings('.dots').hasClass('d-none')) {
//         $(this).siblings('.dots').removeClass('d-none');
//         $(this).siblings('.more').addClass('d-none');
//         $(this).siblings('.myBtn').text('Read more');
//     } else {
//         $(this).siblings('.dots').addClass('d-none');
//         $(this).siblings('.more').removeClass('d-none');
//         $(this).siblings('.myBtn').text('Read less');
//     }
// })

$('.key-points .myBtn').on('click', function () {
    // alert('I am clicked!')
    if ($(this).parents('.key-points').find('.dots').hasClass('d-none')) {
        // alert(1)
        $(this).parents('.key-points').find('.dots').removeClass('d-none');
        $(this).parents('.key-points').find('.more').addClass('d-none');
        $(this).parents('.key-points').find('.myBtn').text('Read more');
    } else {
        // alert(2)
        $(this).parents('.key-points').find('.dots').addClass('d-none');
        $(this).parents('.key-points').find('.more').removeClass('d-none');
        $(this).parents('.key-points').find('.myBtn').text('Read less');
    }
})

$(function () {
    let img_widht, popup_width;
    
    $(".popup img").click(function () {
        //let $src = $(this).attr("src");
        let $src = $(this).attr("id");
        $(".show").fadeIn().addClass('active');
        $(".img-show img").attr("src", $src);
        
        img_widht = $('.img-show img').width();

        popup_width = $('.map-container .show .img-show').width();
        console.log(popup_width)
    });

    $(".popup .thumbText > h3").click(function () {
        let $src = $(this).parents('.mainmapImg').find('img').attr("src");
        $(".show").fadeIn().addClass('active');
        $(".img-show img").attr("src", $src);

        img_widht = $('.img-show img').width();
    });

    $("span.close").click(function () {
        $(".show").fadeOut().removeClass('active');
        $('.img-show img').css({ 'width': 'auto', 'height': '100%', 'top': '0', 'left': '0'  });
    });

    $('.plus').on('click', function () {
        img_widht = $('.img-show img').width();
        console.log(img_widht);
        let new_widht = img_widht + 100;
        console.log(new_widht)
        new_widht += 100;
        
        if (new_widht >= 9000) {
            new_widht = 9000;
        }
        $('.img-show img').width(new_widht);
        
        $('.img-show img').height('auto')
        
        /*img_widht += 100;
        
        if (img_widht >= 5000) {
            img_widht = 5000;
        }
        $('.img-show img').width(img_widht);
        
        $('.img-show img').height('auto')*/
    })

    $('.minus').on('click', function () {
        // let img_widht = $('.img-show img').width()
        /*let new_widht = img_widht - 100;
        if (new_widht < 500) {
            new_widht = 500;
        }
        $('.img-show img').width(new_widht);
        $('.img-show img').height('auto')*/
        /*img_widht -= 100;
        if (img_widht <= 600) {
            img_widht = 600;
        }
        $('.img-show img').width(img_widht);
        $('.img-show img').height('auto');*/
        
        img_widht = $('.img-show img').width();
        console.log(img_widht);
        let new_widht = img_widht - 100;
        console.log(new_widht)
        new_widht -= 100;
        console.log(popup_width);
        if (new_widht <= popup_width) {
            new_widht = '100%';
        }
        $('.img-show img').width(new_widht);
        
        $('.img-show img').height('auto')
    })

    $('.reset').on('click', function () {
        $('.img-show img').css({ 'width': 'auto', 'height': '100%', 'top': '0', 'left': '0' });
    });


    // let ovrflow_width
    $(".img-show img").draggable({

        scroll: true,
        stop: function () { },
        drag: function (e, ui) {
            console.log(123)
            let popup_img_width = $('.img-show img').width();
            let popup_width = $('.img-show').width();
            let new_img_width = popup_width - popup_img_width;

            let popup_img_height = $('.img-show img').height();
            let popup_height = $('.img-show').height();
            let new_img_height = popup_height - popup_img_height;

            if (ui.position.left > 0) {
                ui.position.left = 0;
                console.log(11)
            }
            if (ui.position.left < new_img_width) {
                ui.position.left = new_img_width;
                console.log(12)
            }

            if (ui.position.top > 0) {
                ui.position.top = 0;
                console.log(13)
            }
            if (ui.position.top < new_img_height) {
                ui.position.top = new_img_height;
                console.log(14)
            }
        }
    });

});

// our client
$(".nbs-flexisel-ul").slick({
    slidesToShow: 6,
    infinite: false,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    // dots: false, Boolean
    arrows: true, //Boolean
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// Contact us start
(function () {
    "use strict";
    /*
     * Form Validation
     */

    // Fetch all the forms we want to apply custom validation styles to
    const forms = document.querySelectorAll(".needs-validation");
    const result = document.getElementById("result");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();

                    form.querySelectorAll(":invalid")[0].focus();
                } else {
                    /*
                     * Form Submission using fetch()
                     */

                    const formData = new FormData(form);
                    event.preventDefault();
                    event.stopPropagation();
                    const object = {};
                    formData.forEach((value, key) => {
                        object[key] = value;
                    });
                    const json = JSON.stringify(object);
                    result.innerHTML = "Please wait...";

                    fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: json
                    })
                        .then(async (response) => {
                            let json = await response.json();
                            if (response.status == 200) {
                                result.innerHTML = json.message;
                                result.classList.remove("text-gray-500");
                                result.classList.add("text-green-500");
                            } else {
                                console.log(response);
                                result.innerHTML = json.message;
                                result.classList.remove("text-gray-500");
                                result.classList.add("text-red-500");
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            result.innerHTML = "Something went wrong!";
                        })
                        .then(function () {
                            form.reset();
                            form.classList.remove("was-validated");
                            setTimeout(() => {
                                result.style.display = "none";
                            }, 5000);
                        });
                }
                form.classList.add("was-validated");
            },
            false
        );
    });
})();
// Contact us End

