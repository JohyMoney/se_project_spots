const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const addCardForm = document.querySelector("#new-post-modal .modal__form");
const newpostbtn = document.querySelector(".profile__add-btn");
const newpostmodal = document.querySelector("#new-post-modal");
const newpostclosebtn = newpostmodal.querySelector(".modal__close-btn");

const profilenameeL = document.querySelector(".profile__name");
const profiledescriptionel = document.querySelector(".profile__description");



editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});

editprofilebtn.addEventListener("click", function () {
  editprofilenameinput.value = profilenameeL.textContent;
  editprofiledescriptioninput.value = profiledescriptionel.textContent;
  editprofilemodal.classList.add("modal__is-opened");
});

editprofileclosebtn.addEventListener("click", function () {
  editprofilemodal.classList.remove("modal__is-opened");
});

newpostbtn.addEventListener("click", function () {
  newpostmodal.classList.add("modal__is-opened");
});

newpostclosebtn.addEventListener("click", function () {
  newpostmodal.classList.remove("modal__is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profilenameeL.textContent = editProfileNameInput.value;
  profiledescriptionel.textContent = editProfileDescriptionInput.value;
  editprofilemodal.classList.remove("modal__is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  newpostmodal.classList.remove("modal__is-opened");
}



