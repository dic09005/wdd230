date = new Date().getFullYear();
document.querySelector("#year").innerHTML = date
document.querySelector("#timestamp").innerHTML = document.lastModified;

function toggleMenu() {

    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')

x.onclick = toggleMenu;

const now = new Date()
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
document.querySelector('date').innerHTML = fullDate;