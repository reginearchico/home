function caricaDati() {
    var file = new XMLHttpRequest();
    file.open("GET", "https://raw.githubusercontent.com/reginearchico/home/refs/heads/main/JSON/Anagrafica.json", true);
    file.send();
    file.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonDoc = JSON.parse(file.responseText);
            mostraInfo(jsonDoc);
        }
    };
    document.getElementById("formIngr").style.width = "0px";
    document.getElementById("formIngr").style.visibility = "hidden";
    document.getElementById("risForm").style.visibility = "visible";
}

function mostraInfo(ogg) {
    var tabella = document.createElement("table");
    var colonnaIndici = ["Immagine", "Nome", "Cognome", "Eta", "Indirizzo", "Citta", "Telefono 1", "Telefono 2", "Sport1", "Sport 2"];
    var colonnaTit = document.createElement("tr");
    for(let i = 0; i < colonnaIndici.length; i++) {
        var righe = document.createElement("th");
        righe.appendChild(document.createTextNode(colonnaIndici[i]));
        colonnaTit.appendChild(righe);
    }
    tabella.appendChild(colonnaTit);
    for (let i = 0; i < 3; i++) {
        var colonna = document.createElement("tr");
        var rigaNome = document.createElement("td");
        rigaNome.appendChild(document.createTextNode(ogg.Nomi[i].Nome));
        var rigaCognome = document.createElement("td");
        rigaCognome.appendChild(document.createTextNode(ogg.Cognomi[i].Cognome));
        var rigaEta = document.createElement("td");
        rigaEta.appendChild(document.createTextNode(ogg.Eta[i].Eta));
        var rigaIndirizzo = document.createElement("td");
        rigaIndirizzo.appendChild(document.createTextNode(ogg.Indirizzi[i].Indirizzo ));
        var rigaCitta = document.createElement("td");
        rigaCitta.appendChild(document.createTextNode(ogg.Citta[i].Citta));
        var rigaTelefono1 = document.createElement("td");
        if (ogg.Telefoni[i].Telefono1 !== undefined) {
            telefono = ogg.Telefoni[i].Telefono1;
        }
        rigaTelefono1.textContent = telefono;
        var rigaTelefono2 = document.createElement("td");
        if (ogg.Telefoni[i].Telefono2 !== undefined) {
            telefono = ogg.Telefoni[i].Telefono2;
        }
        rigaTelefono2.textContent = telefono;
        var rigaSport1 = document.createElement("td");
        if (ogg.Sport[i].Sport1 !== undefined) {
            sport = ogg.Sport[i].Sport1;
        }
        rigaSport1.textContent = sport;
        var rigaSport2 = document.createElement("td");
        if (ogg.Sport[i].Sport2 !== undefined) {
            sport = ogg.Sport[i].Sport2;
        }
        rigaSport2.textContent = sport;
        var img = document.createElement("td");
        let bottone = document.createElement("img");
        if (ogg.Immagini[i].Immagine !== undefined) {
            bottone.src = ogg.Immagini[i].Immagine;
        } else {
            bottone.src = "";
        }        
        bottone.classList.add("immagineProfilo")
        bottone.addEventListener("click", function() {
            console.log("Bottone premuto");
        });
        var rigaBottone = document.createElement("td");
        rigaBottone.appendChild(bottone);
        colonna.appendChild(rigaBottone);
        colonna.appendChild(rigaNome);
        colonna.appendChild(rigaCognome);
        colonna.appendChild(rigaEta);
        colonna.appendChild(rigaIndirizzo);
        colonna.appendChild(rigaCitta);
        colonna.appendChild(rigaTelefono1);
        colonna.appendChild(rigaTelefono2);
        colonna.appendChild(rigaSport1);
        colonna.appendChild(rigaSport2);
        tabella.appendChild(colonna);
    }
    document.getElementById("stringaJSON").appendChild(tabella);
}
