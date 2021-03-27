// фиксация шапки

var h_hght = 106; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна
                 
$(function(){
 
    var elem = $('nav');
    
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
});

const headerTop = 106
const headerZero = 0


const navTop = document.querySelector('nav')
function setInterval(e) {
    console.log(window.scrollY), 100
}
setInterval()






$(document).ready(function() { // Ждём загрузки страницы
  
  $(".all-contacts").click(function(){     
    $(".all-contacts").toggleClass("pressed")
    $(".popup").toggleClass("popup-in")


  });
   $(".cont-footer").click(function(){     
    $(".cont-footer").toggleClass("pressed-footer")
    $(".popup-footer").toggleClass("popup-footer-in")
    });
});

function showInputFinder(){    
    $(".inputFinder").toggleClass("inputShow")
}

$(document).ready(function(){
  $(".nav-toggle").on('click',function(){
    $(".small-menu-overl").toggleClass("active-menu", 500);
  });
});



$(window).scroll(function(){
    $('section>img').each(function(){
        var elPosition = $(this).offset().top;
        var elHeight = $(this).height();
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (elPosition < windowTop + windowHeight - elHeight) {
            $(this).addClass("animation pulse");
        }
        if (elPosition > windowTop + windowHeight ) {
            $(this).removeClass("animation pulse");
        }
        if (elPosition + elHeight < windowTop ) {
            $(this).removeClass("animation pulse");
        }
    });
    $('.call-us-button').each(function(){
        var elPosition = $(this).offset().top;
        var elHeight = $(this).height();
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (elPosition < windowTop + windowHeight - elHeight) {
            $(this).addClass("animation heartbeat");
        }
        if (elPosition > windowTop + windowHeight ) {
            $(this).removeClass("animation heartbeat");
        }
        if (elPosition + elHeight < windowTop ) {
            $(this).removeClass("animation heartbeat");
        }
    });
    $('.section-news').each(function(){
        var elPosition = $(this).offset().top;
        var elHeight = $(this).height();
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (elPosition < windowTop + windowHeight - elHeight) {
            $(this).addClass("animation fade-in-up");
        }
        if (elPosition > windowTop + windowHeight ) {
            $(this).removeClass("animation fade-in-up");
        }
        if (elPosition + elHeight < windowTop ) {
            $(this).removeClass("animation fade-in-up");
        }
    });
});
