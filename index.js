// let max = parseInt(prompt('masukan nilai maksimal'));
// while (!max) {
//     max = parseInt(prompt('masukan nilai maksimal!'));
// }

// const targetAngka = Math.floor(Math.random() * max) + 1;
// console.log(targetAngka);


// let Tebak = parseInt(prompt('ísi tebakan pertama kamu!'));
// let jumlahTebakan = 1;

// while (parseInt(Tebak) !== targetAngka) {
//     jumlahTebakan++;
//     if (Tebak > targetAngka) {
//         Tebak = parseInt(prompt('terlalu tinggi bos! tebak lagi:'));
//     } else {
//         Tebak = parseInt(prompt('terlalu rendah! tebak lagi:'));
//     }
// }
// alert(`Yah aku tertebak, kamu berhasil menebak ku selama ${jumlahTebakan} kali `);

let max;
let targetAngka;
let tebak;
let jumlahTebakan = 0;

function mulaiPermainan() {
    // Ambil nilai maksimal dari input
    const maxInput = document.getElementById('maxInput');
    max = parseInt(maxInput.value);

    // Sembunyikan elemen input dan tombol mulai
    maxInput.style.display = 'none';
    nilaimax.style.display = 'none';
    document.querySelector('button').style.display = 'none';

    // Mulai permainan
    targetAngka = Math.floor(Math.random() * max) + 1;
    console.log(targetAngka);
    document.getElementById('tebakanPertama').textContent = 'Masukkan tebakan pertama kamu:';
    document.getElementById('tebakanSelanjutnya').style.display = 'block';
}

function showFirework() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var particles = [];

    // Buat objek partikel// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
    // not supported in all browsers though and sometimes needs a prefix, so we need a shim
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    // now we will setup our basic variables for the demo
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        // full screen dimensions
        cw = window.innerWidth,
        ch = window.innerHeight,
        // firework collection
        fireworks = [],
        // particle collection
        particles = [],
        // starting hue
        hue = 120,
        // when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
        limiterTotal = 5,
        limiterTick = 0,
        // this will time the auto launches of fireworks, one launch per 80 loop ticks
        timerTotal = 80,
        timerTick = 0,
        mousedown = false,
        // mouse x coordinate,
        mx,
        // mouse y coordinate
        my;

    // set canvas dimensions
    canvas.width = cw;
    canvas.height = ch;

    // now we are going to setup our function placeholders for the entire demo

    // get a random number within a range
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // calculate the distance between two points
    function calculateDistance(p1x, p1y, p2x, p2y) {
        var xDistance = p1x - p2x,
            yDistance = p1y - p2y;
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }
}

function cekTebakan() {
    jumlahTebakan++;
    tebak = parseInt(document.getElementById('tebakInput').value);

    if (tebak > targetAngka) {
        document.getElementById('hasilTebakan').textContent = 'Tebakan terlalu tinggi, tebak lagi!';
    } else if (tebak < targetAngka) {
        document.getElementById('hasilTebakan').textContent = 'Tebakan terlalu rendah, tebak lagi!';
    } else {
        document.getElementById('hasilTebakan').textContent = `Yah aku tertebak, kamu berhasil menebak ku selama ${jumlahTebakan} kali.`;
        document.getElementById('tebakanSelanjutnya').style.display = 'none';

        var audio = document.getElementById('cheerAudio');
        audio.play();
    }
}