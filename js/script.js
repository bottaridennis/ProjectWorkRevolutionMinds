

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
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

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

}


/* reload */

const confirmAction = () => {
    confirm('Il download è iniziato');
}

var map = L.map('map').setView([51.505, -0.09], 13);
map.panTo(new L.LatLng(45.4383842, 10.9916215));

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14,
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// humana vintage verona - piazza pasque veronesi 5a
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
var marker = L.marker([45.439657826025446, 10.989385885567623]).addTo(map);
var marker = L.marker([45.44638656384127, 10.95347652565059]).addTo(map);
var marker = L.marker([45.44039041724529, 10.984579039304952]).addTo(map);
var marker = L.marker([45.43999150837162, 10.989045907006982]).addTo(map);
var marker = L.marker([45.443433419631745, 11.020246164875502]).addTo(map);
var marker = L.marker([45.436256585622786, 10.985629985105835]).addTo(map);
var marker = L.marker([]).addTo(map);
