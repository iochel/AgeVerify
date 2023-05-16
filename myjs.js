function getAge() {
     askAge = prompt("What is the age of your favorite artist?");
     ageverify = parseInt(askAge);
    return ageverify;
}

function agecompare(ageverify) {
    if (ageverify < 25) {
        alert("They're " + ageverify + " old and they're younger than Google");
    }

    else if (ageverify > 25) {
        alert("They're " + ageverify + " old and they're older than Google");
    }

    else if (ageverify == 25) {
        alert("They're " + ageverify + " old and they're as old as Google");
    }

    else {
        alert("Please enter a correct input.")
        getAge()
    }

}
    Age = getAge();
    console.log(agecompare(Age));


function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = "";
    document.getElementById('result').innerHTML = "";
}

function calculate(event) {
    if (event && event.keyCode !== 13) {
        return;
    }
    var input = document.getElementById('display').value;
    if (input) {
        var result = eval(input);
        document.getElementById('display').value = result;
        document.getElementById('result').innerHTML = "Result: " + result;
    } else {
        document.getElementById('result').innerHTML = "";
    }
}
