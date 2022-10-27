const formXamai = document.forms['formXamai'];
const scriptURLXamai = "https://script.google.com/macros/s/AKfycbyNa921I7o-8nxFFnVGEB9iGVrhnzrB8vJbKnq0mh-k9lHfiGNIrO-Vp79KqpTbPbXeiw/exec";

var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})


formXamai.addEventListener('submit', e => {
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