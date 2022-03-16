$(document).ready(function() {

new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    slidesNavigation: true,
    controlArrows: false,
    navigation: true,
    slidesNavPosition: 'bottom',
  });

$(document).on('click', '.help__show', function(){
    $('.help__box').show();
    $(this).hide();
})

function trickMob() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', () => {
  trickMob();
});


window.addEventListener('scroll', () => {
  trickMob();
});


trickMob();


});
