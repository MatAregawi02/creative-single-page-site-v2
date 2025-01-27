let hamburgerIcon = document.querySelector(".hamburger-icon");
let crossIcon = document.querySelector(".cross-icon");
let navigation = document.querySelector("nav");
let menu = document.querySelector("ul");
// let mobileHeroImage = document.querySelector(".mobile-hero-img");
// let tabletHeroImage = document.querySelector(".tablet-hero-img");
// let desktopHeroImage = document.querySelector(".desktop-hero-img");
// let mobileWidth = `${600}px`;


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