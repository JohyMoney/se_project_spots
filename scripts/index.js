const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/0-photo-by-john-moeses-bauan-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

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


const addCardModal = document.querySelector("#new-post-modal");
const addCardCloseBtn = addCardModal.querySelector(".modal__close-btn");
const addCardFormEl = addCardModal.querySelector(".modal__form");
const captionInputEl = addCardFormEl.querySelector("#card-caption-input");
const linkInputEl = addCardFormEl.querySelector("#card-link-input");

const previewModal = document.querySelector("#preview-modal");
const previewCloseBtn = previewModal.querySelector(".close")
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");
const cardDeleteButton = document.querySelector(".card__delete-button");

const captionInput = document.querySelector("#post-title-input");
const postImageInput = document.querySelector("#post-image-input");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
  closeModal(newPostModal);
});

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEL = cardElement.querySelector(".card__title");
  const cardImageEL = cardElement.querySelector(".card__image");

  cardImageEL.src = data.link;
  cardImageEL.alt = data.name;
  cardTitleEL.textContent = data.name;
  const cardLikeBtbEl = cardElement.querySelector(".card__like-button");
  cardLikeBtbEl.addEventListener("click", function () {
    cardLikeBtbEl.classList.toggle("card__like-button_active");
  });


  cardDeleteButton.addEventListener("click", (evt) => {
    evt.target.closest(".card").remove();
  });

  cardImageEL.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

closeModal(previewModal);

previewCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
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

addCardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const inputValues = {
    name: captionInput.value,
    link: postImageInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardList.prepend(cardElement);

  addCardModal.classList.remove("modal_is-opened");
});

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardList.append(cardElement);
});
