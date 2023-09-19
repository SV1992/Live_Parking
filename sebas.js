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
    abrirPDF('https://drive.google.com/file/d/1vOzMFg6MovRPZ5VLh68lQbJPixOiPyCl/view?usp=drive_link');
});

const tarjetasButton = document.getElementById('tarjeta');
tarjetasButton.addEventListener('click', function () {
    abrirPDF('https://drive.google.com/file/d/12obq57dB1fn5e00vXIvtv-ezP-ThNaZ7/view?usp=drive_link');
});

const revistaButton = document.getElementById('revista');
revistaButton.addEventListener('click', function () {
    abrirPDF('https://drive.google.com/file/d/12obq57dB1fn5e00vXIvtv-ezP-ThNaZ7/view?usp=drive_link');
});