(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        rtl: true,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        rtl: true,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
    faqItem.parentNode.classList.toggle('faq-active');
    });
});

(function(){
    emailjs.init("HxAP7rKQ89i1RWCh9");
})();


document.getElementById('contactForm')
    .addEventListener('submit', function(event) {
        const Inputs = document.getElementById('contactForm');
        event.preventDefault();

        emailjs.sendForm('service_vpti7xc', 'template_sl5f39i', this)
            .then(function() {
                Swal.fire({
                    icon: 'success',
                    title: 'تم الإرسال!',
                    text: 'تم إرسال الرسالة بنجاح.',
                    confirmButtonText: 'حسناً',
                    confirmButtonColor:'rgb(156, 81, 203)'
                });
            }, function(error) {
                Swal.fire({
                    icon: 'error',
                    title: 'حدث خطأ!',
                    text: 'فشل في الإرسال، حاول مرة أخرى.',
                    footer: '<code>' + JSON.stringify(error) + '</code>',
                    confirmButtonText: 'موافق',
                    confirmButtonColor: '#d33'
                });
            });
        Inputs.reset();
    });
document.getElementById('newsletterBtn').addEventListener('click', function () {
        const emailInput = document.getElementById('newsletterEmail');
        const email = emailInput.value.trim();

        // تحقق من البريد الإلكتروني
        if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
            Swal.fire({
                icon: 'warning',
                title: 'تنبيه',
                text: 'يرجى إدخال بريد إلكتروني صحيح.',
                confirmButtonText: 'حسنًا'
            });
            return;
        }
        Swal.fire({
            icon: 'success',
            title: 'تم الاشتراك',
            text: 'شكرًا لاشتراكك في النشرة الإخبارية',
            confirmButtonText: 'تم'
        });
        emailInput.value = '';
    });
