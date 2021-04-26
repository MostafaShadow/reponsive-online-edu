$(function(){

    /* Show Page Loading And Hide*/
    $('.loading').each(function(){
        if ($(this).is(':visible'))
        {
            $('.loading').delay(3000).fadeOut(1000,function(){
                $('.Pageloading').css({
                    display:'none'
                });
                $('.all-element').fadeIn(1000,function(){
                    $('.all-element').css({display:'block'});
                });
            });

        }
    });


    /* Navbar Fixed*/

    $(window).scroll(function(){
        if($(this).scrollTop() > 900)
        {
              $('.navbar').removeClass('navbar-stop').addClass('navbar-run');
        }

        else
        {
            $('.navbar').removeClass('navbar-run').addClass('navbar-stop');

        }
    })


    /* Slider*/

    $('.carousel-control-prev,.carousel-control-next-icon,#carouselExampleCaptions').on('click',function(){
        $('.carousel-item').fadeOut(500,function(){
            $(this).delay(300).fadeIn(1000)
        })
    });


    /* PlaceAttr*/

    var PlaceAttr = '';
    $('[placeholder]').focus(function(){
        PlaceAttr = $(this).attr('placeholder');
        $(this).attr("placeholder",'');
    }).blur(function(){
        $(this).attr('placeholder',PlaceAttr)
    });



     /** Show Icon Scrolling */

     $(window).scroll(function(){
        if ($(window).scrollTop() > 1000 ){
           $('.scroll-up').fadeIn(300)
        }
        else
        {
           $('.scroll-up').fadeOut(300)
        }
        })  
  
  
                       /** click Scrolling smooth */
  
     $('.scroll-up i').on('click',function(){
        $("html,body").animate({
           scrollTop:0
        },2000);
     });
});



