function print() {

    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);
    var evenNums = "<br>Partall:<br>";

    for (i = start; i <= end; i++) {

        if (i % 2 == 0) {
            evenNums += i + "<br>";
        }
    }

    document.getElementById("result").innerHTML = evenNums;
}