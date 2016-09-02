jQuery(window).scroll(function(){
    var fromTopPx = 450; // distance to trigger
    var fromMPx=1300;
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('body').addClass('scrolled');
    }else{
        jQuery('body').removeClass('scrolled');
    }
    if(scrolledFromtop>fromMPx){
      jQuery('body').addClass('scrolledM');
    }
    else{
      jQuery('body').removeClass('scrolledM');
    }
});