let hamburgerIcon = document.querySelector(".hamburger-icon");
let crossIcon = document.querySelector(".cross-icon");
let navigation = document.querySelector(".navigation");
let menu = document.querySelector("ul");


hamburgerIcon.addEventListener("click", () => {
  
        hamburgerIcon.style.display = "none"; //upon a click, it should disappear
        crossIcon.style.display = "inline-block";
        navigation.classList.remove("hidden");
   
})
crossIcon.addEventListener("click", () => {
        crossIcon.style.display = "none";
        hamburgerIcon.style.display = "inline-block";
        navigation.classList.add("hidden");
})