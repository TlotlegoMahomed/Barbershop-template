AOS.init({
  duration: 800,
  once: true
});
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (!toggleButton || !menu) return;

  // Toggle menu on click
  toggleButton.addEventListener('click', function () {
    menu.classList.toggle('show');
    toggleButton.classList.toggle('open');
  });
});
