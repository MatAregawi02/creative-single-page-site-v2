let hamburgerIcon = document.querySelector(".hamburger-icon");
let crossIcon = document.querySelector(".cross-icon");
let navigation = document.querySelector("nav");
let menu = document.querySelector("ul");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let cardHeading = document.querySelector("h5");
let slideImage = document.querySelector(".slide-one-img-desktop");
let slideImageTablet = document.querySelector(".slide-one-img-tablet");
let slideImageMobile = document.querySelector(".slide-one-img-mobile");
let captionTitle = document.querySelector(".caption-title");
let captionDate = document.querySelector(".caption-date");

let tabletWidth = 768; //`${768}px` is not a number!
let mobileWidth = 600;
// let mobileHeroImage = document.querySelector(".mobile-hero-img");
// let tabletHeroImage = document.querySelector(".tablet-hero-img");
// let desktopHeroImage = document.querySelector(".desktop-hero-img");



hamburgerIcon.addEventListener("click", () => {
    
        hamburgerIcon.style.display = "none"; //upon a click, it should disappear
        crossIcon.style.display = "inline-block";
        navigation.classList.remove("hidden");
        
   
})
crossIcon.addEventListener("click", () => {
        crossIcon.style.display = "none";
        hamburgerIcon.style.display = "inline-block";
        navigation.classList.add("hidden");
        
});

window.addEventListener('resize',function(){
    const screenWidth = this.window.innerWidth;
    
    if (screenWidth > 600){
        navigation.classList.remove("hidden");
    }
    if (screenWidth === 600){
        navigation.classList.add("hidden");
        hamburgerIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
    }
});

//section three, dynamic content switching??
//an array of images
const slides = [
    {image : 'assets/desktop/image-slide-1.jpg', 
    imageTablet : 'assets/tablet/image-slide-1.jpg',
    imageMobile : 'assets/mobile/image-slide-1.jpg',
    title : "Brand naming & guidelines",
    captionHead : "Lean Product Roadmap", captionDate : "2019 Project"
    },
    {image : 'assets/desktop/image-slide-2.jpg',
    imageTablet : 'assets/tablet/image-slide-2.jpg',
    imageMobile : 'assets/mobile/image-slide-2.jpg',
    title : "Brand identity & merchandise",
    captionHead : "New Majestic Hotel", 
    captionDate : "2018 Project"
    },
    {image : 'assets/desktop/image-slide-3.jpg',
    imageTablet : 'assets/tablet/image-slide-3.jpg',
    imageMobile : 'assets/mobile/image-slide-3.jpg',
    title : "Brand identity & web design",
    captionHead : "Crypto Dashboard",
    captionDate : "2016 Project"
    }
]

let currentSlide = 0; //starting point

function updateSlide(slideData){
    let screenWidth = window.innerWidth;
    cardHeading.textContent = slideData.title;
    captionTitle.textContent = slideData.captionHead;
    captionDate.textContent = slideData.captionDate;
   
    if (screenWidth > tabletWidth){
        slideImage.src = slideData.image;
    }
    
    if (screenWidth <= tabletWidth){
        slideImageTablet.src = slideData.imageTablet;
    }

    if (screenWidth <= mobileWidth){
        slideImageMobile.src = slideData.imageMobile;
    }
 
}

rightArrow.addEventListener("click", () => {
    leftArrow.style.display = "inline-block";
    if (currentSlide < slides.length - 1){ //the -1 is pretty important
        
        currentSlide++;
        const slideData = slides[currentSlide];
        updateSlide(slideData);
    }
    if (currentSlide == slides.length - 1){
        rightArrow.style.display = "none";
    }
  
})

leftArrow.addEventListener("click", () => {
    rightArrow.style.display = "inline-block";
    if (currentSlide > 0){
        currentSlide--;
        const slideData = slides[currentSlide];
        updateSlide(slideData);
    }
    if (currentSlide === 0){
        leftArrow.style.display = "none";
    }
});