function toggleDropdown(event) {
  event.stopPropagation(); // ensures the event doesn't trigger other click listeners attached to the document


  document.querySelectorAll(".dropdown-content").forEach(function(element) {
    element.classList.remove("show");
  })


  event.target.nextElementSibling.classList.toggle("show"); // selects the button's immediately following sibling in the HTML structure, which is .dropdown-content
}

document.querySelectorAll(".dropbtn").forEach(function(button) {
  button.addEventListener("click", toggleDropdown);
})


window.onclick = function(event) {
  // Check if the clicked target is not a dropbtn
  if (!event.target.matches('.dropbtn')) {
    // Get all elements with the class "dropdown-content"
    var dropdowns = document.querySelectorAll(".dropdown-content");

    // Loop through the dropdowns and hide them if they are open
    dropdowns.forEach(function(dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
};
