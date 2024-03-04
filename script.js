let IconCart = document.querySelector('.iconcart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');

let listProduct =[];

IconCart.addEventListener('click', () => {
    body.classList.toggle('showcart');
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showcart');
})

const initApp = () => {
    fetch('prod.json')
    .then(response => response.json())
    .then(data => {
        listProduct = data;
        addDataToHTML();
    });
};
initApp();

function addtc(productId) {
    addToCart(productId);
}

function addToCart(productId) {
    const selectedProduct = listProduct.find(product => product.id === productId);

    if (selectedProduct) {
        const imageUrl = selectedProduct.image ? selectedProduct.image : './img/image.webp'

        const cartItemHTML = `
            <div class="item">
                <div class="image">
                    <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
                </div>
                <div class="name">${selectedProduct.name}</div>
                <div class="totalprice">${selectedProduct.price}kr</div>
                <div class="quantity">
                    <span class="minus" onclick="decreaseQuantity()">-</span>
                    <span class="quantity-value">1</span>
                    <span class="plus" onclick="increaseQuantity()">+</span>
                </div>
            </div>
        `;

        const listCart = document.querySelector('.listcart');
        listCart.insertAdjacentHTML('beforeend', cartItemHTML);

        console.log(`Added to cart: ${selectedProduct.name}`);
    } else {
        console.error(`Product with ID ${productId} not found.`);
    }
}


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

