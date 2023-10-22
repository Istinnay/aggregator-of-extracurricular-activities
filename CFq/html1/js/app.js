gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.5,
  effects: true

})
gsap.fromTo('.hero-section', {opacity:1}, {
  opacity:0,
  scrollTrigger: {
    trigger:'.hero-section',
    start:'center',
    end:'900',
    scrub: true
  }
})
let itemsL = gsap.utils.toArray('.funk__right .funk__item')

itemsL.forEach(item => {
  gsap.fromTo(item, { x: -90, opacity: 0}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-1000',
      end:'-100',
      scrub: true
    }
  })
})

let itemsR = gsap.utils.toArray('.funk__left .funk__item')

itemsR.forEach(item => {
  gsap.fromTo(item, { x: 100, opacity: 0}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-1000',
      end:'-100',
      scrub: true
    }
  })
})



}
$('.menu-btn').on('click',function(e){
e.preventDefault;
$(this).toggleClass('menu-btn_active');
$('.menu-nav').toggleClass('menu-nav_active');
});



