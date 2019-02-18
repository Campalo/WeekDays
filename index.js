let today = "Monday";
let tomorrow = "";

// fonction qui récupère l'id de l'élément TodayName et assigne sa valeur à la variable today, qui prend alors une nouvelle valeur
// puis déclenche la fonction tomorrowDay pour attribuer une valeur à la variable tomorrow
function changeDay() {
    today = document.getElementById('todayName').value;
    console.log(`Today is ${today}`);
    tomorrowDay();
}

function tomorrowDay() {
    // solution with SWITCH
    switch (today) {
        case "Monday":
            tomorrow = "Tuesday";
            break;
        case "Tuesday":
            tomorrow = "Wednesday";
            break;
        case "Wednesday":
            tomorrow = "Thursday";
            break;
        case "Thursday":
            tomorrow = "Friday";
            break;
        case "Friday":
            tomorrow = "Saturday";
            break;
        case "Saturday":
            tomorrow = "Sunday";
            break;
        case "Sunday":
            tomorrow = "Monday";
            break;
        default:
            console.log("Unknown day")
    }

    if (tomorrow !== "") {
        console.log(`Tomorrow will be ${tomorrow}`);
    }

}

// solution with IF ELSE
/*
if (today === "Monday") {
    tomorrow = "Tuesday";
} else if (today === "Tuesday") {
    tomorrow = "Wednesday";
} else if (today === "Wednesday") {
    tomorrow = "Thursday"
} else if (today === "Thursday") {
    tomorrow = "Friday";
} else if (today === "Friday") {
    tomorrow = "Saturday";
} else if (today === "Saturday") {
    tomorrow = "Sunday";
} else if (today === "Sunday") {
    tomorrow = "Monday";
} else {
    console.log("Unknow day");
}

if (tomorrow !== "") {
    console.log(`Tomorrow will be ${tomorow}`);
}
*/