var btnMenu = document.getElementById('btnMenu');
var nav_ul = document.querySelector('.nav_ul');
var btnNavOnline = document.querySelector('.nav_button-apply--online');
var btnNavbarMenu = document.querySelector('.navbar__menu--button');


btnMenu.addEventListener('click', () => {   
    btnNavbarMenu.classList.toggle('toggleBtn');
    nav_ul.classList.toggle('active_ul');
    btnNavOnline.classList.toggle('active_apply--online');
})

var navbar = document.querySelector('.navbar');


var prevScrollPos = window.pageYOffset;

window.onscroll = () => {

    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0px";
        btnNavbarMenu.style.top = "26.5%";
    } else {
        navbar.style.top = "-150px";
        btnNavbarMenu.style.top = "-250px";
        nav_ul.classList.remove('active_ul');
        btnMenu.style.display = 'block';
        btnNavOnline.classList.remove('active_apply--online');
    }

    prevScrollPos = currentScrollPos;
}


const onScroll_fade = document.querySelectorAll('.show');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('onScroll-fade-out');
        } else {
            entry.target.classList.remove('onScroll-fade-out');
        }
    })
})

onScroll_fade.forEach(fadeIn => {
    observer.observe(fadeIn);
})


var footer = document.querySelector('footer');
var scroll__up = document.querySelector('.scroll__up');

window.addEventListener('scroll', () => {
    var footerRect = footer.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (footerRect.top <= windowHeight) {
        navbar.style.display = "none";
        btnMenu.style.display = "none";
    } else {
        navbar.style.display = "flex";
        btnMenu.style.display = "block";
    }
})

scroll__up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

var body = document.querySelector('body');
var styles = window.getComputedStyle(body);
var backgroundColor = styles.getPropertyValue('background-color');
var svgPath = document.querySelector('.svgPath');

window.addEventListener('scroll', () => {

    let isScroll = false;

    var clientRectFooter = footer.getBoundingClientRect();
    var scrollHeight = window.innerHeight;

    if (clientRectFooter.top <= scrollHeight) {
        
        scroll__up.style.display = "none";
        
    } else {
        isScroll = true
        if (isScroll) {
            if (document.documentElement.scrollTo === 0 || document.body.scrollTo === 0) {
                scroll__up.style.display = "none";
            } else {
                scroll__up.style.display = "flex";
            }
        
            if (backgroundColor === 'rgb(246, 246, 246)') {
                scroll__up.style.color = "black";
                svgPath.style.fill = "black";
            } else if (backgroundColor === "rgb(255, 255, 255)") {
                scroll__up.style.color = "white";
                svgPath.style.fill = "white";
            } else {
                scroll__up.style.color = "white";
                svgPath.style.fill = "white";
            }
        }
        scroll__up.style.display = "flex";
    }
})

