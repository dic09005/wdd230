// initialize display elements
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numberOfVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numberOfVisits !== 0) {
  visitsDisplay.textContent = numberOfVisits;
} else {
  visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numberOfVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numberOfVisits);
// show todays date.
let todayDisplay = Date.now();

/////////////////////////////////////////////////////////////////////////////

// Adding the Days Between Visits



let dateofvisit = new Date();

window.localStorage.setItem("date", dateofvisit.getTime());

let date1 = window.localStorage.getItem("date");

let date2 = new Date();

let Difference_In_Time = date2.getTime() - date1;

let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

console.log(Difference_In_Days)

document.querySelector(".dbvisits").innerHTML = Difference_In_Days;
