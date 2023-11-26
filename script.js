// script.js

// Function to toggle the 'responsive' class on the navigation
function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('responsive');
  }
  
  // Event listener for the menu button
  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.c');
    menuButton.addEventListener('click', toggleNav);
  });
  
