console.log("archivo vinculado");

const formElement = document.querySelector(".popup__form");
const formInput = formElement.querySelector(".popup__input");
console.log(formInput.id);
const formError = formElement.querySelector(`.${formInput.id}-error`);
console.log(formError, "ERROR");


const showInputError = (element) => {
  element.classList.add("form__input_type_error");
  console.log("muestra el error")
  formError.classList.add("form__input-error_active");
};
const hideInputError = (element) => {
  element.classList.remove("form__input_type_error");
  console.log("muestra el error")
  formError.classList.add("form__input-error_active");
};

const isValid = () =>{
  if(!formInput.validity.valid){
    showInputError(formInput);
  }else{
    hideInputError(formInput)
  }
}



formElement.addEventListener("submit", function (evt){
  evt.preventDefault();
  console.log("No se reinicia la pagina")
});

formInput.addEventListener("input", function (evt) {
  console.log(evt.target.validity);
  console.log("si funciona")
});

formInput.addEventListener("Input se ejecuta", isValid);




