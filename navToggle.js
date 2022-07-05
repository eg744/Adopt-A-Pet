export function mobileNavToggle() {
   document.addEventListener('DOMContentLoaded', () => {
      const primaryNavBar = document.querySelector('.primary-navigation');

      const navBarToggle = document.querySelector('.mobile-nav-toggle');

      // navBarToggle.addEventListener('click', toggleNavBar);

      navBarToggle.addEventListener('click', () => {
         console.log('hello');
         // Icon animation
         navBarToggle.classList.toggle('change');

         const isVisible = primaryNavBar.getAttribute('data-visible');
         if (isVisible === 'false') {
            primaryNavBar.setAttribute('data-visible', true);
            navBarToggle.setAttribute('aria-expanded', true);
         } else {
            primaryNavBar.setAttribute('data-visible', false);
            navBarToggle.setAttribute('aria-expanded', false);
         }
      });
   });
}

module.exports = mobileNavToggle;
