// JavaScript for menu toggle
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelectorAll('.menu-list li a'); // Select all menu links

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
});

// Close menu when a menu item is clicked
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
  });
});
