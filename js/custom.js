var $sidebar = $('.sidebar');
$(window).scroll(function(){
  var fromTop = $(window).scrollTop();
  if(fromTop > $(window).height()){
    $sidebar.css({'margin-top': fromTop - 50 })
  }
  else {
    $sidebar.css({'margin-top': 0});
  }
});
