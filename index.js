const today = "Monday";
let tomorrow = "";

// solution with IF ELSE
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
    console.log(`Tomorow will be ${tomorow}`);
}

