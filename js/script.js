

let menuIcon = document.querySelector('#menu-icon');
let navbar1 = document.querySelector('.navbar1');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar1.classList.toggle('active');
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
    navbar1.classList.remove('active');
}

const confirmAction = () => {
    confirm('Il download è iniziato');
}

var map = L.map('map', {
    center: [45.40094868008341, 10.980874906170742],
    zoom: 12,
    minZoom: 12,
    scrollWheelZoom: false
});

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: '../images/green-shirt.png',

    iconSize: [17, 17],
});

var humana = L.marker([45.439657826025446, 10.989385885567623], { icon: greenIcon }).addTo(map);
var babyBazar = L.marker([45.44638656384127, 10.95347652565059], { icon: greenIcon }).addTo(map);
var fleaSecondHand = L.marker([45.4432570309139, 11.0202712744057], { icon: greenIcon }).addTo(map);
var mercatinoVintage = L.marker([45.435861814640454, 10.985868162274183], { icon: greenIcon }).addTo(map);
var emmaus = L.marker([45.355522212473424, 10.812831596306825], { icon: greenIcon }).addTo(map);																								// map.setMaxBounds(map.getBounds());
var emmaus = L.marker([45.355522212473424, 10.812831596306825], { icon: greenIcon }).addTo(map);
var ferrari = L.marker([45.415370202223166, 10.974248809803347], { icon: greenIcon }).addTo(map);
var comeNuovo = L.marker([45.421908208929025, 10.97079790980377], { icon: greenIcon }).addTo(map);
var dongi = L.marker([45.187005065552896, 11.241231911639678], { icon: greenIcon }).addTo(map);
var mobili = L.marker([45.423413311310384, 10.992084315352235], { icon: greenIcon }).addTo(map);
var ruota = L.marker([45.413520558441, 10.957143596310184], { icon: greenIcon }).addTo(map);
var secondamano = L.marker([45.25388331210874, 11.127796840479187], { icon: greenIcon }).addTo(map);
var minime = L.marker([45.34956063139137, 10.879336180963955], { icon: greenIcon }).addTo(map);
var usariusa = L.marker([45.43477895959975, 11.011583165626266], { icon: greenIcon }).addTo(map);
var ghedetuto = L.marker([45.40290419383276, 11.02220673493933], { icon: greenIcon }).addTo(map);
var secondamanina = L.marker([45.439279079446486, 11.100865920596746], { icon: greenIcon }).addTo(map);
var mercato = L.marker([45.40837395195338, 10.980803330685113], { icon: greenIcon }).addTo(map);


const babyBazarText = "<h1><b style='font-size: 1.7rem;'>Baby bazar Verona</b></h1><br><p style='font-size: 1.5rem;'>via: C.so Milano, 114/A, 37138 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='https://www.google.com/maps/place/BABYBAZAR+Verona+Borgo+Milano/@45.4461306,10.9485627,16z/data=!3m1!4b1!4m6!3m5!1s0x4781e18d2150b701:0x20497d3b6940330a!8m2!3d45.4461307!4d10.9534336!16s%2Fg%2F11b6gdhy9f?entry=ttu' target='_blank'>Maps</a>";
const humanaText = "<h1><b style='font-size: 1.7rem;'>Humana store</b></h1><br><p style='font-size: 1.5rem;'>Piazza Pasque Veronesi, 5a, 37121 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='https://www.google.com/maps/place/Humana+Vintage+Verona/@45.4396354,10.9868134,17z/data=!3m1!4b1!4m6!3m5!1s0x477f5f908225e553:0x49a1d337c799e083!8m2!3d45.4396354!4d10.9893883!16s%2Fg%2F11p0w66v07?entry=ttu' target='_blank'>Maps</a>";
const fleaSecondHandText = "<h1><b style='font-size: 1.7rem;'>FLEA Secondhand Upcycling</b></h1><br><p style='font-size: 1.5rem;'>via: Via Cesare Betteloni, 42D, 37131 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='https://www.google.com/maps/place/FLEA+Secondhand+Upcycling/@45.4432754,11.0176498,16z/data=!3m1!4b1!4m6!3m5!1s0x477f5f3e6c77dfaf:0x566ccfda3aa8c08c!8m2!3d45.4432754!4d11.0202247!16s%2Fg%2F11t1rhwjht?entry=ttu' target='_blank'>Maps</a>";
const mercatinoVintageText = "<h1><b style='font-size: 1.7rem;'>Mercatino Vintage Verona (Vintage Fe)</b></h1><br><p style='font-size: 1.5rem;'>via: Via Guglielmo Marconi, 62/A, 37122 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='https://www.google.com/maps/place/Mercatino+Vintage+Verona+(Vintage+Fe)/@45.4309918,10.9613805,13.96z/data=!4m6!3m5!1s0x477f5f5ca66d63c7:0xcc64ee34ee6bd851!8m2!3d45.4358653!4d10.985866!16s%2Fg%2F11c2ppdjn5?entry=ttu' target='_blank'>Maps</a>";
const emmausText = " <h1><b style='font-size: 1.7rem;'>	Mercatino solidale Emmaus Villafranca</b></h1><br><p style='font-size: 1.5rem;'>Localita' Emmaus 1, Villafranca	</p><br><a style=' cursor: pointer; font-size: 1.5rem;'href='	https://www.google.com/maps/place/Mercatino+solidale+-+Comunità+Emmaus+Villafranca/@45.355345,10.8102567,17z/data=!3m1!4b1!4m6!3m5!1s0x4781ddb241625f07:0xbff5b4f9d924165b!8m2!3d45.3553413!4d10.8128316!16s%2Fg%2F11b5pjm27r?hl=it&entry=ttu	 target='_blank'>	Maps	</a>";
const ferrariText = " <h1><b style='font-size: 1.7rem;'>Mercatino Dell'Usato Di Ferrari Dino</b></h1><br><p style='font-size: 1.5rem;'>	Viale dell' Industria, 38/D, 37135 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;'href='	https://www.google.com/maps/place/Mercatino+Dell'Usato+Di+Ferrari+Dino/@45.4151579,10.971293,17.25z/data=!4m6!3m5!1s0x477f5f78ebc11285:0x34b546729fa68447!8m2!3d45.4152422!4d10.974281!16s%2Fg%2F1td70vpg?hl=it&entry=ttu'	 target='_blank'>	Maps	</a>";
const comeNuovoText = " <h1><b style='font-size: 1.7rem;'>Come Nuovo</b></h1><br><p style='font-size: 1.5rem;'>	Via Carlo Alberto, 1, 37136 Verona VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='	https://www.google.com/maps/place/Comenuovo/@45.4217538,10.9682552,17z/data=!3m1!4b1!4m6!3m5!1s0x477f5f7d13702a77:0xd0892a1faf1ee6f5!8m2!3d45.4217501!4d10.9708301!16s%2Fg%2F1ptx91hfb?hl=it&entry=ttu'	 target='_blank'>	Maps	</a>";
const dongiText = " <h1><b style='font-size: 1.7rem;'>il DONGI Second Life Shop	</b></h1><br><p style='font-size: 1.5rem;'>	Via Calcara, 119, 37053 Cerea VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='	https://www.google.com/maps/place/il+DONGI+Second+Life+Shop/@45.1868501,11.2386141,17z/data=!3m2!4b1!5s0x477f72bcdf77bd33:0xda4a4920a9183c08!4m6!3m5!1s0x477f72bce7f2baa9:0x954177a95e918dd0!8m2!3d45.1868463!4d11.241189!16s%2Fg%2F1tdm2k_y?hl=it&entry=ttu'	 target='_blank'>	Maps	</a>";
const mobiliText = " <h1><b style='font-size: 1.7rem;'>Mercatino Mobil Discount	</b></h1><br><p style='font-size: 1.5rem;'>	Via Basso Acquar, 69, 37135 Verona VR</p><br><a style='cursor: pointer; font-size: 1.5rem;' href='	https://www.google.com/maps/place/Mercatino+Mobil+Discount/@45.4231949,10.9893163,16z/data=!3m1!4b1!4m6!3m5!1s0x477f5f6d1a66203f:0x764ec6b489fa6cac!8m2!3d45.4231912!4d10.9918912!16s%2Fg%2F1234lrq_4?hl=it&entry=ttu'	 target='_blank'>	Maps	</a>";
const ruotaText = " <h1><b style='font-size: 1.7rem;'>Mercatino La Ruota dell'Usato	</b></h1><br><p style='font-size: 1.5rem;'>	Via Germania, 19, 37136 Verona VR</p><br><a style='cursor: pointer; font-size: 1.5rem;' href='	https://www.google.com/maps/place/Mercatino+La+Ruota+dell'Usato/@45.413336,10.9545687,17z/data=!3m2!4b1!5s0x4781e1cca2052471:0x7e99f425abbb49fc!4m6!3m5!1s0x4781e1cca40244c7:0x33387d398bc7faf2!8m2!3d45.4133323!4d10.9571436!16s%2Fg%2F11b6_49gc9?hl=it&entry=ttu'	 target='_blank'>	Maps	</a>";
const secondamanoText = " <h1><b style='font-size: 1.7rem;'>Mercatino Usato Bimbi SECONDAMANINA	</b></h1><br><p style='font-size: 1.5rem;'>	Via S. Pierino, 42, 37051 Bovolone VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;'href='	https://www.google.com/maps/place/Mercatino+Usato+Bimbi+SECONDAMANINA/@45.2536378,11.1251683,17z/data=!3m1!4b1!4m6!3m5!1s0x477f6f0e607924e1:0x4f071175ad45795d!8m2!3d45.2536341!4d11.1277432!16s%2Fg%2F11c60j6qqp?hl=it&entry=ttu'	 target='_blank'>	Maps	</a>";
const minimeText = " <h1><b style='font-size: 1.7rem;'>	Minimè</b></h1><br><p style='font-size: 1.5rem;'>Via Pompei, 8A, 37064 Povegliano Veronese VR</p><br><a style=' cursor: pointer; font-size: 1.5rem;'href='	https://www.google.com/maps/place/Minimè/@45.3494211,10.8768042,17z/data=!3m2!4b1!5s0x4781de59b770ac6f:0x8089d288b4171099!4m6!3m5!1s0x4781df091a1e15e1:0x338bc529a8844523!8m2!3d45.3494174!4d10.8793791!16s%2Fg%2F11sm_ns0rx?hl=it&entry=ttu'	 target='_blank'>	Maps	</a>";
const usariusaText = " <h1><b style='font-size: 1.7rem;'>mercatino usato Usa e Riusa</b></h1><br><p style='font-size: 1.5rem;'>	Via Nicolò Giolfino, 2, 37133 Verona VR	</p><br><a style=' cursor: pointer; font-size: 1.5rem;'href='	https://www.google.com/maps/place/mercatino+usato+Usa+e+Riusa/@45.4345493,11.0090941,17z/data=!3m1!4b1!4m6!3m5!1s0x477f5f24b824bfcd:0xcb475fc855d04322!8m2!3d45.4345456!4d11.011669!16s%2Fg%2F1tw_m25z?hl=it&entry=ttu'	 target='_blank'>	Maps	</a>";
const ghedetutoText = " <h1><b style='font-size: 1.7rem;'>Mercatino dell'usato Ghedetuto </b></h1><br><p style='font-size: 1.5rem;'> Strada Corte Garofolo, 10, 37057 Verona VR	</p><br><a style=' cursor: pointer; font-size: 1.5rem;'href='	https://www.google.com/maps/place/Mercatino+dell'usato+Ghedetuto+OPERAZIONE+MATO+GROSSO/@45.4027196,11.0198035,17z/data=!3m1!4b1!4m6!3m5!1s0x477f5e5a7499bfef:0xb8092bf97f0ae5b4!8m2!3d45.4027159!4d11.0223784!16s%2Fg%2F11bwh5rqml?hl=it&entry=ttu'	 target='_blank'>	Maps	</a>";
const secondamaninaText = " <h1><b style='font-size: 1.7rem;'>	SECONDAMANINA Est	</b></h1><br><p style='font-size: 1.5rem;'>	Via Adamello, 8/D, 37036 San Martino Buon Albergo VR	</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='	https://www.google.com/maps/place/Secondamanina+Verona/@45.4081947,10.8262077,11z/data=!4m10!1m2!2m1!1sSecondamanina+Mercatino+Usato+Bimbi!3m6!1s0x477f5f71e9554b5b:0xe6b9f78a694269b4!8m2!3d45.4256064!4d11.1002097!15sCiNTZWNvbmRhbWFuaW5hIE1lcmNhdGlubyBVc2F0byBCaW1iaSIDiAEBWiUiI3NlY29uZGFtYW5pbmEgbWVyY2F0aW5vIHVzYXRvIGJpbWJpkgEFc3RvcmXgAQA!16s%2Fg%2F1hc28_tql?entry=ttu	 target='_blank'>	Maps	</a>";
const mercatoText = " <h1><b style='font-size: 1.7rem;'>	Mercatino Usato Verona	</b></h1><br><p style='font-size: 1.5rem;'>	Via Angelo Messedaglia, 8 b, 37135 Verona VR	</p><br><a style=' cursor: pointer; font-size: 1.5rem;' href='	https://www.google.com/maps/place/Mercatino+usato+verona/@45.4080576,10.9807175,15z/data=!4m6!3m5!1s0x477f5fc321a5187f:0x3757f24c81763a4c!8m2!3d45.4079256!4d10.9806489!16s%2Fg%2F11h3c48vgz?entry=ttu	 target='_blank'>	Maps	</a>";


babyBazar.bindPopup(babyBazarText);
humana.bindPopup(humanaText);
fleaSecondHand.bindPopup(fleaSecondHandText);
mercatinoVintage.bindPopup(mercatinoVintageText);
emmaus.bindPopup(emmausText);
emmaus.bindPopup(emmausText);
ferrari.bindPopup(ferrariText);
comeNuovo.bindPopup(comeNuovoText);
dongi.bindPopup(dongiText);
mobili.bindPopup(mobiliText);
ruota.bindPopup(ruotaText);
secondamano.bindPopup(secondamanoText);
minime.bindPopup(minimeText);
usariusa.bindPopup(usariusaText);
ghedetuto.bindPopup(ghedetutoText);
secondamanina.bindPopup(secondamaninaText);
mercato.bindPopup(mercatoText);









// var map = new L.map('map', {  });
