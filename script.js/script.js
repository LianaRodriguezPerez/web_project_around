    
    // Editar y cerrar perfil
    
    let editar=document.querySelector('.content__profile-button');
    let ventana=document.querySelector('.popup');
    let cerrar=document.querySelector('.popup__container-close');

    editar.addEventListener('click', function(){
        ventana.classList.add('active');
    }
);
    cerrar.addEventListener('click' , function(){
        ventana.classList.remove('active');

    });
    // cerrar perfil despues de guardar
    function savePopUp() {
        ventana.classList.remove('active');
      }

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
    formElement.addEventListener("submit", handleProfileFormSubmit);




