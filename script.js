let IconCart = document.querySelector('.iconcart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

IconCart.addEventListener('click', () => {
    body.classList.toggle('showcart');
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showcart');
})


let slideIndex = 1;
showSlides(slideIndex);

function plus(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function minus(n) {
    showSlides(slideIndex -= n);
}

function showSlides(n){
    let i;
    let slides = document.querySelectorAll(".wrapper-products > img");
    let dots = document.querySelectorAll(".dot");
    console.log("n: "+n)
    console.log("slides: "+slides)
    console.log("dots: ",dots);
    if (n > slides.length) {slideIndex = 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
   
    for (i = 0; i < dots.length; i++){
        dots[i].classList.remove("active");
    }
    console.log("slideInex: ",slideIndex);
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active");
} 

function cs(n)
{
    showSlides(slideIndex=n);
}

