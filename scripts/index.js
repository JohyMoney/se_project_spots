const editprofilebtn = document.querySelector(".profile__edit-btn");
const editprofilemodal = document.querySelector("#edit-profile-modal");
const editprofileclosebtn = editprofilemodal.querySelector("#modal__close-btn");

const editProfileForm = editprofilemodal.querySelector(".modal__form");
const addCardForm = document.querySelector(".new-post-modal .modal__form");
const editProfileNameInput = editprofilemodal.querySelector(".profile-name-input");
const editProfileDescriptionInput = editprofilemodal.querySelector(".profile-description-input");

const newpostbtn = document.querySelector(".profile__new-post-btn");
const newpostmodal = document.querySelector(".new-post-modal");
const newpostclosebtn = newpostmodal.querySelector(".modal__close-btn");

const profilenameeL = document.querySelector(".profile__name");
const profiledescriptionel = document.querySelector(".profile__description");


editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profilenameeL.textContent;
  editProfileDescriptionInput.value = profiledescriptionel.textContent;
  editprofilemodal.classList.add("modal__is-opened");
});

editprofileclosebtn.addEventListener("click", function () {
  editprofilemodal.classList.remove("modal__is-opened");
});
console.log("Close button found:", editprofileclosebtn);

newpostbtn.addEventListener("click", function () {
  newpostmodal.classList.add("modal__is-opened");
});

newpostclosebtn.addEventListener("click", function () {
  newpostmodal.classList.remove("modal__is-opened");});
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

addCardForm.addEventListener("submit", handleAddCardSubmit);


editProfileForm.addEventListener("submit", handleEditProfileSubmit);