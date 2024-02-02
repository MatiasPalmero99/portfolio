const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_n8t16zl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR';
    //   alert('Enviado!');
    Swal.fire({
        title: "!Correo enviado exitosamente!",
        icon: "success"
      });
    }, (err) => {
      btn.value = 'ENVIAR';
    //   alert(JSON.stringify(err));
      Swal.fire({
        title: "Ocurrió un error al enviar el correo.",
        text: JSON.stringify(err),
        icon: "warning"
      });
    });
});