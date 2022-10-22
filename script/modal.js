let modalLogin01 = document.getElementById('modalContent');


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelectorAll('.closeBtnModal');

const modalValid = document.getElementById("modalValid");
const modalLogin = document.getElementById("modalContent");

// event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalValid.className = "modalValidOff";
}

//close modal
function closeModal() {
  modalbg.style.display = "none";
  modalLogin.classList.remove("modalLoginOff");
}


/**launch modal valid login */
function loginValid () {
  if (modalValid.className === "modalValidOff") {
    modalValid.className += " modalValidOn";
    modalLogin.className += " modalLoginOff";
  }
  else {
    modalValid.className = "modalValidOff";
    modalLogin.classList.remove("modalLoginOff");
  }
}
