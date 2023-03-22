
// var btne = document.getElementsByClassName("btne");
// var slide = document.getElementById("slide");

// btne[0].onclick = function () {
//     slide.style.transform = "translateX(0px)"
//     for (i = 0; i < 4; i++) {
//         btne[i].classList.remove("active");
//     }
//     this.classList.add("active");
// }
// btne[1].onclick = function () {
//     slide.style.transform = "translateX(-800px)"
//     for (i = 0; i < 4; i++) {
//         btne[i].classList.remove("active");
//     }
//     this.classList.add("active");
// }
// btne[2].onclick = function () {
//     slide.style.transform = "translateX(-1600px)"
//     for (i = 0; i < 4; i++) {
//         btne[i].classList.remove("active");
//     }
//     this.classList.add("active");
// }
// btne[3].onclick = function () {
//     slide.style.transform = "translateX(-2400px)"
//     for (i = 0; i < 4; i++) {
//         btne[i].classList.remove("active");
//     }
//     this.classList.add("active");
// }

// FOR MY RESPONSIVE NAV BAR
const primaryNav = document.getElementById('nav')
const navToggle = document.querySelector('.mobile-nav-bar-toggle')

navToggle.addEventListener('click' , () =>{
    // primaryNav.style.transform = 'translateX(0)';
    let visibility = primaryNav.getAttribute('data-visible')
    let navIconsToggle = navToggle.getAttribute('aria-expanded')
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

// FOR MY NAV ON SCROLL 

const header = document.querySelector('header')
const sectionOne = document.querySelector('.landing-page')

const sectionOneOptions = { 
    rootMargin: "-450px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('header-scrolled')
        } else{
            header.classList.remove('header-scrolled')
        }
    })
}
, sectionOneOptions)

sectionOneObserver.observe(sectionOne)




let slides = document.querySelectorAll(".first")
let index = 0

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}

function prev(){
    slides[index].classList.remove('active');   
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}