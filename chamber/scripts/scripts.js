function toggleMenu() {

    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')

x.onclick = toggleMenu;

let day = date.getDay();
if (day == 1 || day ==2) {
    document.getElementById('banner').innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}