let hamburgerIcon = document.querySelector(".hamburger-icon");
let crossIcon = document.querySelector(".cross-icon");
let navigation = document.querySelector("nav");
let menu = document.querySelector("ul");
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