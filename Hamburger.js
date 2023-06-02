document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar burger element
    var navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    if (navbarBurgers.length > 0) {
      navbarBurgers.forEach(function(navbarBurger) {
        navbarBurger.addEventListener('click', function() {
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          navbarBurger.classList.toggle('is-active');
          document.getElementById(navbarBurger.dataset.target).classList.toggle('is-active');
        });
      });
    }
  });