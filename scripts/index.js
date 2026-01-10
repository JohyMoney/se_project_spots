const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileNameInput = document.querySelector("#profile-name-input");
const editProfileDescriptionInput = document.querySelector("#profile-description-input");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const addCardForm = document.querySelector("#new-post-modal .modal__form");
const newpostbtn = document.querySelector(".profile__add-btn");
const newpostmodal = document.querySelector("#new-post-modal");
const newpostclosebtn = newpostmodal.querySelector(".modal__close-btn");

const profilenameeL = document.querySelector(".profile__name");
const profiledescriptionel = document.querySelector(".profile__description");



editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profilenameeL.textContent;
  editProfileDescriptionInput.value = profiledescriptionel.textContent;
  editProfileModal.classList.add("modal__is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
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
  editProfileModal.classList.remove("modal__is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const postTitleInput = document.querySelector("#post-title-input");
  const postImageInput = document.querySelector("#post-image-input");
  console.log("Title:", postTitleInput.value);
  console.log("Image URL:", postImageInput.value);
  newpostmodal.classList.remove("modal__is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  newpostmodal.classList.remove("modal__is-opened");
}


editProfileForm.addEventListener("submit", handleEditProfileSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);


