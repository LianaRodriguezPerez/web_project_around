    
    // Editar y cerrar perfil
    
    let editar=document.querySelector('.content__profile-button');
    let ventana=document.querySelector('.popup');
    let cerrar=document.querySelector('.popup__container-close');

    // Editar y añadir image

    let addCard=document.querySelector('.content__profile-editar');
    let popupAdd=document.querySelector('.popup__add');
    let closeCard=document.querySelector('.popup__addCard-close');

    // function abrir ventana modal
    const addWindow = () => {
        popupAdd.style.display='block';
    };

     // function cerrar ventana modal
     const closeWindow = () => {
        popupAdd.style.display='none';
    };
    // function abrir ventana modal
    const editarWindow = () => {
        ventana.style.display='block';
    };
     // function cerrar ventana modal
     const cerrarWindow = () => {
        ventana.style.display='none';
    };
    
    //agregar eventos a los botones
    addCard.addEventListener('click', addWindow);
    editar.addEventListener('click', editarWindow);
    closeCard.addEventListener('click', closeWindow);
    cerrar.addEventListener('click', cerrarWindow);

     // Guardar perfil
     let formElement=document.querySelector('.popup__container-formulario');
     let profileName=document.querySelector('.content__profile-name');
     let profileAbout=document.querySelector('.content__profile-parrafo');
     let nameInput=document.querySelector('.popup__container-name');
     let jobInput=document.querySelector('.popup__container-about');

     function handleProfileFormSubmit(evt) {
        evt.preventDefault();

        let nameValue = nameInput.value;
        let jobValue = jobInput.value;

        if(nameValue && jobValue){
            profileName.textContent= nameValue;
            profileAbout.textContent=jobValue;
            formElement.reset();
            savePopUp()
        }
    }
      // Guardar imagen
      let formAddCard=document.querySelector('.popup__addCard-form');
      let placeNameCard=document.querySelector('.popup__addCard-title');
      let linkCard=document.querySelector('.popup__addCard-link');

 
      function handleProfileFormSubmit(evt) {
         evt.preventDefault();
 
         let nameValue = nameInput.value;
         let jobValue = jobInput.value;
 
         if(nameValue && jobValue){
             profileName.textContent= nameValue;
             profileAbout.textContent=jobValue;
             formElement.reset();
             savePopUp()
         }
     }

    formElement.addEventListener("submit", handleProfileFormSubmit);




