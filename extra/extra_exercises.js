
function fun() {
    let a = prompt("Type your name :)");
    if (a != null) {
        document.getElementById("para").innerHTML = a + " has " + a.length + " characters in it :)";
    }
}