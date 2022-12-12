
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
        console.log(data); 
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
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
    description.innerHTML = `<strong>${weatherData.list[0].weather[0].description}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.list[0].main.humidity.toFixed(0)}</strong>`;
    tomorrow1forecast.innerHTML = `<strong>${weatherData.list[1].main.temp.toFixed(0)}</strong>`;
    tomorrow2forecast.innerHTML = `<strong>${weatherData.list[2].main.temp.toFixed(0)}</strong>`;
    tomorrow3forecast.innerHTML = `<strong>${weatherData.list[3].main.temp.toFixed(0)}</strong>`;

}


// Fruit Options for Fresh Page

// Get Fruit Info

let dropdown1 = document.getElementById('fruit1');
dropdown1.length = 0;

let dropdown2 = document.getElementById('fruit2');
dropdown2.length = 0;

let dropdown3 = document.getElementById('fruit3');
dropdown3.length = 0;

let defaultOption1 = document.createElement('option');
defaultOption1.text = 'Please Select A Fruit';
defaultOption1.value = '';
defaultOption1.setAttribute("selected", "")
defaultOption1.setAttribute("disabled", "")

let defaultOption2 = document.createElement('option');
defaultOption2.text = 'Please Select A Fruit';
defaultOption2.value = '';
defaultOption2.setAttribute("selected", "")
defaultOption2.setAttribute("disabled", "")

let defaultOption3 = document.createElement('option');
defaultOption3.text = 'Please Select A Fruit';
defaultOption3.value = '';
defaultOption3.setAttribute("selected", "")
defaultOption3.setAttribute("disabled", "")

dropdown1.add(defaultOption1);
dropdown2.add(defaultOption2);
dropdown3.add(defaultOption3);

dropdown1.selectedIndex = 0;
dropdown2.selectedIndex = 0;
dropdown3.selectedIndex = 0;

const requestURL = 'JSON/data.json';

const request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.onload = function(jsonObject) {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option1;
    let option2;
    let option3;
    // Iterate through Json list and get options for drop down
    for (let i = 0; i < data.length; i++) {
      option1 = document.createElement('option');
      option1.text = data[i].name;
      option1.value = data[i].id;

      option2 = document.createElement('option');
      option2.text = data[i].name;
      option2.value = data[i].id;

      option3 = document.createElement('option');
      option3.text = data[i].name;
      option3.value = data[i].id;

      dropdown1.add(option1);
      dropdown2.add(option2);
      dropdown3.add(option3);
    }
    // console.log(data) // Verify options

   } else {
  }
     
}

request.send();

// On Button Click Record Selections

function selectResponse() {
	let a = document.getElementById('fruit1');
	let text1 = a.options[a.selectedIndex].text;
  let choice1 = text1;
  let id_1 = a.options[a.selectedIndex].value;

  let b = document.getElementById('fruit2');
	let text2 = b.options[b.selectedIndex].text;
  let choice2 = text2;
  let id_2 = b.options[b.selectedIndex].value;

  let c = document.getElementById('fruit3');
	let text3 = c.options[c.selectedIndex].text;
  let choice3 = text3;
  let id_3 = c.options[c.selectedIndex].value;

  console.log(choice1)
  console.log(id_1)
  console.log(choice2)
  console.log(id_2)
  console.log(choice3)
  console.log(id_3)



  const requestURL2 = 'json/data2.json';

  async function infoFetch() {
    try {
      const response = await fetch(requestURL2);
      if (response.ok) {
        const info = await response.json();
        console.log(info); 
        displayReceipt(info);

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  infoFetch();




// Display the Results

const first_name = document.querySelector('#first_name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const choice_1 = document.querySelector('#choice1');
const choice_2 = document.querySelector('#choice2');
const choice_3 = document.querySelector('#choice3');
const total_carbs = document.querySelector('#total_carbs');
const total_protein = document.querySelector('#total_protein');
const total_fat = document.querySelector('#total_fat');
const total_calories = document.querySelector('#total_calories');
const total_sugar = document.querySelector('#total_sugar');



function  displayReceipt(receiptInfo) {
  first_name.innerHTML = document.querySelector('#fname').value;
  email.innerHTML = document.querySelector('#e_mail').value;
  phone.innerHTML = document.querySelector('#telephone').value;
  choice_1.innerHTML = `${text1}`;
  choice_2.innerHTML = `${text2}`;
  choice_3.innerHTML = `${text3}`;

  console.log(id_1)
  console.log(id_2)
  console.log(id_3)
  console.log(choice1)
  console.log(choice2)
  console.log(choice3)

  

  function getInfo(choice, id) {
    const list = requestURL2;
    let name = choice;
    return list.name[name];

  }

  console.log(getInfo(choice1, id_1))

  total_calories.innerHTML = `<strong>${receiptInfo.data[0].nutritions.calories}</strong>`;
  total_carbs.innerHTML = `<strong>${receiptInfo.data[0].nutritions.carbohydrates}</strong>`;
  total_protein.innerHTML = `<strong>${receiptInfo.data[0].nutritions.protein}</strong>`;
  total_fat.innerHTML = `<strong>${receiptInfo.data[0].nutritions.fat}</strong>`;
  total_sugar.innerHTML = `<strong>${receiptInfo.data[0].nutritions.sugar}</strong>`;
}
}

// Order Submission

/*
const b = document.getElementById('order_now')

function receiptInfo() {
  let receipt = document.createElement('section');
  let first_name = document.createElement('p');
  let email = document.createElement('p');
  let phone = document.createElement('p');
  let choice1 = document.createElement('p');
  let choice2 =  document.createElement('p');
  let choice3 = document.createElement('p');
  let total_carbs = document.createElement('p');
  let total_protein = document.createElement('p');
  let total_fat = document.createElement('p');
  let total_calories = document.createElement('p');
  let total_sugar = document.createElement('p');

  for (let i = 0; i < data.length; i++) {
    let carbs = data[i].nutritions.carbohydrates;
    let protein = data[i].nutritions.protein
    let fat = data[i].nutritions.fat
    let calories = data[i].nutritions.calories
    let sugar = data[i].nutritions.sugar
    console.log(carbs)
    console.log(protein)
    console.log(fat)
    console.log(calories)
    console.log(sugar)
  }
} 
*/