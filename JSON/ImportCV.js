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
}

function mostraInfo(ogg) {
    var stringaJSON = document.getElementById("stringaJSON");
    var risForm = document.getElementById("risForm");
    risForm.style.visibility = "visible";
    stringaJSON.innerHTML = "<h2>Dettagli Anagrafici</h2>";
    var ul = document.createElement("ul");
    for (var i = 0; i < ogg.Nomi.length; i++) {
        var li = document.createElement("li");
        var nome = ogg.Nomi[i].Nome || "Non disponibile";
        var cognome = ogg.Cognomi[i].Cognome || "Non disponibile";
        var eta = ogg.Eta[i] ? ogg.Eta[i].Eta : "Non disponibile";
        var citta = ogg.Citta[i] ? ogg.Citta[i].Citta : "Non disponibile";
        var telefono = ogg.Telefoni[i] ? ogg.Telefoni[i].Telefono1 : "Non disponibile";
        var sport = ogg.Sport[i] ? ogg.Sport[i].Sport1 + " / " + ogg.Sport[i].Sport2 : "Non disponibile";
        var immagine = ogg.Immagini[i] ? ogg.Immagini[i].Immagine : "Non disponibile";
        li.innerHTML = `<strong>Nome:</strong> ${nome} <br>
                        <strong>Cognome:</strong> ${cognome} <br>
                        <strong>Età:</strong> ${eta} <br>
                        <strong>Città:</strong> ${citta} <br>
                        <strong>Telefono:</strong> ${telefono} <br>
                        <strong>Sport:</strong> ${sport} <br>
                        <strong>Immagine:</strong> <img src="${immagine}" alt="${nome}" width="100" height="100"><br><br>`;
        ul.appendChild(li);
    }
    stringaJSON.appendChild(ul);
}
