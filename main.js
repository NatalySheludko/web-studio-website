//=============== NAV LINK ==================//
const navLinks = document.querySelectorAll(".navigation-link");
const burgerNavLinks = document.querySelectorAll(".nav-link");

function handleLinkActivation(links) {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

handleLinkActivation(navLinks);
handleLinkActivation(burgerNavLinks);

//=============== BACKDROP ==================//
const backdrop = document.querySelector(".backdrop");
const backdropOpenBtn = document.querySelector(".order-button");
backdropOpenBtn.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});
const backdropCloseBtn = document.querySelector(".modal-close-btn");
backdropCloseBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    backdrop.classList.remove("is-open");
    burgerMenu.classList.remove("is-open");
  }
});

const burgerMenu = document.querySelector(".burger-navbar");
const burgerMenuOpenBtn = document.querySelector(".burger-menu");
burgerMenuOpenBtn.addEventListener("click", () => {
  burgerMenu.classList.add("is-open");
});
const burgerMenuCloseBtn = document.querySelector(".burger-navbar-btn-close");
burgerMenuCloseBtn.addEventListener("click", () => {
  burgerMenu.classList.remove("is-open");
});

const STORAGE_KEY = "order-form-state";
const orderForm = document.querySelector(".text-input-fields");
const orderName = document.querySelector("#user-name");
const orderEmail = document.querySelector("#email");
const orderPhone = document.querySelector("#phone");
const orderComment = document.querySelector("#user-comment");

orderForm.addEventListener("input", fullLocalStorage);

function fullLocalStorage() {
  const data = {
    nameData: orderName.value.trim(),
    emailData: orderEmail.value.trim(),
    phoneData: orderPhone.value.trim(),
    txtData: orderComment.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

orderForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const nameData = orderName.value.trim();
  const emailData = orderEmail.value.trim();
  const phoneData = orderPhone.value.trim();
  const txtData = orderComment.value.trim();

  orderForm.reset();
}

document.addEventListener("DOMContentLoaded", getFormData);

function getFormData() {
  const storageData = localStorage.getItem(STORAGE_KEY);
  if (storageData) {
    const data = JSON.parse(storageData);
    orderName.value = data.nameData;
    orderEmail.value = data.emailData;
    orderPhone.value = data.phoneData;
    orderComment.value = data.txtData;
  }
}

