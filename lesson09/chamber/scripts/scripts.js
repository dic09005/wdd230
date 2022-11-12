
//Text banner
/*
let day = bdate.getDay();
if (day == 1 || day ==2) {
    let banner = document.getElementById("banner");
    if (banner != undefined) {
        banner.style.display = "block";
        banner.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    }
}
*/

// Date header and footer

date = new Date().getFullYear();
document.querySelector("#year").innerHTML = date
document.querySelector("#timestamp").innerHTML = document.lastModified;

function toggleMenu() {

    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')

x.onclick = toggleMenu;


const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// lazyload
// Brother Blazzard's codepin

let imagesToLoad = document.querySelectorAll("img[data-src]");

const ingOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"

};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
  };


  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
      
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

//visits
// initialize display elements
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let timeBetweenVisits = Number(window.localStorage.getItem("visits-ls"));


//Wind Chill

/* Function to Calculate Windchill*/ 
/* f = 35.74 + 0.6215t - 35.75s(0.16) + 0.4275ts(0.16) */

/* Wind Chill Specification Limits: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)." - U.S. National Weather Service */ 



const temp = parseFloat(28);
const wind = parseFloat(11.3);

document.querySelector("#temp").innerHTML = temp
document.querySelector("#wspeed").innerHTML = wind

let windchill = (35.74+(0.6215*temp)-(35.75*(wind**0.16))+(0.4275*temp*(wind**0.16)));

if (temp<=50) {
    if (wind>3) {
        document.querySelector("#windchill").innerHTML = windchill
        }
    }
    else {
        document.querySelector("#windchill").innerHTML = 'N/A'
    }

// Set date on Join page

/* NEED TO DO!!!!!!!!!!!!!!! */

if (URL == "join.html") {
    document.getElementById("application_date").value = date.getTime();
}

