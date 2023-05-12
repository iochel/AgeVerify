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
    