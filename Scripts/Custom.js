$(document).ready(function() {
      let date = new Date();
      $("#current_year").text(date.getFullYear());
      setYearOfExperience(date);
});

// Main - Start

function setYearOfExperience(date){
  // Date of joining 1st company - Worldpay
  const careerStartDate = new Date(2019, 08, 02);
  let yearsOfExp = 3;

  let totalMonths = (date.getFullYear() - careerStartDate.getFullYear()) * 12;
  totalMonths -= careerStartDate.getMonth();
  totalMonths += date.getMonth();

  let monthsOfExp = 1;
  while(totalMonths % 12 != 0){
    monthsOfExp += 1;
    totalMonths -= 1;
  }

  yearsOfExp = totalMonths / 12;
  if(monthsOfExp > 0)
    yearsOfExp = yearsOfExp + "." + monthsOfExp;

  $("#yearOfExp").text(yearsOfExp + "+");
}

// Main - End

// Sidebar - Start

$(function() {

  'use strict';

  $('.js-menu-toggle').click(function(e) {

      var $this = $(this);      

      if ( $('body').hasClass('show-sidebar') ) {
          $('body').removeClass('show-sidebar');
          $this.removeClass('active');
          $('main').removeClass('blur_all');
      } 
      else {
          $('body').addClass('show-sidebar');    
          $this.addClass('active');
          $('main').addClass('blur_all');

      }

      e.preventDefault();

  });

  // click outisde offcanvas
    $(document).mouseup(function(e) {
    var container = $(".sidebar");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ( $('body').hasClass('show-sidebar') ) {
                $('body').removeClass('show-sidebar');
                $('body').find('.js-menu-toggle').removeClass('active');
                $('main').removeClass('blur_all');
            }
    }
    }); 

});

// Sidebar - End

// Blink - Start

function blink() {
  var blinks = document.getElementsByTagName('blink');
  for (var i = blinks.length - 1; i >= 0; i--) {
  var s = blinks[i];
  s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
}
window.setTimeout(blink, 500);
}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", blink, false);
else if (window.addEventListener) window.addEventListener("load", blink, false);
else if (window.attachEvent) window.attachEvent("onload", blink);
else window.onload = blink;

// Blink - End


//Type Writer - Start

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 200;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

// Type Writer - End


// Scroll Up/Down - Start

function scrollDown(){
      $("#down").hide();
      $("#up").show();
}

function scrollUp(){
      $("#up").hide(); 
      $("#down").show();
}

$(window).scroll(function() {
  if ($(window).scrollTop() >= 0 && $(window).scrollTop() < $('#bottom').innerHeight() - 400) {
        scrollUp();
  }
  else if ($(window).scrollTop() >= $('#bottom').innerHeight() - 200 ) {
        scrollDown();
  }
});

// Scroll Up/Down - End
