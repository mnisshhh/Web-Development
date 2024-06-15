function myFunction() {
    const x = document.getElementById("number").value;

    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Please enter number b/w 1 to 10"
    } else {
        text = `Input is OK, Entered value: ${x}`
    }
    document.getElementById("result").innerHTML = text;
}