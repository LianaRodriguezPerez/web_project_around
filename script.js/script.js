    let editar=document.querySelector('.content__profile-button');
    let ventana=document.querySelector('.popup');
    let cerrar=document.querySelector('.popup__container-close');
    let formElement=document.querySelector('.popup__container-formulario')

    editar.addEventListener('click', function(){
        ventana.classList.add('active');
    }
);
    cerrar.addEventListener('click' , function(){
        ventana.classList.remove('active');

    });

