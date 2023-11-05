//toggle website theme Dark/Light
const animate = anime({
    targets: '#toggleAnime',
    scale: 1,
    rotate: '1turn',
    autoplay: false
});
document.querySelector('#toggleAnime').onclick = animate.restart;
const toggleIcon = document.getElementById("toggleIcon");
toggleIcon.addEventListener("click", changeTheme);

function changeTheme(){
    toggleIcon.classList.toggle("bi-moon-fill")
    let body = document.getElementById("body")
    body.classList.toggle("lightMode")
    body.classList.toggle("darkMode")
}

//hover effect
const buttonEl = document.querySelectorAll('.nav-item');
function animateButton(el, scale, duration, elasticity) {
    anime.remove(el);
    anime({
        targets: el,
        scale: scale,
        duration: duration,
        elasticity: elasticity
    });
}
function enterButton(el) {
    animateButton(el, 1.2, 800, 400)
}
function leaveButton(el) {
    animateButton(el, 1.0, 600, 300)
}
for (var i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener('mouseenter', function(e) {
        enterButton(e.target);
    }, false);

    buttonEl[i].addEventListener('mouseleave', function(e) {
        leaveButton(e.target)
    }, false);
}
//sound
function Sound(src, volume) {
    this.src = src;
    this.volume = volume;
    this.audio = new Audio(src);
    this.audio.volume = volume;

    this.playSound = function() {
        this.audio.play();
    };
}
const sfx = new Sound("audio/canon_event_sfx.mp3", 0.1)

const spider_icon=document.getElementById("spider_icon");
spider_icon.addEventListener("mouseover", function (){
    sfx.playSound();
})










