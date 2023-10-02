function abrirPDF(carnetURL) {
    window.open(carnetURL, '_blank');
}
const nosotrostaButton = document.getElementById('nosotros');
nosotrostaButton.addEventListener('click', function () {
    abrirPDF('https://drive.google.com/file/d/1S17x8IqmzwOj8TJq6Qdp0juljjezkRw7/view?usp=drive_link');
});

const juanButton = document.getElementById('juan');
juanButton.addEventListener('click', function () {
    abrirPDF('https://drive.google.com/file/d/1G10QPSNzts15QuCJU9yCtvC6jM68HQjK/view?usp=drive_link');
});

const sebasButton = document.getElementById('sebas');
sebasButton.addEventListener('click', function () {
    abrirPDF('https://drive.google.com/file/d/12XKHT8wzFXv_xlT_D1B5WwEnKiDHwt3B/view?usp=drive_link');
});

const pendonButton = document.getElementById('pendon');
pendonButton.addEventListener('click', function () {
    abrirPDF('https://drive.google.com/file/d/1eYBZ3nClGoZojTagXqhBShF3ryk9Ka_F/view?usp=drive_link');
});

const tarjetasButton = document.getElementById('tarjeta');
tarjetasButton.addEventListener('click', function () {
    abrirPDF('https://drive.google.com/file/d/1g-N6YGbZKpx-3HgmH0IQfFzAlusFLnwc/view?usp=drive_link');
});

const revistaButton = document.getElementById('revista');
revistaButton.addEventListener('click', function () {
    abrirPDF('https://heyzine.com/flip-book/d71f70ab3a.html');
});