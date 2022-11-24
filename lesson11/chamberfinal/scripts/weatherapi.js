//Most of this is from Brother Blazzards Lab. Parts of windchill formula from dev.to Chris Bongers

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windChill = document.querySelector('#windchill');
const windSpeed = document.querySelector('#windspeed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Rigby&appid=f6cd64304c91eee8c1c9d4ad1012ca4d&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

// capitalize function for weather condition

function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// Display the Results

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capitalize(desc);

    temp = currentTemp
    // console.log(temp)

    ws = windSpeed
    // console.log(ws)

    let windchill = "";

    if (temp <= 50 & ws > 3) {
        windchill = Math.round(35.74 + (0.6215 * temp) -
            (35.75 * (ws ** 0.16)) +
            (0.4275 * temp * (ws ** 0.16)));
        }          
    else {
        windchill = "N/A";
    }
    windChill.textContent = `${windchill} °F`;
    //console.log(windchill)
}
