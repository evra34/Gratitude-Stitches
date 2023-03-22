

// CREATING MY FUNCTIONALITIES 

// function showSlideOne(){
//     slides[index].classList.remove('active')
//     slides[1].classList.add('active');
// }

// function showSlideTwo(){
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active')
//     if( index = 1){
//     }
// }
// function showSlideThree(){
//     slides[index].classList.remove('active');
//     index = (index + 2) % slides.length;
//     slides[index].classList.add('active')
// }


// linkOne.addEventListener('click', function carou(){
//     slides[index].classList.add('active');
// })
// linkTwo.addEventListener('click', function carou(){
//     slides[index].classList.remove('active')
//     slides[1].classList.add('active');
// })

// linkThree.addEventListener('click', function carou(){
//     slides[index].classList.remove('active')
//     slides[1].classList.remove('active')
//     slides[2].classList.add('active');
//     carouselTwo.style.display = "none"
//     carouselOne.style.display = "none"
//     carouselThree.style.display = "block"
//     document.body.style.backgroundColor = "green"
// })
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