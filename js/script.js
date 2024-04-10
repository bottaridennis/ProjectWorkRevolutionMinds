

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const confirmAction = () => {
    confirm('Il download è iniziato');
}

var map = L.map('map', {
    center: [45.44437043058254, 10.986797938604902],
    zoom: 14,
    minZoom: 14,
});

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: '../images/leaf-red.png',

    iconSize: [15, 38], 
});

var humana = L.marker([45.439657826025446, 10.989385885567623], { icon: greenIcon }).addTo(map);
var babyBazar = L.marker([45.44638656384127, 10.95347652565059], { icon: greenIcon }).addTo(map);
var bottegaDiGrazia = L.marker([45.44006793835619, 10.984590379628921], { icon: greenIcon }).addTo(map);
var MrGulliver = L.marker([45.43955768815567, 10.989024466271093], { icon: greenIcon }).addTo(map);
var fleaSecondHand = L.marker([45.4432570309139, 11.0202712744057], { icon: greenIcon }).addTo(map);
var mercatinoVintage = L.marker([45.435861814640454, 10.985868162274183], { icon: greenIcon }).addTo(map);
map.setMaxBounds(map.getBounds());

const babyBazarText = "<h1><b style='font-size: 1.7rem;'>Baby bazar Verona</b></h1><br><p style='font-size: 1.5rem;'>via: C.so Milano, 114/A, 37138 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='https://www.google.com/maps/place/BABYBAZAR+Verona+Borgo+Milano/@45.4461306,10.9485627,16z/data=!3m1!4b1!4m6!3m5!1s0x4781e18d2150b701:0x20497d3b6940330a!8m2!3d45.4461307!4d10.9534336!16s%2Fg%2F11b6gdhy9f?entry=ttu' target='_blank'>Maps</a>";
const humanaText = "<h1><b style='font-size: 1.7rem;'>Humana store</b></h1><br><p style='font-size: 1.5rem;'>Piazza Pasque Veronesi, 5a, 37121 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='https://www.google.com/maps/place/Humana+Vintage+Verona/@45.4396354,10.9868134,17z/data=!3m1!4b1!4m6!3m5!1s0x477f5f908225e553:0x49a1d337c799e083!8m2!3d45.4396354!4d10.9893883!16s%2Fg%2F11p0w66v07?entry=ttu' target='_blank'>Maps</a>";
const bottegaDiGraziaText = "<h1><b style='font-size: 1.7rem;'>La bottega di Grazia</b></h1><br><p style='font-size: 1.5rem;'>via: Rigaste S. Zeno, 11, 37123 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='https://www.google.com/maps/place/La+bottega+di+GRAZIA/@45.4400743,10.9820685,16z/data=!3m1!4b1!4m6!3m5!1s0x477f5f5aea3a469f:0xe5992508b7ae4743!8m2!3d45.4400743!4d10.9846434!16s%2Fg%2F1ptw79spm?entry=ttu' target='_blank'>Maps</a>";
const MrGulliverText = "<h1><b style='font-size: 1.7rem;'>Mr Gulliver</b></h1><br><p style='font-size: 1.5rem;'>via: Vicolo Morette, 10/B, 37121 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='https://www.google.com/maps/place/Mr.+Gulliver+Vintage+Store+Abbiglianento+Accessori+Scarpe/@45.43957,10.9863637,17z/data=!3m2!4b1!5s0x477f5f453841b489:0xad4231f7753e84a6!4m6!3m5!1s0x477f5f3770067737:0x7a4d0a086b955945!8m2!3d45.43957!4d10.9889386!16s%2Fg%2F1pp2tzs6f?entry=ttu' target='_blank'>Maps</a>";
const fleaSecondHandText = "<h1><b style='font-size: 1.7rem;'>FLEA Secondhand Upcycling</b></h1><br><p style='font-size: 1.5rem;'>via: Via Cesare Betteloni, 42D, 37131 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='https://www.google.com/maps/place/FLEA+Secondhand+Upcycling/@45.4432754,11.0176498,16z/data=!3m1!4b1!4m6!3m5!1s0x477f5f3e6c77dfaf:0x566ccfda3aa8c08c!8m2!3d45.4432754!4d11.0202247!16s%2Fg%2F11t1rhwjht?entry=ttu' target='_blank'>Maps</a>";
const mercatinoVintageText = "<h1><b style='font-size: 1.7rem;'>Mercatino Vintage Verona (Vintage Fe)</b></h1><br><p style='font-size: 1.5rem;'>via: Via Guglielmo Marconi, 62/A, 37122 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='https://www.google.com/maps/place/Mercatino+Vintage+Verona+(Vintage+Fe)/@45.4309918,10.9613805,13.96z/data=!4m6!3m5!1s0x477f5f5ca66d63c7:0xcc64ee34ee6bd851!8m2!3d45.4358653!4d10.985866!16s%2Fg%2F11c2ppdjn5?entry=ttu' target='_blank'>Maps</a>";

babyBazar.bindPopup(babyBazarText);
humana.bindPopup(humanaText);
bottegaDiGrazia.bindPopup(bottegaDiGraziaText);
MrGulliver.bindPopup(MrGulliverText);
fleaSecondHand.bindPopup(fleaSecondHandText);
mercatinoVintage.bindPopup(mercatinoVintageText);