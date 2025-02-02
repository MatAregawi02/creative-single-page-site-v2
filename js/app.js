let hamburgerIcon = document.querySelector(".hamburger-icon");
let crossIcon = document.querySelector(".cross-icon");
let navigation = document.querySelector("nav");
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


//function adopted from chatGPT for learning purposes (modified)
//please read GPTnotes.md for documentation 
function updateNavVisibility(){ //this function is for correct displaying of the nav menu
    const screenWidth = document.documentElement.clientWidth;
    if (screenWidth <= 600) {
        navigation.classList.add("hidden"); 
        hamburgerIcon.style.display = "inline-block";
        crossIcon.style.display = "none"; 
    } 
    else {
        navigation.classList.remove("hidden"); 
        // hamburgerIcon.style.display = "none"; //solved in sass
        // crossIcon.style.display = "none"; 
    }
}

hamburgerIcon.addEventListener("click", () => {
    
        hamburgerIcon.style.display = "none"; //upon a click, it should disappear
        crossIcon.style.display = "inline-block";
        navigation.classList.remove("hidden");
});
crossIcon.addEventListener("click", () => {
        crossIcon.style.display = "none";
        hamburgerIcon.style.display = "inline-block";
        navigation.classList.add("hidden");
        
});

window.addEventListener('resize',updateNavVisibility); //returns it to starting point
updateNavVisibility(); //updates the navigation upon each resize...

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
    let screenWidth = document.documentElement.clientWidth;

    cardHeading.textContent = slideData.title;
    captionTitle.textContent = slideData.captionHead;
    captionDate.textContent = slideData.captionDate;
   
  
        slideImage.src = slideData.image;
    
  
    if (screenWidth <= mobileWidth){ //mobile should be checked first!!
            slideImageMobile.src = slideData.imageMobile;
   
    }
    else if (screenWidth <= tabletWidth){
        slideImageTablet.src = slideData.imageTablet;
        
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

//this snippet below makes sure that the slides get updated to current slide 
//up on resizing of the window....
function updateSlideUponResize(){
    const slideData = slides[currentSlide];
    updateSlide(slideData);
}
window.addEventListener('resize',updateSlideUponResize);