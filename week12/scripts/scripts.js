
// Timestamp and Year in Footer

date = new Date().getFullYear();
document.querySelector("#year").innerHTML = date
document.querySelector("#timestamp").innerHTML = document.lastModified;

// Carlsbad Weather API

// select HTML elements in the document

const currentTemp = document.querySelector('#temp');
const description = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const tomorrow1forecast = document.querySelector('#forecast1');
const tomorrow2forecast = document.querySelector('#forecast2');
const tomorrow3forecast = document.querySelector('#forecast3');

// Call API

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=13bd9f5bd8932fa638cfb51d568ff3a9&units=imperial';

//Brother Blazzard's async function to check response

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

// Display the Results

function  displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}°</strong>`;
  description.innerHTML = `<strong>${weatherData.list[0].weather[0].description}</strong>`;
  humidity.innerHTML = `<strong>${weatherData.list[0].main.humidity.toFixed(0)}%</strong>`;
  tomorrow1forecast.innerHTML = `High of <strong>${weatherData.list[1].main.temp.toFixed(0)}°</strong>`;
  tomorrow2forecast.innerHTML = `High of <strong>${weatherData.list[2].main.temp.toFixed(0)}°</strong>`;
  tomorrow3forecast.innerHTML = `High of <strong>${weatherData.list[3].main.temp.toFixed(0)}°</strong>`;

}



