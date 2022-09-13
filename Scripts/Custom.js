$(document).ready(function() {
    let date = new Date();
    $("#current_year").text(date.getFullYear());

    // Clear Form
    $('#your-name').val('');
    $('#email').val('');
    $('#your-message').val('');

    // Social icons
    $(".twitter").hover(function () { $("#contact-section").toggleClass("color-twitter") });
    $(".facebook").hover(function () { $("#contact-section").toggleClass("color-facebook") });
    $(".googleplus").hover(function () { $("#contact-section").toggleClass("color-googleplus") });
    $(".quora").hover(function () { $("#contact-section").toggleClass("color-quora") });
    $(".medium").hover(function () { $("#contact-section").toggleClass("color-medium") });
    $(".instagram").hover(function () { $("#contact-section").toggleClass("color-instagram") });
    $(".github").hover(function () { $("#contact-section").toggleClass("color-github") });
    $(".envelope").hover(function () { $("#contact-section").toggleClass("color-envelope") });
    $(".linkedin").hover(function () { $("#contact-section").toggleClass("color-linkedin") });
});

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
    this.showEmoji = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i].msg;
    var emoji = this.toRotate[i].emo

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    var targetText = this.txt === fullTxt ? fullTxt + emoji : this.txt

    this.el.innerHTML = '<span class="wrap">' + targetText + '</span>';

    var that = this;
    var delta = 130 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 430;
    }

    setTimeout(function () {
    that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
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

function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
    var visible = isElementInViewport(el);
    if (visible != old_visible) {
        old_visible = visible;
        if (typeof callback == 'function') {
        callback();
        }
    }
    }
}

var handler = onVisibilityChange(skills, function () {

});


//jQuery
$(window).on('DOMContentLoaded load resize scroll', handler);

// When the DOM is loaded and ready, let's do some shit!

document.querySelector(".card-flip").classList.toggle("flip");

/* 
    * Holder.js for demo image
    * Just for demo purpose
    */
Holder.addTheme('gray', {
    bg: '#777',
    fg: 'rgba(255,255,255,.75)',
    font: 'Helvetica',
    fontweight: 'normal'
});

var wel = randomtext();
document.getElementById("welcome-lang").innerHTML = wel;
document.getElementById("welcome-nav").innerHTML = wel;
function randomtext() {
    var randomtxt = [
    '👋 Hello',
    '👋 Bonjour',
    '🙏 Namaste'];
    return randomtxt[Math.floor((Math.random() * 2.99))];
}

// Auto resize input
function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);


console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function () {

    var textareas = document.querySelectorAll('.expanding'),

    resize = function (t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
        t.style.height = (t.scrollHeight + t.offset) + 'px';
        t.style.overflow = '';
    },

    attachResize = function (t) {
        if (t) {
        t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

        resize(t);

        if (t.addEventListener) {
            t.addEventListener('input', function () { resize(t); });
            t.addEventListener('mouseup', function () { resize(t); }); // set height after user resize
        }

        t['attachEvent'] && t.attachEvent('onkeyup', function () { resize(t); });
        }
    };

    // IE7 support
    if (!document.querySelectorAll) {

    function getElementsByClass(searchClass, node, tag) {
        var classElements = new Array();
        node = node || document;
        tag = tag || '*';
        var els = node.getElementsByTagName(tag);
        var elsLen = els.length;
        var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
        for (i = 0, j = 0; i < elsLen; i++) {
        if (pattern.test(els[i].className)) {
            classElements[j] = els[i];
            j++;
        }
        }
        return classElements;
    }

    textareas = getElementsByClass('expanding');
    }

    for (var i = 0; i < textareas.length; i++) {
    attachResize(textareas[i]);
    }

})();

function loadbg() {
    $('#navbar').toggleClass('navbg');
}

function resetSkills() {
    $('.bar-info').each(function () {
    $(this).css("width", 40 + "%");
    });

    $('.percent').each(function () {
    var $this = $(this);
    $this.text($this.text().replace("%", ""));
    });
}

function animateSkills() {
    var skills = document.querySelector('#skills');
    function skillSet() {
    // Iterate over each element w/ a class of
    // bar-info, storing the value of data-total
    // in a variable.  Using jQuery's CSS method,
    // dynamically update the width of each bar.
    $('.bar-info').each(function () {
        total = $(this).data("total");
        $(this).css("width", total + "%");
    });

    // Iterate over each element w/ the class percent.  Using
    // jQuery's $(this) will allow us to interact w/ each specific
    // object in the loop.  Then use jQuery's super awesome animate method
    // to implement a counter on each .percent element, which will "count"
    // up incrementally until it reaches the number inside the percent span,
    // aka it's "ceiling".
    $('.percent').each(function () {
        var $this = $(this);
        $({
        Counter: 10
        }).animate({
        Counter: $this.text()
        }, {
        duration: 3000,
        easing: 'swing',
        step: function () {
            $this.text(Math.ceil(this.Counter) + "%");
        }
        });
    });
    };
    // Invoke our skillSet function inside a setTimeout, 
    // to create a short delay before the animation begins.
    setTimeout(skillSet, 0);
}

new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    fixedElements: '#navbar',
    menu: '#navig',
    anchors: ['intro', 'about', 'work', 'contact'],
    autoScrolling: true,
    verticalCentered: false,
    scrollOverflow: true,
    scrollHorizontally: true,
    onLeave: function (origin, destination, direction) {
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (destination.index == 1) {
        metaThemeColor.setAttribute("content", "#333333");
        animateSkills();
    }

    if (origin.index == 1) {
        resetSkills();
    }

    else if (destination.index == 2) {
        metaThemeColor.setAttribute("content", "#2F1E30");
    }

    else if (destination.index == 3) {
        metaThemeColor.setAttribute("content", "#EDB948");
    }

    else {
        metaThemeColor.setAttribute("content", "#23A6D5");
    }
    }
});

//methods
function getRandomRGBValue() {
    return Math.min(Math.floor(Math.random() * 255 + 1), 255);
}
function getRandomColor() {
    var r = getRandomRGBValue(),
    g = getRandomRGBValue(),
    b = getRandomRGBValue();
    return "#" + (((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
}
fullpage_api.setAllowScrolling(true);
