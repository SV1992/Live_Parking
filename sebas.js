function abrirPDF(carnetURL) {
    window.open(carnetURL, '_blank');
}

const juanButton = document.getElementById('juan');
juanButton.addEventListener('click', function () {
    abrirPDF('https://drive.google.com/file/d/15iJZXoi-hWcuXdF64aEKc0ujl3U3o6nO/view?usp=drive_link');
});

const sebasButton = document.getElementById('sebas');
sebasButton.addEventListener('click', function () {
    abrirPDF('https://drive.google.com/file/d/1vhQCx9CF6lX5QLYJmQr07MON_46Kx5qb/view?usp=drive_link');
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
    abrirPDF('https://drive.google.com/file/d/1Y0_g-AORSn6Fn8EKLJ35dhdoj901igN9/view?usp=drive_link');
});