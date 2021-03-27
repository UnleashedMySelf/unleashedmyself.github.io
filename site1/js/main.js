// слайдеры
$(document).ready(function(){
      $('.preview-slider').slick({
      	arrows : false,
      	autoplay: true,
  		autoplaySpeed: 4000,
  		speed: 1000
 		});
});

$(document).ready(function(){
      $('.slider-center').slick({
      	arrows : false,
  		infinite: true,
  		slidesToShow: 3,
  		dots: true,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 4000,
  		speed: 1000,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows : false,
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 4000
          }
        }]
 		});
});
$(document).ready(function(){
      $('.popular-doors-choice').slick({
        arrows : false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        responsive: [
        {
          breakpoint: 1228,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows : false,
            infinite: true,
            speed: 2000
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows : false,
            infinite: true,
            speed: 2000
          }
        }]
    });
});

$(document).ready(function(){
      $('.slider-interior1').slick({
  		autoplaySpeed: 4000,
      infinite: true,
      slidesToScroll: 1,
  		speed: 1000,
      asNavFor: '.popular-doors-choice',
      responsive: [
        {
          breakpoint: 770,
          settings: {
            arrows : false
          }
        }]
 		});
});
$(document).ready(function(){
      $('.slider-interior2').slick({
      autoplaySpeed: 4000,
      infinite: true,
      slidesToScroll: 1,
      speed: 1000,
      asNavFor: '.popular-doors-choice',
      responsive: [
        {
          breakpoint: 770,
          settings: {
            arrows : false
          }
        }]
    });
});
$(document).ready(function(){
      $('.slider-interior3').slick({
      autoplaySpeed: 4000,
      infinite: true,
      slidesToScroll: 1,
      speed: 1000,
      asNavFor: '.popular-doors-choice',
      responsive: [
        {
          breakpoint: 770,
          settings: {
            arrows : false
          }
        }]
    });
});
$(document).ready(function(){
$('.slider-fittings').slick({
    dots: true,
    arrows: false,
    slidesPerRow: 3,
    rows: 2,
    autoplay: true,
    responsive: [
    {
      breakpoint: 478,
      settings: {
        slidesPerRow: 1,
        rows: 1,
      }
    }
  ]
});
});

$(document).ready(function(){
      $('.slick-metal-doors-slider').slick({
        arrows : false,
        slidesToShow: 6,
        infinite: true,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        responsive: [
        {
          breakpoint: 1228,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows : false,
            infinite: true,
            speed: 2000
          }},
          {
          breakpoint: 580,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows : false,
            infinite: true,
            speed: 2000
          }
        }]
    });
});
$(document).ready(function(){
      $('.popular-doors-choicess').slick({
        arrows : false,
        slidesToShow: 6,
        infinite: true,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        responsive: [
        {
          breakpoint: 1228,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows : false,
            infinite: true,
            speed: 2000
          }},
          {
          breakpoint: 580,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows : false,
            infinite: true,
            speed: 2000
          }
        }]
    });
});
// для увеличения фото
$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});

// для замены текста

function change1(){ // Функция изменяет текст
   document.getElementById('advantges-text').innerHTML = 'НА РЫНКЕ С 1998 ГОДА';
}
function change2(){ // Функция изменяет текст
   document.getElementById('advantges-text').innerHTML = 'ПРЯМЫЕ ПОСТАВКИ С ЗАВОДОВ';
}
function change3(){ // Функция изменяет текст
   document.getElementById('advantges-text').innerHTML = 'ТОВАРЫ ОТ ЛУЧШИХ ПРОИЗВОДИТЕЛЕЙ';
}
function change4(){ // Функция изменяет текст
   document.getElementById('advantges-text').innerHTML = 'ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ';
}
function change0(){ // Функция возвращает текст в исходный вид
     document.getElementById('advantges-text').innerHTML = 'НА ДАННЫЙ МОМЕНТ НАШЕЙ КОМПАНИИ 20 ЛЕТ. ЗА ЭТО ВРЕМЯ НАША КОМПАНИЯ СМОГЛА ПРОЧНО ЗАКРЕПИТЬСЯ НА РЫНКЕ И ЗАНЯТЬ ЛИДИРУЮЩИЕ ПОЗИЦИИ ПО ПРОДАЖАМ ДВЕРЕЙ';
}

//отображение слайдеров

function showSlider1(){ 
    document.getElementById('slider-interiors1').style.visibility='visible';
    document.getElementById('slider-interiors2').style.visibility='hidden';
    document.getElementById('slider-interiors3').style.visibility='hidden';
}
function showSlider2(){
    document.getElementById('slider-interiors2').style.visibility='visible';
    document.getElementById('slider-interiors1').style.visibility='hidden';
    document.getElementById('slider-interiors3').style.visibility='hidden';
}
function showSlider3(){ 
    document.getElementById('slider-interiors3').style.visibility='visible';
    document.getElementById('slider-interiors2').style.visibility='hidden';
    document.getElementById('slider-interiors1').style.visibility='hidden';
}

function showMetal(){
    document.getElementById('slick-metal-doors-slider').style.visibility='visible';
    document.getElementById('popular-doors-choicess').style.visibility='hidden';
}
function showPopular(){
    document.getElementById('popular-doors-choicess').style.visibility='visible';
    document.getElementById('slick-metal-doors-slider').style.visibility='hidden';
}

$(document).ready(function(){
  $(".toggle").on('click',function(){
    $(".menu-overll").toggleClass("active-menu");
  });
});

// фиксация шапки

var h_hght = 130; // высота шапки
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

//pop-up формы и политики

$(document).ready(function() { // Ждём загрузки страницы
  
  $(".popup_bg").click(function(){  // Событие клика на затемненный фон    
    $(".popup").fadeOut(800); // Медленно убираем всплывающее окно
  });

});

$(document).ready(function() { // Ждём загрузки страницы
  
  $(".showTextBG").click(function(){  // Событие клика на затемненный фон    
    $(".showText").fadeOut(200); // Медленно убираем всплывающее окно
  });

});

function showPopup() {
  $(".popup").fadeIn(800); // Медленно выводим изображение
}

function showText() {
  $(".showText").fadeIn(200); // Медленно выводим текс
}