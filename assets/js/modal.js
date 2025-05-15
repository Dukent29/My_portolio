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