var bredde = window.prompt("Skriv inn Bredde");
var høyde = window.prompt("Skriv inn Høyde");
for (var i = 1; 1 <= høyde; i++) {
    for (var j = 1; j <= bredde; j++) {
        if (i == 1 || i == høyde) document.write("*");
        else if (j == 1 || j == bredde) document.write("*");
        else {
            document.write("&nbsp;");
            document.write("&nbsp;");
        }
    }
    document.write("<br>");
}

// koden er fra Serdar Durmus