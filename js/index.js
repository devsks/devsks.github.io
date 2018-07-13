(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 48
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 48
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  });

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal(
    '.devicons',
    {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    },
    200
  );
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal(
    '.sr-contact',
    {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    },
    300
  );

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
})(jQuery); // End of use strict



/*

var c = document.getElementById('c');
var cxt = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;



var code = '#include <iostream>\
using namespace std;\
int main()\
{ \
   string s1,s2,s3,s4,s5;\
   s1="\xF0\x9F\x98\x83";\
   s2="\xF0\x9F\x92\x90";\
   s3="\xF0\x9F\x8E\x89";\
   s4="\xF0\x9F\x8E\x8A";\
   s5="\xF0\x9F\x98\x98";\
   cout<<"Happyyy Birthdayyy Santosh!!!"+s1+" "+s1+" "+s1<<endl;\
    cout<<"I wish you get every happiness that you deserve "+s1+" "+s1+" "+s1<<endl;\
    cout<<"Happy 23rd b\'day ";\
    short i=23;\
    while(i--)\
    {\
	cout<<s5<<" ";\
    }\
    cout<<endl;\
    return 0;\
}';
chinese = code.split("");

var font_size =10;
var columns = c.width/font_size; 

var drops = [];

for(var x=0;x<columns;x++){
  drops[x]=1;
}

function draw(){
  cxt.fillStyle="rgba(0,0,0,0.05)";
  cxt.fillRect(0,0,c.width,c.height);
  
  cxt.fillStyle = "#0F0";
  cxt.font = font_size+'px arial';
  
  
  for(var i=0;i<drops.length;i++){
    var text = chinese[Math.floor(Math.random()*chinese.length)];
    cxt.fillText(text,i*font_size,drops[i]*font_size);
    
    if(drops[i]*font_size>c.height && Math.random() >0.975)
      drops[i]=0;
    
    //increment y coordinate
    drops[i]++;
}
  
}
setInterval(draw,63);*/