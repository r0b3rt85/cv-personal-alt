// Used to 'toggle' the burger menu
const navSlide = () => {
  const menu = document.getElementById('nav-toggle');
  const nav = document.querySelector(".nav__items");
  const navLinks = document.querySelectorAll(".nav__items li");

  menu.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("hidden");

    // Animate Links
    navLinks.forEach((link, index) => {
      console.log(index); // You can animate the delay between each element using the index values
      if (link.style.animation) {
        link.style.animation = ""; // Allows the animation to reset
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.5
          }s`; // Creates a delay between each one programmatically if there are different amounts of nav links
      }
    });

  });
};

navSlide(); // Needs to be called for it to work
