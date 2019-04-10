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
