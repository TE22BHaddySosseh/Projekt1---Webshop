let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("wrapper-products");
    let dots = document.getElementsByClassName("dots");
    if (n > slides.length) {slideIndex = 1}
   } 
   
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[]
    }