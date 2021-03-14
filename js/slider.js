const mySwiper = new Swiper('.swiper-container', {
  speed: 1,
  loop: true,
  allowTouchMove: false,
  preventClicks: false,
  observer: true,
  observeParents: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  preloadImages: false,
  lazy: true,
  lazy: {
    loadPrevNext: true,
  },
})

mySwiper.on('click', function() {
  mySwiper.slideNext(1, false)
})