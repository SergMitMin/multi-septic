(function($){
    $(function() {
      $('.header-menu_mobile').on('click', function() {
        $(this).closest('.header-menu')
          .toggleClass('header-menu_state_open');
      });
    });

  })(jQuery);

  $(".drop-handler").hover(function() {
    $(this).find(".dropdown").stop().slideToggle(300);
})

// here is hider-visiber of 2nd section
let aseIloBtn = document.querySelector('#ase-ilo');
let iloAseBtn = document.querySelector('#ilo-ase');

let ase = document.querySelector('.services-assenizator');
let ilo = document.querySelector('.services-ilosos');

aseIloBtn.addEventListener('click', function(e){
  e.preventDefault();
  ilo.classList.remove('hidden');
  ilo.classList.add('visible');
  ase.classList.add('hidden');
});

iloAseBtn.addEventListener('click', function(e){
  e.preventDefault();
  ilo.classList.add('hidden');
  ase.classList.remove('hidden');
  ase.classList.add('visible');
})
//  hider-visiber ends

// hiders for sliders sec
let ftBtn = document.querySelector('.text-text__btn');
let fvBtn = document.querySelector('.text-video__btn');
let counter = 0;

ftBtn.addEventListener('click', function(e){
  document.querySelector('.feedback-video-slider').classList.add('hidden');
  document.querySelector('.feedback-text-slider').classList.remove('hidden');

 if(counter === 0){
   counter++;
  $('.feedback-text-slider').slick({
    infinitie: true,
    slidesToShow: 1,
    prevArrow: $('.text-prev__btn'),
    nextArrow: $('.text-next__btn'),
  });

 } else {
   console.log('Text slider is still ready')
 }
 e.preventDefault();
});

fvBtn.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('.feedback-text-slider').classList.add('hidden');
  document.querySelector('.feedback-video-slider').classList.remove('hidden');
});

// hiders for contacts
let ccBtn = document.querySelector('.contacts-contacts__btn');
let cfBtn = document.querySelector('.contacts-form__btn');

ccBtn.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('.contacts-contacts').classList.remove('hidden');
  document.querySelector('.contacts-form-block').classList.add('hidden');
  document.querySelector('.contacts-form-block').classList.remove('visible');
  document.querySelector('.contacts-contacts').classList.add('visible');
})

cfBtn.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('.contacts-contacts').classList.add('hidden');
  document.querySelector('.contacts-contacts').classList.remove('visible');
  document.querySelector('.contacts-form-block').classList.remove('hidden');
  document.querySelector('.contacts-form-block').classList.add('visible');
})


// slow navigation
$(".header-menu-links__item").on("click", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();

  //забираем идентификатор бока с атрибута href
  var id  = $(this).attr('href'),

  //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
  
  //анимируем переход на расстояние - top за 1500 мс
  $('body,html').animate({scrollTop: top}, 1500);
});






//calc for sec 2
let iloCount = document.querySelector('#ilo-count__btn');
// ilo count
let iloSum = function(){
  let city;
  let capacity;

  if(document.querySelector('#ilo-mos').checked){
    city = 500;
  } else {
    city = 1000;
  }

  if(document.querySelector("#ilo-24").checked){
    capacity= 4;
  } else if(document.querySelector("#ilo-57").checked){
    capacity = 7;
  } else {
    capacity = 10;
  }
  return city*capacity;
}
iloCount.addEventListener('click', function(e){
  e.preventDefault();

  document.querySelector('#ilo__price').textContent = iloSum();

});

let aseCount = document.querySelector('#ase-count__btn');
// ase count
let aseSum = function(){
  let city;
  let capacity;

  if(document.querySelector('#ase-mos').checked){
    city = 800;
  } else {
    city = 1800;
  }

  if(document.querySelector("#ase-24").checked){
    capacity= 4;
  } else if(document.querySelector("#ase-57").checked){
    capacity = 7;
  } else {
    capacity = 10;
  }
  return city*capacity;
}

aseCount.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#ase__price').textContent = aseSum();
}) 