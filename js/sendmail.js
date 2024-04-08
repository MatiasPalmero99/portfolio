const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_d50qrsb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR';
      Swal.fire({
        title: "!Correo enviado exitosamente!",
        icon: "success"
      });
    }, (err) => {
      btn.value = 'ENVIAR';
      Swal.fire({
        title: "Ocurrió un error al enviar el correo.",
        text: JSON.stringify(err),
        icon: "warning"
      });
    });
});