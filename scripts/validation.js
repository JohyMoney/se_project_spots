const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};


const checkInputValidity = (formEl, inputEl, config) => {
  consterrorMSGID=inputEl.id + "-error";
  const errorMSGEl = formEl.querySelector("#" + errorMSGID);
  errorMSGEl.textContent = errorMSGEl;
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage, config);
  }
  else {
    hideInputError(formEl, inputEl, config);
  };

const showInputError = (formEl, inputEl, errorMessage, config) => {
  const errorMSGID = inputEl.id + "-error";
  const errorMSGEl = formEl.querySelector("#" + errorMSGID);
  inputEl.classList.add(config.inputErrorClass);
  errorMSGEl.textContent = errorMessage;
  errorMSGEl.style.visibility = "visible";
};

const hideInputError = (formEl, inputEl, config) => {
  const errorMSGID = inputEl.id + "-error";
  const errorMSGEl = formEl.querySelector("#" + errorMSGID);
  inputEl.classList.remove(config.inputErrorClass);
  errorMSGEl.textContent = "";
  errorMSGEl.style.visibility = "hidden";
};


};

const hasvalidInput = (inputList, config) => {
 return inputList.some((inputEl) => {
   return !inputEl.validity.valid;
 });
}

const toggleButtonState = (inputList, buttonEl, config) => {
  if (hasvalidInput(inputList, config)) {
    disablebutton(buttonEl, config);
  }
  else {
    buttonEl.disabled = false;
    modifyButtonState(buttonEl, true);
  }
}


const resetValidation = (formEl,inputList) => {
  inputList.forEach((input) => {
    hideInputError(formEl, input);
  });
  const buttonEl = formEl.querySelector(".modal__button");
  disablebutton(buttonEl);
}

const modifyButtonState = (buttonEl, isActive) => {
  if (isActive) {
    buttonEl.classList.remove("modal__button_disabled");
  }
  else {
    buttonEl.classList.add("modal__button_disabled");
  }
}

const disablebutton = (buttonEl) => {
  buttonEl.disabled = true;
  modifyButtonState(buttonEl, false);
}



const setEventListeners = (formEl, config) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const buttonElement = formEl.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement,config);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkInputValidity(formEl, inputEl,config);
      toggleButtonState(inputList, buttonElement,config);
    });

  });

}


const enableValidation = (config,) => {
  const formList = (document.querySelectorAll(config.formSelector));
  formList.forEach((formEl) => {
    setEventListeners(formEl, config);
  });

}
enableValidation(settings);


