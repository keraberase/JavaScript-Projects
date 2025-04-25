// Function to open the modal (lightbox)
function openModal() {
  // Make the modal visible by setting display to "block"
  document.getElementById("myModal").style.display = "block";
}

// Function to close the modal (lightbox)
function closeModal() {
  // Hide the modal by setting display to "none"
  document.getElementById("myModal").style.display = "none";
}

// Initial slide index (starts from the first slide)
let slideIndex = 1;

// Show the initial slide
showSlides(slideIndex);

// Function to move forward or backward in the slideshow
function plusSlides(n) {
  // Add 'n' to the current slide index and show the new slide
  showSlides(slideIndex += n);
}

// Function to jump directly to a specific slide
function currentSlide(n) {
  // Set slide index to 'n' and show that slide
  showSlides(slideIndex = n);
}

// Core function that displays the appropriate slide and updates captions/thumbnails
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // All slide elements
  let dots = document.getElementsByClassName("demo");       // All thumbnail images
  let captionText = document.getElementById("caption");     // Caption text element

  // Wrap around if the index is out of bounds
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove 'active' class from all thumbnails
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Highlight the active thumbnail
  dots[slideIndex - 1].className += " active";

  // Set the caption text to the alt of the current thumbnail
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
