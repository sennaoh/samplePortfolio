import anime from '../node_modules/animejs/lib/anime.es.js';

//fun background swirly//


const wrapperEl = document.querySelector('.swirlyBG');
const numberOfEls = 90;
const duration = 6000;
const delay = duration / numberOfEls;

let tl = anime.timeline({
    duration: delay,
    complete: function() { tl.restart(); }
});

function createEl(i) {
    let el = document.createElement('div');
    const rotate = (360 / numberOfEls) * i;
    const translateY = -50;
    const hue = Math.round(360 / numberOfEls * i);
    el.classList.add('el');
    el.style.backgroundColor = 'hsl(' + hue + ', 50%, 100%)';
    el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
    tl.add({
        begin: function() {
            anime({
                targets: el,
                backgroundColor: ['hsl(' + hue + ', 50%, 90%)', 'hsl(' + hue + ', 90%, 90%)'],
                rotate: [rotate + 'deg', rotate + 1 + 'deg'],
                translateY: [translateY + '%', translateY + 900 + '%'],
                scale: [5, 5.25],
                easing: 'easeInOutSine',
                direction: 'alternate',
                duration: duration * .1
            });
        }
    });
    wrapperEl.appendChild(el);
};

for (let i = 0; i < numberOfEls; i++) createEl(i);


// interactive json social icons//
import lottieWeb from 'https://cdn.skypack.dev/lottie-web';
//facebook
var container = document.getElementById('facebookIcon');
var state = 'play';

var animation = lottieWeb.loadAnimation({
    container: container,
    path: 'icons8-facebook.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "demo",
});

animation.goToAndStop(1, true);

container.addEventListener('mouseenter', () => {
        if (state === 'play') {
            animation.playSegments([1, 15], true);
            state = 'pause';
        } else {
            animation.playSegments([0, 1], true);
            state = 'play';
        }
    }

);

//twitter
var containerTwit = document.getElementById('twitterIcon');
var stateTwit = 'play';

var animationTwit = lottieWeb.loadAnimation({
    container: containerTwit,
    path: 'icons8-twitter.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "demo",
});

animationTwit.goToAndStop(1, true);

containerTwit.addEventListener('mouseenter', () => {
    if (stateTwit === 'play') {
        animationTwit.playSegments([1, 18], true);
        stateTwit = 'pause';
    } else {
        animationTwit.playSegments([0, 1], true);
        stateTwit = 'play';
    }
});

//instagram
var containerInsta = document.getElementById('instaIcon');
var stateInsta = 'play';

var animationInsta = lottieWeb.loadAnimation({
    container: containerInsta,
    path: 'icons8-instagram.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "demo",
});

animationInsta.goToAndStop(1, true);

containerInsta.addEventListener('mouseenter', () => {
    if (stateInsta === 'play') {
        animationInsta.playSegments([1, 15], true);
        stateInsta = 'pause';
    } else {
        animationInsta.playSegments([0, 1], true);
        stateInsta = 'play';
    }
});

//content emerge animation//
//first block
var buttonElOne = document.getElementById("lineOne");
var hideElOne = document.getElementById("lineOneCaption");
buttonElOne.onclick = function() {
        hideElTwo.style.display = "none";
        hideElThree.style.display = "none";
        hideElFour.style.display = "none";
        if (hideElOne.style.display === "none") {
            hideElOne.style.display = "block";

        } else {
            hideElOne.style.display = "none";
        }

    }
    //second block
var buttonElTwo = document.getElementById("lineTwo");
var hideElTwo = document.getElementById("lineTwoCaption");
buttonElTwo.onclick = function() {
        hideElOne.style.display = "none";
        hideElThree.style.display = "none";
        hideElFour.style.display = "none";
        if (hideElTwo.style.display === "none") {
            hideElTwo.style.display = "block";
        } else {
            hideElTwo.style.display = "none";
        }
    }
    //third block
var buttonElThree = document.getElementById("lineThree");
var hideElThree = document.getElementById("lineThreeCaption");
buttonElThree.onclick = function() {
    hideElTwo.style.display = "none";
    hideElOne.style.display = "none";
    hideElFour.style.display = "none";
    if (hideElThree.style.display === "none") {
        hideElThree.style.display = "block";
    } else {
        hideElThree.style.display = "none";
    }
}

//fourth block
var buttonElFour = document.getElementById("lineFour");
var hideElFour = document.getElementById("lineFourCaption");
buttonElFour.onclick = function() {
    hideElTwo.style.display = "none";
    hideElThree.style.display = "none";
    hideElOne.style.display = "none";
    if (hideElFour.style.display === "none") {
        hideElFour.style.display = "block";
    } else {
        hideElFour.style.display = "none";
    }
}