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




//cards
const characterCards = document.querySelectorAll('.card');

characterCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transition = 'transform 1s ease-in-out'; // Добавляем плавный переход для поворота
        card.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            card.style.transition = 'transform 0.3s ease-in-out'; // Возвращаем плавный переход по умолчанию
            card.style.transform = 'rotateY(0)';
        }, 1000);
    });
});

//tabs
function openCity(evt, name) {
    // Declare variables for tab content and tab links.
    var i, tabcontent, tablinks;

    // Get all elements with class "tabcontent" and hide them.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class "tablinks" and remove the "active" class.
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Display the content of the clicked tab
    document.getElementById(name).style.display = "block";

    // Add the "active" class to the clicked tab link.
    evt.currentTarget.className += " active";
}
