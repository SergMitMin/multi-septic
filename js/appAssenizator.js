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