/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    var out = "";
    if (this.readyState == 4 && this.status == 200) {
        var file = JSON.parse(this.responseText);
        for(var x in file){
            out += "<tr><td>" + file[x].date + "</td><td> " + file[x].title.rendered + "</td></tr>";
            document.getElementById("Visualizza").innerHTML = out;
        }
    }
};
xmlhttp.open("GET", "https://seahawkmedia.com/wp-json/wp/v2/posts?search=Drupal", true);
xmlhttp.send();
//https://www.desrparcosud.it/wp-json/wp/v2/posts?search=AMAP
//https://seahawkmedia.com/wp-json/wp/v2/posts?search=Drupal*/
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var file = JSON.parse(this.responseText);
        var table = document.getElementById("Visualizza");  
        table.innerHTML = "";
        for (var x in file) {
            var tr = document.createElement("tr");
            var tdDate = document.createElement("td");
            tdDate.textContent = file[x].date;
            tr.appendChild(tdDate);
            var tdTitle = document.createElement("td");
            tdTitle.textContent = file[x].title;
            tr.appendChild(tdTitle);
            table.appendChild(tr);
        }
    }
};
xmlhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5", true);
xmlhttp.send();
