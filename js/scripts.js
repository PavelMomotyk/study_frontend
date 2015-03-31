/**
 * Created by goba on 23.03.15.
 */
$(document).ready(function(){


    $("select").msDropDown();


    $('input[type=text],input[type=email],input[type=date],input[type=password]').focus(function(){
        $(this).css({border: '2px solid red'});
    }).blur(function(){
        var newVal = $(this).val().trim();
        $(this).val(newVal);
        if ($(this).val() == "" ) {
            $(this).css({border: '1px solid red', background: '#FBACAC', 'border-radius': '7px'})
        }
        else{
            $(this).css({border: '1px solid green', background: 'white', 'border-radius': '7px'})
        }

    });

    $('#pass').blur(function(){
        pass1 =$(this).val();
        for (var i=0;i<=pass1.length+1;i++){

        if(((pass1[i])=='_') || ((pass1[i])=='-') || ((pass1[i])=="\\") ||((pass1[i])=='/') ||((pass1[i])=='|') || (pass1.length <6)) {
            $('.analiz').css('display', 'block');
            $('#pass').val('');
            $('#pass').css({border: '1px solid red', width: '326px', height: '23px','border-radius': '7px'});}
             }});
    $('#pass1').blur(function(){
        pass2 =$(this).val();
        if (pass1 != pass2){
            $('#popupWrapper').show();
            $('#pass').val('');
            $('#pass1').val('');
            $('#closeMe').click(function () {
                $('#popupWrapper').hide();
            });
        }
    });

    $('#pass').focus(function(){
        $('.analiz').css('display', 'none');
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
        $('.dropdown-inside').css('background','yellow');
    });$('.dropdown-inside').mouseleave(function(){
        $('.dropdown-inside').css('background','white');
    });

    $('.man1').click.toggle(
        function () {
        $('.man1').css('opacity','0')
    },
        function () {
        $('.man1').css('opacity','1')
    });


    $('.FolowUs').click(function(){
        $('.icontop').css('display','block');
    });


    $('.xlogo').click(function(){
        $('.icontop').css('display','none');
    });


    var login =  prompt('Login','');
    if((login=='Admin')||(login == 'admin')){
        var password = prompt('password','');
        if(password=='123'){
            alert('Грац')
        }
        else{
            alert('Не правильний пароль')
        }
    }
    else{
        alert('Не правильний логін')
    }
});
