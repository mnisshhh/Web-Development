function calculate() {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const results = document.querySelector("#results");

    result = (weight / ((height*height) / 10000)).toFixed(2);

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a correct height ${result}`, document.body.style.backgroundColor = "red";
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a correct weight ${result}`, document.body.style.backgroundColor = "purple";
    }
     else {
        results.innerHTML = `Your BMI is ${result}`, document.body.style.backgroundColor = "green";
    }
}