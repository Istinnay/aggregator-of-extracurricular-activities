$('.menu-btn').on('click',function(e){
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
  });


  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove',startRotate);
    card.addEventListener('mouseout',stopRotate);
  }
 

  function startRotate(event){
  const cardItem = this.querySelector('.card-item');
  const halfHeight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 15 +'deg) rotateY(' + (event.offsetX - halfHeight) / 15 +'deg)';
  }
  function stopRotate(event){
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotateX(0)';
    }