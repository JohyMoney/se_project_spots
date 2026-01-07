const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileForm = editProfileModal.querySelector(".modal__form");

const addCardForm = document.querySelector("#new-post-modal .modal__form");
const ditProfileNameInput = editProfileModal.querySelector("#profile-name-input");

const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEL = document.querySelector(".profile__name");
const profiledescriptionEl = document.querySelector(".profile__description");


editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEL.textContent;
  editProfileDescriptionInput.value = profiledescriptionEl.textContent;
  editProfileModal.classList.add("modal__is-opened");}
);

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});
console.log("Close button found:", editProfileCloseBtn);

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal__is-opened");}
);

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal__is-opened");});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEL.textContent = editProfileNameInput.value;
  profiledescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal__is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault(evt);
  newPostModal.classList.remove("modal__is-opened");
}

addCardForm.addEventListener("submit", handleAddCardSubmit);


editProfileForm.addEventListener("submit", handleEditProfileSubmit);