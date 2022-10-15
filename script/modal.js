let modalLogin01 = document.getElementById('modalContent');


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelectorAll('.closeBtnModal');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//delte modal
function closeModal() {
  modalbg.style.display = "none";
}

function resetModal(){
  modalLogin01.classList.remove("modalAccepted");
  modalLogin01.removeChild();
}

/**make modal valid login */
function loginValid () {
  const textLoginAccepted = '<p class="textLoginAccepted" >Merci pour </br>votre inscription</p>';
  const buttonLoginClose = ' <button class="btn-submit button">fermer</button>';
  const ModalAccepted = textLoginAccepted + buttonLoginClose;
  
  modalLogin01.className += " modalAccepted";
  modalLogin01.insertAdjacentHTML('afterbegin', ModalAccepted);
}


/***component**/

