const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editprofileclosebtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileForm = editProfileModal.querySelector(".modal__form");

const addCardForm = document.querySelector("#new-post-modal .modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const linkInput = editProfileModal.querySelector("#profile-description-input");


const editProfileNmaeInput = editProfileModal.querySelector("#profile-name-input");
const editprofiledescriptionInput =editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEL = document.querySelector(".profile__name");
const profiledescriptionEl = document.querySelector(".profile__description");


editProfileBtn.addEventListener("click", function () {
  editProfileNmaeInput.value = profileNameEL.textContent;
  editprofiledescriptionInput.value = profiledescriptionEl.textContent;
  editProfileModal.classList.add("modal__is-opened");}
);

editprofileclosebtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");}
);

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal__is-opened");}
);

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal__is-opened");});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEL.textContent = editProfileNameInput.value;
  profiledescriptionEl.textContent = editprofiledescriptionInput.value;
  editProfileModal.classList.remove("modal__is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  // Add card creation logic here
  newPostModal.classList.remove("modal__is-opened");
}

addCardForm.addEventListener("submit", handleAddCardSubmit);


editProfileForm.addEventListener("submit", handleEditProfileSubmit);