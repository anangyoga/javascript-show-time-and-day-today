const output = document.getElementById("output");
const date = document.getElementById("date");

let today = new Date();
let day = today.getDay();
let nDate = today.toLocaleString();

switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

output.innerHTML = day;
date.innerHTML = nDate;
