const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileNameInput = document.querySelector("#profile-name-input");
const editProfileDescriptionInput = document.querySelector("#profile-description-input");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const addCardForm = document.querySelector("#new-post-modal .modal__form");
const NewPostBtn = document.querySelector(".profile__add-btn");
const NewPostModal = document.querySelector("#new-post-modal");
const NewPostCloseBtn = NewPostModal.querySelector(".modal__close-btn");

const ProfileNameEl = document.querySelector(".profile__name");
const ProfileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = ProfileNameEl.textContent;
  editProfileDescriptionInput.value = ProfileDescriptionEl.textContent;
  editProfileModal.classList.add("modal__is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});

NewPostBtn.addEventListener("click", function () {
  NewPostModal.classList.add("modal__is-opened");
});

NewPostCloseBtn.addEventListener("click", function () {
  NewPostModal.classList.remove("modal__is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  ProfileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal__is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const postTitleInput = document.querySelector("#post-title-input");
  const postImageInput = document.querySelector("#post-image-input");
  console.log("Title:", postTitleInput.value);
  console.log("Image URL:", postImageInput.value);
}


editProfileForm.addEventListener("submit", handleEditProfileSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);


