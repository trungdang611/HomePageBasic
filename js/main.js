const modal = document.querySelector(".modal-section");
// const loginBtn = document.querySelector(".header-actions-login");
// const subscribeBtn = document.querySelector(".header-actions-subscribe");
// const modalLogin = document.querySelector(".modal-login");
// const modalDiscover = document.querySelector(".modal-discover");
// const closetLoginModal = document.querySelector(".login-content-close");
// const closetDiscoverModal = document.querySelector(".modal-discover-close");

// loginBtn.addEventListener("click", () => {
//   modal.style.display = "flex";
//   modalLogin.style.display = "flex";
// });

// subscribeBtn.addEventListener("click", () => {
//   modal.style.display = "flex";
//   modalDiscover.style.display = "flex";
// });

// closetLoginModal.addEventListener("click", () => {
//   modal.style.display = "none";
//   if (modalLogin.style.display == "flex") {
//     modalLogin.style.display = "none";
//   }
// });

// closetDiscoverModal.addEventListener("click", () => {
//   modal.style.display = "none";
//   if (modalDiscover.style.display == "flex") {
//     modalDiscover.style.display = "none";
//   }
// });

// window.onclick = (event) => {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     modalLogin.style.display = "none";
//     modalDiscover.style.display = "none";
//   }
// };

// viet ham thuc hien dong/mo modal

function openModal(modalElement) {
  modal.classList.add("active");
  modalElement.classList.add("active");
}

function closeModal(modalElement) {
  modal.classList.remove("active");
  modalElement.classList.remove("active");
}

// khai bao element can target de thuc hien dong/mo modal
// open modal
document
  .querySelector(".header-actions-login")
  .addEventListener("click", () =>
    openModal(document.querySelector(".modal-login"))
  );
document
  .querySelector(".header-actions-subscribe")
  .addEventListener("click", () => {
    openModal(document.querySelector(".modal-discover"));
  });

// close modal
document
  .querySelector(".login-content-close")
  .addEventListener("click", () =>
    closeModal(document.querySelector(".modal-login"))
  );
document
  .querySelector(".modal-discover-close")
  .addEventListener("click", () => {
    closeModal(document.querySelector(".modal-discover"));
  });

// close the modal when clicking outside its content
modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal(document.querySelector(".modal-login"));
    closeModal(document.querySelector(".modal-discover"));
  }
});
