$(".item").each(function(i, item){
  let rowLine = i + 1;

  $(item).css("grid-row", rowLine);

  if(rowLine % 2 == 0)
  {
    $(item).css("grid-column", 2);
    $(item).css("justify-self", "center");
    $(item).click(function(){
      $(item).text("hello, I'm puppy №" + rowLine);
    });
    //evens
  }
  else {
    //odds
    $(item).css("grid-column", 1);
    $(item).css("justify-self", "end");
    $(item).click(function(){
      $(item).text("hello, I'm puppy №" + rowLine);
    });
  }

  $(function() {
   $('.menulink').click(function(){
     $("#bg").attr('src',"music.png");
     return false;
   });
  });

});

AOS.init();
