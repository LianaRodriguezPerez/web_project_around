const openWindowProfile = document.querySelector(".content__profile-button");
const windowPopupProfile = document.querySelector(".popup");
const closeWindowProfile = document.querySelector(".popup__container-close");

const openWindowPhoto = document.querySelector(".content__profile-editar");
const closeWindowPhoto = document.querySelector(".popup__addCard-close");
const WindowPhoto = document.querySelector(".popup__add");

// Abrir ventanas
openWindowProfile.addEventListener("click", () => {
  windowPopupProfile.style.display = "block";
});

openWindowPhoto.addEventListener("click", () => {
  WindowPhoto.style.display = "block";
});

// Cerrar ventanas con botón
closeWindowProfile.addEventListener("click", () => {
  windowPopupProfile.style.display = "none";
});

closeWindowPhoto.addEventListener("click", () => {
  WindowPhoto.style.display = "none";
});

// Cerrar al hacer clic en la superposición
windowPopupProfile.addEventListener("click", (e) => {
  if (e.target === windowPopupProfile) {
    windowPopupProfile.style.display = "none";
  }
});

WindowPhoto.addEventListener("click", (e) => {
  if (e.target === WindowPhoto) {
    WindowPhoto.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    windowPopupProfile.style.display = "none";
    WindowPhoto.style.display = "none";
  }
});

const formProfile = document.querySelector(".popup__container-formulario");
const nameProfile = document.querySelector(".content__profile-name");
const aboutProfile = document.querySelector(".content__profile-parrafo");
const nameInputProfile = document.querySelector(".popup__container-name");
const aboutInputProfile = document.querySelector(".popup__container-about");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInputProfile.value;
  const aboutValue = aboutInputProfile.value;

  nameProfile.textContent = nameValue;
  aboutProfile.textContent = aboutValue;
  windowPopupProfile.style.display = "none";
}
formProfile.addEventListener("submit", handleProfileFormSubmit);

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const contenedorPhoto = document.querySelector(".photos");

function createInitialCards() {
  initialCards.forEach(createCard);
}

function createCard(card) {
  const userTemplate = document.querySelector("#photos-template").content;
  const userElement = userTemplate.querySelector(".photo").cloneNode(true);

  userElement.querySelector(".photos__link").src = card.link;
  userElement.querySelector(".photos__link").alt = card.name;

  userElement.querySelector(".photos__name-image").textContent = card.name;

  const likeButton = userElement.querySelector(".photo__like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("photo__like__active");
  });

  const deleteButton = userElement.querySelector(".photo__delete");
  deleteButton.addEventListener("click", () => {
    userElement.remove();
  });

  contenedorPhoto.prepend(userElement);
}
const formularioVentanaModal = document.querySelector(".popup__add-form");
const crearPhoto = document.querySelector(".popup__addCard-save");

formularioVentanaModal.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputName = document.querySelector(".popup__addCard-title").value;
  const inputUrl = document.querySelector(".popup__addCard-link").value;

  if (inputName && inputUrl) {
    // Crear un nuevo objeto de imagen
    const nuevaImagen = { link: inputUrl, name: inputName };

    initialCards.unshift(nuevaImagen);

    createCard(nuevaImagen);

    WindowPhoto.style.display = "none";
    formularioVentanaModal.reset();
  } else {
    alert("Por favor, completa ambos campos: nombre y URL de la imagen.");
  }
});
createInitialCards();

const cardContainer = document.querySelector(".photos");
const ventanaImage = document.querySelector(".popup__image");
const imagenAmpliada = document.querySelector(".popup__image-photo");
const captionAmpliada = document.querySelector(".popup__image-caption");
const cerrarImagen = document.querySelector(".popup__image-close");

// Abrir la ventana emergente al hacer clic en una imagen
cardContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("photos__link")) {
    const imageSrc = target.src;
    const imageAlt = target.alt;

    imagenAmpliada.src = imageSrc;
    imagenAmpliada.alt = imageAlt;
    captionAmpliada.textContent = imageAlt;

    ventanaImage.style.display = "flex";
  }
});

// Cerrar la ventana emergente
cerrarImagen.addEventListener("click", () => {
  ventanaImage.style.display = "none";
});

// Cerrar al hacer clic fuera del contenido
ventanaImage.addEventListener("click", (event) => {
  if (event.target === ventanaImage) {
    ventanaImage.style.display = "none";
  }
});
