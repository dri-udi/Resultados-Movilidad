const formCisco = document.forms['formXamai'];
const scriptURLXamai = "https://script.google.com/macros/s/AKfycby7drYNRqZEUFLXWbIPyrqdBMXldJ7SmyP1RbDK-CqvQTz8jNs76uU-8cj2P0yBd-cU5Q/exec";
let Boleta = document.getElementById("Boleta");
let corpo = document.getElementsByClassName("error");
let NombreC = document.getElementsByClassName("NombreC");
let Resultado = document.getElementsByClassName("Resultado");
let Serror = document.getElementsByClassName("Serror");
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})
var CLIENT_ID = '597887852858-u8pk3n3pfb4ric6i3pc4u44bk0orm1dl.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDnWKtRqL8SeTs3eP0Z9w2pxK_oItxKMVc';

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

formCisco.addEventListener('submit', e => {
    e.preventDefault()
    const Nboleta = Boleta.value;
    var valBoleta = -1;
    var row;
    corpo.innerHTML = "";
    corpo.className = "error";
     gapi.client.sheets.spreadsheets.values.get({
         spreadsheetId: '1Vm8Fczb4z4FY0tobUqs_hoAREBN6HMVs6kSnztEWfcU',
         range: 'A2:10',
     }).then(function(response) {
         var range = response.result;
         if (range.values.length > 0) {
             for (i = 0; i < range.values.length; i++) {
                row = range.values[i];
                 // Print columns A and E, which correspond to indices 0 and 4.
                if (Nboleta == row[2]) {
                    valBoleta = 1;
                    
                    break;
                }
                
             }

             if (valBoleta == 1) {
                NombreC[0].innerHTML = row[0]+' ' + row[1];
                Resultado[0].innerHTML = row[3];
                Cambio();
             } else {
                Serror[0].innerHTML ='<i class="fas fa-exclamation-triangle fa-10x Red"></i> <br> <span class="error">Boleta no registrada</span>'
               ShowError();
             }

         } else {
             console.log('No data found.');
         }
     }, function(response) {
         console.log('Error: ' + response.result.error.message);
     });





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