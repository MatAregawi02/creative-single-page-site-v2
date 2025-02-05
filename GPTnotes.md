# Refactoring a mixin with too many parameters

// Mixin for layout properties
@mixin layout($width, $height, $padding, $margin) {
  width: $width;
  height: $height;
  padding: $padding;
  margin: $margin;
}

// Mixin for text-related properties
@mixin text($font-size, $line-height, $font-weight, $text-align) {
  font-size: $font-size;
  line-height: $line-height;
  font-weight: $font-weight;
  text-align: $text-align;
}

// Mixin for visual styles
@mixin visuals($color, $border-radius, $background, $box-shadow, $opacity) {
  color: $color;
  border-radius: $border-radius;
  background: $background;
  box-shadow: $box-shadow;
  opacity: $opacity;
}

# The use of srcset attribute to reduce repetitive html...

<img src="image-default.jpg" 
     srcset="image-small.jpg 500w, image-medium.jpg 1000w, image-large.jpg 2000w" 
     alt="example image">

# Unexpected behavior of navigation menu upon resizing of window

The code I wrote for toggling the menu worked just fine, but I noticed a problem when I tried to make the webpage responsive. Whenever I resize the window to 600px or less(mobile width), the menu would appear without my clicking the hamburger icon. To provide a more robust solution for the problem, I asked chatGPT for help.

ChatGPT suggested that I separate the clicking functionality from the displaying functionality of the navigation:

function updateNavVisibility(){
    const screenWidth = document.documentElement.clientWidth; //calculate current screen width
    if (screenWidth <= 600) { //if mobile width
        navigation.classList.add("hidden"); //hide the menu
        hamburgerIcon.style.display = "inline-block"; //hamburger menu appears
        crossIcon.style.display = "none"; //cross icon is toggled off
    } 
    else {
        navigation.classList.remove("hidden"); //if other width, regular menu shown
    }
}

window.addEventListener('resize',updateNavVisibility); //up on resize, make necessary changes to the menu
updateNavVisibility(); //initial setup on page load
//when the page is loaded, the correct menu form is shown based on the screen size!

# Z-index and the stacking context

Whenever I use z-index for a certain section, I notice that the section below it, falls behind as if the previous section wasn't there. That's because z-index lifts the content up, and whatever comes after it is shoved below.