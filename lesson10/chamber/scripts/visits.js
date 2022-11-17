
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

// initialize display elements
const daysBetweenVisits = document.querySelector(".dbvisits");

// get the stored value in localStorage
let timeBetweenVisits = Number(window.localStorage.getItem("visits"));

// Determine the time between days

localStorage.setItem("timestamp", todayDisplay);

const lastVisit = getCookie('lastVisitTime');
const now = Date.now();
if (lastVisit) {
   const hoursSinceLastTime = Math.ceil((parseInt(lastVisit) - todayDisplay) / 3600);
   alert(`It's been ${hoursSinceLastTime} hour(s) since you last visited us.`);
}
setCookie('lastVisitTime', todayDisplay);