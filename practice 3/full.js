$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navBar').toggleClass('nav-toggle')
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navBar').removeClass('nav-toggle');
        if($(window).scrollTop() > 0){
          $('.scroll-top').show(); 
        }else{
            $('.scroll-top').hide();
        }
        
        // Scroll Spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');
            if(top > offset && top < offset + height){
               $('.navBar ul li a').removeClass('Active');
               $('.navBar').find(`[href="#${id}"]`).addClass('Active');
            }
        });
    });
    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        )
    })
});