let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // hides slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} // if slideIndex exceeds the number of slides available, it is reset to 1, ensuring the slideshow loops back to the first slide
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    let dots = document.querySelectorAll(".dot")
    let slides = document.querySelectorAll(".mySlides")

    slides.forEach(slide => {
      slide.style.display = "none";
    })

    dots.forEach(dot => {
      dot.className = dot.className.replace(" active", "");
    });

    // Display the clicked slide and set the dot as active
    slides[index].style.display = 'block';
    dots[index].className += " active";
  });
});
