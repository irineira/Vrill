$(document).ready(() => {


// scrol menu
    $(document).on('click', '.adaptmenu__item a', function() {
        $(".header").removeClass("subheader_active");
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 500);
    })


// select
    $('.select').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#'+$(e.target).attr('for')).prop('checked',true);
    });

    $(document).click(function() {
        $('.select').removeClass('expanded');
    });


// burger
    $('.burger').click(function() {
            
        $('.adaptmenu').toggleClass('adaptmenu_active');
        $('.header').toggleClass('subheader_active');
    });

    $('.adaptmenu__item').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
    });


// header
    if(pageYOffset > 0){
        $('.header').addClass('subheader_fix');
    }

    $(window).scroll(function(){
        if(pageYOffset > 0) {
            $('.header').addClass('subheader_fix');
        }

        else{
            $('.header').removeClass('subheader_fix');
            $('.header').removeClass('subheader_active');
        }

    });
    

// faq
    $(document).on('click', '.questionItem', function(){
        $('.questionItem__bottom').addClass('hidden');
        $(this).find('.questionItem__bottom').removeClass('hidden');
        $('.questionItem__icon img').removeClass('trans_rot');
        $(this).find('.questionItem__icon img').addClass('trans_rot');
    });

});                                                   