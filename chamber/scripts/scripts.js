function toggleMenu() {

    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')

x.onclick = toggleMenu;

let memo = date.getDay();
if (memo == 1 | meet ==2) {
    let banner = document.getElementById("banner");
    banner.style.display = "block";
    banner.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}