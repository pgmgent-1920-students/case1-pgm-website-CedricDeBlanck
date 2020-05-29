
var slideIndex = 1;
showSlides(slideIndex);

// SLIDER + 1
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// SLIDER DIE ACTIEF IS
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// SLIDER FUNCTIE
function showSlides(n) {
  var i;
  // SELECTEERT SLIDER CONTENT
  var slides = document.getElementsByClassName("slidercontent");
  // SELECTEERT DE CIRKELTJES
  var dots = document.getElementsByClassName("dot");
  // ALS n kleiner is dan de lengte dan word hij op 1 geplaatst
  if (n > slides.length) {
    slideIndex = 1
  };
  // Als n groter is dan 1 checkt hij de lengte
  if (n < 1) {
    slideIndex = slides.length
  };
  // ALS i 0 is dan plaatst hij de andere 2 op display none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Als i 0 is veranderd hij de kleur van de actieve cirkel
  // en hij plaatst de slide die actief is op display block
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 