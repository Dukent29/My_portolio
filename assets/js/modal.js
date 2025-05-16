// Get modal elements
const modal = document.getElementById("contactModal");
const openModalBtns = document.querySelectorAll(".openModalBtn");
const closeModalBtn = document.querySelector(".close");

// Open modal
openModalBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.menu i');
  const sideMenu = document.getElementById('sideMenu');
  const closeSideMenu = document.querySelector('.close-side-menu');

  menuIcon.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeSideMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  // Optional: Close side menu when clicking outside
  window.addEventListener('click', (e) => {
    if (sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
      sideMenu.classList.remove('open');
    }
  });
});