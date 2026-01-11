const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileNameInput = document.querySelector("#profile-name-input");
const editProfileDescriptionInput = document.querySelector("#profile-description-input");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const addCardForm = document.querySelector("#new-post-modal .modal__form");
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
 editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const postTitleInput = document.querySelector("#post-title-input");
  const postImageInput = document.querySelector("#post-image-input");
  console.log("Title:", postTitleInput.value);
  console.log("Image URL:", postImageInput.value);
  newPostModal.classList.remove("modal_is-opened");
}


editProfileForm.addEventListener("submit", handleEditProfileSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);


