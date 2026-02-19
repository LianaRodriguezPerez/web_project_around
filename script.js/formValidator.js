export function handleFormSubmit(formElement, createCard, contenedorPhoto) {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputName = formElement.querySelector(".popup__addCard-title").value;
    const inputUrl = formElement.querySelector(".popup__addCard-link").value;

    if (inputName && inputUrl) {
      const nuevaImagen = {
        link: inputUrl,
        name: inputName,
      };

      createCard(nuevaImagen, contenedorPhoto);
      formElement.reset();
    } else {
      alert("Por favor completa ambos campos.");
    }
  });
}
