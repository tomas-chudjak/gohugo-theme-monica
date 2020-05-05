// Main js file

// Simple mobile menu open action
function toggleMobileMenu(){
  var menuElement = document.getElementById('mobileNavigation')
  menuElement.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
  var mobileMenuButtons = document.getElementsByClassName('mobile-menu__toggle-button');

  for(var i = 0; i < mobileMenuButtons.length; i++){
    mobileMenuButtons[i].addEventListener("click", function(e){
      e.preventDefault();
      toggleMobileMenu();
    })
  }
});