var video = document.getElementById("video");
var mute = document.getElementById("mute");
var barra = document.getElementById("volumen");
var oldvolume = 1;// Variable para guardar el volumen anterior
var volumenControl = document.getElementById('volumen');
var seekBar = document.getElementById('seek');
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var track = document.getElementById('track');
/* var subtitlesBtn = document.getElementById('subtitles');
var noSubtitlesBtn = document.getElementById('noSubtitles'); */
var maximizar = document.getElementById('maximizar');

document.addEventListener("DOMContentLoaded", function() {
    // Mostrar la ventana emergente después de que la página se haya cargado
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    // Cerrar la ventana emergente cuando se hace clic en el botón de cerrar
    var closeBtn = document.getElementById("close-btn");
    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    // Cerrar la ventana emergente si se hace clic fuera del contenido de la ventana emergente
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    video.volume = volumenControl.value;

    volumenControl.addEventListener('input', function () {
        video.volume = this.value;
    });
});

function muteNoMute() {
    if (video.muted) {
        video.muted = false;
    }
    else {
        video.muted = true;
    }

    if (mute.classList.contains('ocultar')) {
        mute.classList.remove('ocultar');
        noMute.classList.add('ocultar');
    }
    else {
        mute.classList.add('ocultar');
        noMute.classList.remove('ocultar');
    }

    if (video.volume !== 0) {
        video.volume = 0;
        volumenControl.value = 0;
    } else {
        video.volume = volumenControl.value;
        if (video.volume === 0) {
            video.volume = 0.5;
            volumenControl.value = 0.5;
        }
    }
}

barra.addEventListener("change", function (ev) {
    var v = document.getElementById("video");
    v.volume = ev.target.value;
    mute.checked = false;
}, true);

mute.addEventListener("change", function (ev) {
    var v = document.getElementById("mivideo");
    if (ev.target.checked) {
        oldvolume = v.volume;
        v.volume = 0;
        barra.value = 0;
    } else {
        v.volume = oldvolume;
        barra.value = oldvolume;
    }
}, true);

document.addEventListener('DOMContentLoaded', (event) => {
    seekBar.value = 0;
    video.addEventListener('loadedmetadata', () => {
        seekBar.max = video.duration;
    });

    video.addEventListener('timeupdate', () => {
        seekBar.value = video.currentTime;
    });

    seekBar.addEventListener('input', () => {
        video.currentTime = seekBar.value;
    });

    seekBar.addEventListener('change', () => {
        video.currentTime = seekBar.value;
    });
});

function playPause() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }

    if (play.classList.contains('ocultar')) {
        play.classList.remove('ocultar');
        pause.classList.add('ocultar');
    }
    else {
        play.classList.add('ocultar');
        pause.classList.remove('ocultar');
    }
}

function skip(value) {
    video.currentTime += value;
}

const videoPlayer = document.getElementById('video');

const playlist = [
    /* '/contents/video/Historia del SKA.mp4', */
    '/contents/video/Cuando te miro - Ska Jazz Messengers.mp4',
    '/contents/video/Jazz Jamaica - You Dont Love Me.mp4',
    '/contents/video/Out Of Control Army & Lollypop Lorry - Love.mp4',
    '/contents/video/Out Of Control Army -Lilith.mp4',
    '/contents/video/Suikinkutsu.mp4'
    // Agrega más videos aquí
];

let currentVideoIndex = 0;

function loadVideo(index) {
    if (index >= 0 && index < playlist.length) {
        videoPlayer.src = playlist[index];
        videoPlayer.play();
    }
}

function playPrevious() {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        loadVideo(currentVideoIndex);
    } else {
        // Opcional: volver al último video si estamos en el primero
        currentVideoIndex = playlist.length - 1;
        loadVideo(currentVideoIndex);
    }
}

function playNext() {
    if (currentVideoIndex < playlist.length - 1) {
        currentVideoIndex++;
        loadVideo(currentVideoIndex);
    } else {
        // Opcional: volver al primer video si estamos en el último
        currentVideoIndex = 0;
        loadVideo(currentVideoIndex);
    }
}

// Cargar el primer video al iniciar la página
loadVideo(currentVideoIndex);

function stop() {
    video.pause();
    video.currentTime = 0;
    if (play.classList.contains('ocultar')) {
        play.classList.remove('ocultar');
        pause.classList.add('ocultar');
    }
}

const slowDownButton = document.getElementById('slow-down');
const speedUpButton = document.getElementById('speed-up');
const resetSpeedButton = document.getElementById('reset-speed');

slowDownButton.onclick = () => {
    video.playbackRate -= 0.25;
    if (video.playbackRate < 0.25) {
        video.playbackRate = 0.25; // Mínima velocidad permitida
    }
    console.log(`Velocidad de reproducción: ${video.playbackRate}`);
};

resetSpeedButton.onclick = () => {
    video.playbackRate = 1.0; // Velocidad normal
    console.log(`Velocidad de reproducción restablecida a: ${video.playbackRate}`);
};

speedUpButton.onclick = () => {
    video.playbackRate += 0.25;
    if (video.playbackRate > 2.0) {
        video.playbackRate = 2.0; // Máxima velocidad permitida
    }
    console.log(`Velocidad de reproducción: ${video.playbackRate}`);
};


// Función para alternar subtítulos
function toggleSubtitles() {
    var subtitlesOnButton = document.getElementById('subtitles');
    var subtitlesOffButton = document.getElementById('noSubtitles');

    // Verificamos el estado actual de los subtítulos
    if (video.textTracks[0].mode == 'showing') {
        // Si están activos, los desactivamos
        video.textTracks[0].mode = 'hidden';
        subtitlesOnButton.style.display = 'inline-block';
        subtitlesOffButton.style.display = 'none';
    } else {
        // Si están desactivados, los activamos
        video.textTracks[0].mode = 'showing';
        subtitlesOnButton.style.display = 'none';
        subtitlesOffButton.style.display = 'inline-block';
    }
}


function fullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

function captureScreenshot() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imgURL = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = imgURL;
    link.download = 'screenshot.png';
    link.click();
}

const screenshotButton = document.getElementById('screenshotButton');
screenshotButton.addEventListener('click', captureScreenshot);

