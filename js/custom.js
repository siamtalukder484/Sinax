$(function(){

    //bottom-to-top-function strt here

    $('.bottom-to-top').click(function(){
        $('html, body').animate({scrollTop:0},2000);
    });
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            $('.bottom-to-top').fadeIn(500);
        }
        else{
            $('.bottom-to-top').fadeOut(500);
        }


        if(scrolling > 150){
            $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg');
        }
    });


    // animation scroll js
 $(".menu ul li a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });


//ancor scroll
$(".banner-text a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});



//footer end part scroll
$(".end-right ul li a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

  // preloader
$(window).on('load', function(){
    $('.preloader').delay(500).fadeOut(1500);
  });


//counter
$('.counter').counterUp({
    delay: 1,
    time: 3000,
});


//banner wow js part 
$(".typed").typed({
  strings: [" your business.", " your protfolio.", " your agency."],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 70,
  // time before typing starts
  startDelay: 2000,
  // backspacing speed
  backSpeed: 55,
  // time before backspacing
  backDelay: 500,
  // loop
  loop: true,
  // false = infinite
  loopCount: 50,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});



//banner slider
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:6000,
  fade: true,
  fadeIn: 500,
  fadeOut: 500,
  autoplaySpeed: 3000,
});



//brand slider autoplay
$('.brand-main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed:2500,
  autoplaySpeed: 2000,
  loop: Infinity,
  
});


//skill part slider
$('.skill-main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:2000,
  autoplaySpeed: 500,
});







});