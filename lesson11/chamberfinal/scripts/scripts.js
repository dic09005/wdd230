
//Text banner
const d = new Date();
let day1 = d.getDay()
// console.log(day1)

if (day1 == 1 || day1 ==2) {
  let banner1 = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  // console.log(banner1)
  document.getElementById("banner1").innerHTML = banner1;
}




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

