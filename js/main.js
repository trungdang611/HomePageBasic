const modal = document.querySelector(".modal-section");
const loginBtn = document.querySelector(".header-actions-login");
const clostLoginModal = document.querySelector(".login-content-close");

loginBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

clostLoginModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  //   console.log(event.target);
};
