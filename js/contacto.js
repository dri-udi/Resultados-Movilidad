const formCisco = document.forms['formXamai'];
const scriptURLXamai = "https://script.google.com/macros/s/AKfycbw3UdnCxHq8FgqNOsUdq_UQH9RwfFO5BYRkpzEls9ILk1332JAbwGsfUopTLPLgKOWp/exec";
let Nombre = document.getElementById("Nombre");
let UA = document.getElementById("UA/CI");
let Correo = document.getElementById("Correo");
let Comentario = document.getElementById("dudas");
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})

formCisco.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURLXamai, {
        method: 'POST',
        body: new FormData(formXamai)
    })
    .then(response => Cambio())
    .catch(error => console.error('Error!', error.message))


})

function Cambio() {
    document.getElementById("xamai").reset();

    // relatedTarget
    myModal.show()
}
function ShowError() {
    document.getElementById("xamai").reset();
    myModal.show()
}