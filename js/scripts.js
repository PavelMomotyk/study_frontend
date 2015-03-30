

$(document).ready(function() {

    $('select').msDropDown();

    $('input[type=text]').focus(function(){
        $(this).css({border: '2px solid green', background: '#999'});
    }).blur(function(){
        var newVal = $(this).val().replace(/\s/g, '');
        $(this).val(newVal);
        if ($(this).val() == "" ) {
            $(this).css({border: '1px solid red', background: '#FBACAC'})

        }
    }).change(function(){
        if ($(this).val() == "" ) {
            $(this).css({border: '1px solid red', background: '#FBACAC'})
        }
    });


    $('#pass').blur(function(){
        if( $(this).val().length <5){
            alert("enter 6 Chars");
        }
    });


    $('#clickMe').click(function(){
        $('#popupWrapper').show();
    });

    $('#close').click(function(){
        $('#popupWrapper').hide();
    });


     $('.bxslider').bxSlider({
         auto: 'true',
         autoControls: false,
         pager:'true'
     });

     $('.sector1').click(function(){
        console.log($(this).parents());
     });



    $('.sector1, .block').mouseenter(function(){
       $('.block').slideDown();
    });$('.sector1, .block').mouseleave(function(){
         $('.block').slideUp();
     });

     $('.sector3, .block2').mouseenter(function(){
         $('.block2').slideDown();
     });$('.sector3, .block2').mouseleave(function(){
         $('.block2').slideUp();
     });

     $('.dropdown li').hover(function(){
         $(this).find('.dropdown-inside').animate({height: "show"}, 1000);
     });
     $('.dropdown li').mouseleave(function(){
         $(this).find('.dropdown-inside').animate({height: "hide"}, 1000);
     });

     $('.dropdown-inside').mouseenter(function(){
         $('.dropdown-inside').css('background','red');
     });$('.dropdown-inside').mouseleave(function(){
         $('.dropdown-inside').css('background','white');
     });

     $('.man1').toggle(function () {
         $('.man1').css('opacity','0');
     }, function () {
         $('.man1').css('opacity','1');
     });

     $('.FolowUs').click(function(){
         $('.icontop').css('display','block');
     });
     $('.xlogo').click(function(){
         $('.icontop').css('display','none');
     });

});
