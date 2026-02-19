export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photo")
      .cloneNode(true);

    return template;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".photos__link").src = this._link;
    this._element.querySelector(".photos__link").alt = this._name;
    this._element.querySelector(".photos__name-image").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".photo__like");
    const deleteButton = this._element.querySelector(".photo__delete");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("photo__like__active");
    });

    deleteButton.addEventListener("click", () => {
      this._element.remove();
    });
  }
}
