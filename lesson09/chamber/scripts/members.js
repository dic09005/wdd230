// Add Directory cards/list


const requestURL = 'chamber/json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject['members'];
    member.forEach(displayMember);
  });

  /* gridButton = document.getElementById("grid");
  listButton = document.getElementById("list");
  display = document.getElementById("member-data")

  gridButton.addEventListener("click", () => {
      display.classList.add("member-grid");
      display.classList.remove("member-list");
  });

  listButton.addEventListener("click", () => {
      display.classList.remove("member-grid");
      display.classList.add("member-list");
  }); */


function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let memberlogo = document.createElement('img');
    let membername = document.createElement('h2');
    let memberaddress = document.createElement('p');
    let memberphonenumber = document.createElement('a');
    let memberwebURL = document.createElement('a');
    let membershiplevel = document.createElement('a');
    let memberSince = document.createElement('a');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    // h2.textContent = prophet.name + ' ' + prophet.lastname;
    membername.textContent = member.membername
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    memberlogo.setAttribute('src', member.memberlogo);
    memberlogo.setAttribute('alt', membername);
    memberlogo.setAttribute('loading', 'lazy');
    /* memberlogo.width = 150;*/

    memberaddress.textContent = `Address ${member.memberaddress}`
    memberphonenumber.textContent = `Phone Number ${member.memberphonenumber}`
    memberwebURL.textContent = `Web Site ${member.memberwebURL}`
    membershiplevel.textContent = `Level ${member.membershiplevel}`
    memberSince.textContent = `Member Since: ${member.memberSince}`  

    // Add/append the section(card) with the h2 element
    card.appendChild(membername);
    card.appendChild(memberaddress);
    card.appendChild(memberphonenumber);
    card.appendChild(memberwebURL);
    card.appendChild(memberSince);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}