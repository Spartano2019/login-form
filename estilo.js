document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.background = '#fff';
});

document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText = 'background: linear-gradient(rgba(68, 41, 41, 0.8), rgba(52, 43, 43, 0.7)), url(img/fondo.jpg) center no-repeat; background-size: cover';
});

$('#registrar').on('click',function(){
 var correo=$('#email').val();
 var user=$('#user').val();
//var pass=$(this).val();
    if(user==="" || correo===""){
        Swal.fire({
            icon:'error',
            title:'Opps!!',
            text:'No pueden estar los campos vacios'
        });
    }else{
        var regex = new RegExp("^[a-zA-Z ]+$");
        if( !regex.test(user)){
            Swal.fire({
                icon:'warning',
                title:'Error',
                text:'usuario debe ser 10 digitos'
            });
        }else{
            if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo))){
                Swal.fire({
                    icon:'warning',
                    title:'Error',
                    text:'El correo debe contener un arroba y un punto'
                });
            }else{

        Swal.fire({
            title: 'Quieres guardar estos datos?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `No Guardar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Guardado!','Usuario: '+user+"<br>"+' Correo: '+correo, 'success')

            } else if (result.isDenied) {
              Swal.fire('Cambios no se guardaron', '', 'info')
            }
          });
        }
    }
    }
});


