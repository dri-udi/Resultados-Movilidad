const formXamai = document.forms['formXamai'];
const scriptURLXamai = "https://script.google.com/macros/s/AKfycbw_-jeH1k8z0e4v-pmJkVEPlJ4MujTLD3nTSn4oa2hahrnlOtUTTYzv2E1DqWYa3sKo/exec";

var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})
var CLIENT_ID = '471138515780-20m05f7glrkmn016vh9aca9v18tg9upq.apps.googleusercontent.com';
var API_KEY = 'AIzaSyB319n1GzvpuWWCXIcwAl8-iQU_JQchv7Q';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function(error) {
        console.log(JSON.stringify(error, null, 2));
    });
}


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