// Add Directory cards/list. Most of this is from the Prophets assignment


const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const members = jsonObject["data"];
      members.forEach(displayMembers);
  });

  gridButton = document.getElementById("grid");
  listButton = document.getElementById("list");
  display = document.getElementById("member-data")
  display.classList.add("membergrid");

  gridButton.addEventListener("click", () => {
      display.classList.add("membergrid");
      display.classList.remove("memberlist");
  });

  listButton.addEventListener("click", () => {
      display.classList.remove("membergrid");
      display.classList.add("memberlist");
  });


function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let memberlogo = document.createElement('img');
    let membername = document.createElement('h2');
    let memberaddress = document.createElement('q');
    let memberphonenumber = document.createElement('p');
    let memberwebURL = document.createElement('a');
    let membershiplevel = document.createElement('p');
    let memberSince = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    // h2.textContent = prophet.name + ' ' + prophet.lastname;
    membername.textContent = member.membername
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    memberlogo.setAttribute('src', member.memberlogo);
    memberlogo.setAttribute('alt', membername);
    memberlogo.setAttribute('loading', 'lazy');
    memberlogo.width = 200;

    memberaddress.textContent = `Address: ${member.memberaddress}`
    memberphonenumber.textContent = `Phone Number: ${member.memberphonenumber}`
    memberwebURL.textContent = `Click Here Visit Our Web Site`;
    memberwebURL.href = member.memberwebURL;

    membershiplevel.textContent = `Level: ${member.membershiplevel}`
    memberSince.textContent = `Member Since: ${member.memberSince}`  

    // Add/append the section(card) with the h2 element
    
    card.appendChild(membername);
    card.appendChild(memberlogo);
    card.appendChild(memberaddress);
    card.appendChild(memberphonenumber);
    card.appendChild(memberwebURL);
    card.appendChild(membershiplevel);
    card.appendChild(memberSince);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}