

$('.menu-btn').on('click',function(e){
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
  });

 
  $(function(){
    let filter = $("[data-filter]");
    filter.on("click",function(event){
      event.preventDefault();
      let cat = $(this).data('filter');
      if(cat == 'all'){
        $("[data-cat]").removeClass("hide");
      }else {
        $("[data-cat]").each(function(){
          let workCat = $(this).data('cat');
          if(workCat != cat){
            $(this).addClass('hide');
          } else{
            $(this).removeClass('hide');
          }
        });
      }
    });
  });

  $(function(){
    let filter = $("[data-filter1]");
    filter.on("click",function(event){
      event.preventDefault();
      let cat1 = $(this).data('filter1');
      if(cat1 == 'all'){
        $("[data-cat1]").removeClass("hide1");
      }else {
        $("[data-cat1]").each(function(){
          let workCat1 = $(this).data('cat1');
          if(workCat1 != cat1){
            $(this).addClass('hide1');
          } else{
            $(this).removeClass('hide1');
          }
        });
      }
    });
  });
  $(function(){
    let filter = $("[data-filter2]");
    filter.on("click",function(event){
      event.preventDefault();
      let cat2 = $(this).data('filter2');
      if(cat2 == 'all'){
        $("[data-cat2]").removeClass("hide2");
      }else {
        $("[data-cat2]").each(function(){
          let workCat2 = $(this).data('cat2');
          if(workCat2 != cat2){
            $(this).addClass('hide2');
          } else{
            $(this).removeClass('hide2');
          }
        });
      }
    });
  });
  $(function(){
    let filter = $("[data-filter3]");
    filter.on("click",function(event){
      event.preventDefault();
      let cat3 = $(this).data('filter3');
      if(cat3 == 'all'){
        $("[data-cat3]").removeClass("hide3");
      }else {
        $("[data-cat3]").each(function(){
          let workCat3 = $(this).data('cat3');
          if(workCat3 != cat3){
            $(this).addClass('hide3');
          } else{
            $(this).removeClass('hide3');
          }
        });
      }
    });
  });
  
  $(function(){
    let filter = $("[data-filter4]");
    filter.on("click",function(event){
      event.preventDefault();
      let cat4 = $(this).data('filter4');
      if(cat4 == 'all'){
        $("[data-cat4]").removeClass("hide4");
      }else {
        $("[data-cat4]").each(function(){
          let workCat4 = $(this).data('cat4');
          if(workCat4 != cat4){
            $(this).addClass('hide4');
          } else{
            $(this).removeClass('hide4');
          }
        });
      }
    });
  });
  $(function(){
    let filter = $("[data-filter6]");
    filter.on("click",function(event){
      event.preventDefault();
      let cat6 = $(this).data('filter6');
      if(cat6 == 'all'){
        $("[data-cat6]").removeClass("hide6");
      }else {
        $("[data-cat6]").each(function(){
          let workCat6 = $(this).data('cat6');
          if(workCat6 != cat6){
            $(this).addClass('hide6');
          } else{
            $(this).removeClass('hide6');
          }
        });
      }
    });
  });
  $(function(){
    let filter = $("[data-filter7]");
    filter.on("click",function(event){
      event.preventDefault();
      let cat7 = $(this).data('filter7');
      if(cat7 == 'all'){
        $("[data-cat7]").removeClass("hide7");
      }else {
        $("[data-cat7]").each(function(){
          let workCat7 = $(this).data('cat7');
          if(workCat7 != cat7){
            $(this).addClass('hide7');
          } else{
            $(this).removeClass('hide7');
          }
        });
      }
    });
  });

 