/**
 * SKA-JAZZ Music Player
 * Reproductor de video funcional sin dependencias de ES6 modules
 */

// Datos de videos
const sampleVideos = [
    {
        id: 1,
        title: 'Cuando te miro - Ska Jazz Messengers',
        src: 'contents/video/Cuando te miro - Ska Jazz Messengers.mp4',
        poster: 'contents/img/Cuando te miro.jpg'
    },
    {
        id: 2,
        title: 'Love - Out Of Control Army & Lollypop Lorry',
        src: 'contents/video/Out Of Control Army & Lollypop Lorry - Love.mp4',
        poster: 'contents/img/Love.jpg'
    },
    {
        id: 3,
        title: 'Lilith - Out Of Control Army',
        src: 'contents/video/Out Of Control Army -Lilith.mp4',
        poster: 'contents/img/Out Of Control Army.jpg'
    },
    {
        id: 4,
        title: 'Shadows - Quito Ska Jazz',
        src: 'contents/video/Quito Ska Jazz - Shadows.mp4',
        poster: 'contents/img/Quito Ska Jazz.jpg'
    },
    {
        id: 5,
        title: 'You Dont Love Me - Jazz Jamaica',
        src: 'contents/video/Jazz Jamaica - You Dont Love Me.mp4',
        poster: 'contents/img/Jazz Jamaica.jpg'
    },
    {
        id: 6,
        title: 'Suikinkutsu',
        src: 'contents/video/Suikinkutsu.mp4',
        poster: 'contents/img/SUIKINKUTSU.jpeg'
    }
];

// Variables globales del reproductor
let video, playBtn, pauseBtn, muteBtn, volumeSlider, seekBar;
let currentTimeEl, durationEl;
let currentVideoIndex = 0;
let isMuted = false;
let savedVolume = 0.5;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializePlayer();
});

function initializePlayer() {
    // Obtener elementos del DOM
    video = document.getElementById('video');
    playBtn = document.getElementById('playBtn');
    pauseBtn = document.getElementById('pauseBtn');
    muteBtn = document.getElementById('muteBtn');
    volumeSlider = document.getElementById('volumen');
    seekBar = document.getElementById('seek');
    currentTimeEl = document.getElementById('currentTime');
    durationEl = document.getElementById('duration');

    if (!video) {
        console.error('Elemento de video no encontrado');
        return;
    }

    // Configurar volumen inicial
    video.volume = 0.5;

    // Event listeners del video
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('timeupdate', updateSeekBar);
    video.addEventListener('play', updatePlayButtonState);
    video.addEventListener('pause', updatePlayButtonState);
    video.addEventListener('ended', playNext);

    // Event listeners de controles
    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (pauseBtn) pauseBtn.addEventListener('click', togglePlay);
    if (muteBtn) muteBtn.addEventListener('click', toggleMute);
    if (volumeSlider) volumeSlider.addEventListener('input', changeVolume);
    if (seekBar) seekBar.addEventListener('input', seekVideo);

    // Botones de navegación
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const stopBtn = document.getElementById('stopBtn');
    const rewindBtn = document.getElementById('rewindBtn');
    const forwardBtn = document.getElementById('forwardBtn');

    if (prevBtn) prevBtn.addEventListener('click', playPrevious);
    if (nextBtn) nextBtn.addEventListener('click', playNext);
    if (stopBtn) stopBtn.addEventListener('click', stopVideo);
    if (rewindBtn) rewindBtn.addEventListener('click', function() { skip(-10); });
    if (forwardBtn) forwardBtn.addEventListener('click', function() { skip(10); });

    // Botones de velocidad
    const slowDownBtn = document.getElementById('slowDownBtn');
    const speedUpBtn = document.getElementById('speedUpBtn');
    const resetSpeedBtn = document.getElementById('resetSpeedBtn');

    if (slowDownBtn) slowDownBtn.addEventListener('click', slowDown);
    if (speedUpBtn) speedUpBtn.addEventListener('click', speedUp);
    if (resetSpeedBtn) resetSpeedBtn.addEventListener('click', resetSpeed);

    // Botón de pantalla completa
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Botón de screenshot
    const screenshotBtn = document.getElementById('screenshotBtn');
    if (screenshotBtn) screenshotBtn.addEventListener('click', takeScreenshot);

    // Atajos de teclado
    document.addEventListener('keydown', handleKeyboard);

    // Renderizar playlist
    renderPlaylist();

    // Cargar primer video
    loadVideo(0);

    console.log('Reproductor SKA-JAZZ inicializado correctamente');
}

// Funciones de reproducción
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
    updatePlayButtonState();
}

function loadVideo(index) {
    if (index >= 0 && index < sampleVideos.length) {
        currentVideoIndex = index;
        const videoData = sampleVideos[index];
        video.src = videoData.src;
        video.load();
        updateActivePlaylistItem();
    }
}

function playNext() {
    if (currentVideoIndex < sampleVideos.length - 1) {
        loadVideo(currentVideoIndex + 1);
        video.play();
    } else {
        loadVideo(0);
        video.play();
    }
}

function playPrevious() {
    if (currentVideoIndex > 0) {
        loadVideo(currentVideoIndex - 1);
        video.play();
    } else {
        loadVideo(sampleVideos.length - 1);
        video.play();
    }
}

function skip(seconds) {
    video.currentTime = Math.max(0, Math.min(video.currentTime + seconds, video.duration));
}

// Funciones de volumen
function toggleMute() {
    if (video.muted || video.volume === 0) {
        video.muted = false;
        video.volume = savedVolume || 0.5;
        volumeSlider.value = video.volume;
        updateMuteButton(false);
    } else {
        savedVolume = video.volume;
        video.muted = true;
        updateMuteButton(true);
    }
}

function changeVolume() {
    const value = parseFloat(volumeSlider.value);
    video.volume = value;
    video.muted = value === 0;
    updateMuteButton(value === 0);
}

function updateMuteButton(muted) {
    const icon = muteBtn.querySelector('ion-icon');
    if (muted) {
        icon.setAttribute('name', 'volume-mute-outline');
    } else {
        icon.setAttribute('name', 'volume-high-outline');
    }
}

// Funciones de progreso
function updateDuration() {
    if (durationEl) {
        durationEl.textContent = formatTime(video.duration);
    }
    if (seekBar) {
        seekBar.max = video.duration;
    }
}

function updateSeekBar() {
    if (seekBar && !seekBar.dragging) {
        seekBar.value = video.currentTime;
    }
    if (currentTimeEl) {
        currentTimeEl.textContent = formatTime(video.currentTime);
    }
}

function seekVideo() {
    video.currentTime = parseFloat(seekBar.value);
}

// Funciones de velocidad
function slowDown() {
    video.playbackRate = Math.max(0.25, video.playbackRate - 0.25);
}

function speedUp() {
    video.playbackRate = Math.min(2, video.playbackRate + 0.25);
}

function resetSpeed() {
    video.playbackRate = 1;
}

// Función de pantalla completa
function toggleFullscreen() {
    const container = video.closest('.video-container');
    if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

// Función de captura de pantalla
function takeScreenshot() {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Funciones de UI
function updatePlayButtonState() {
    if (video.paused) {
        playBtn.classList.remove('ocultar');
        pauseBtn.classList.add('ocultar');
    } else {
        playBtn.classList.add('ocultar');
        pauseBtn.classList.remove('ocultar');
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
}

// Funciones de playlist
function renderPlaylist() {
    const container = document.getElementById('videoList');
    if (!container) return;

    container.innerHTML = '';
    sampleVideos.forEach(function(videoData, index) {
        const item = document.createElement('div');
        item.className = 'video-item' + (index === currentVideoIndex ? ' active' : '');
        item.innerHTML = '<img src="' + videoData.poster + '" alt="' + videoData.title + '"><p>' + videoData.title + '</p>';
        item.addEventListener('click', function() {
            loadVideo(index);
            video.play();
        });
        container.appendChild(item);
    });
}

function updateActivePlaylistItem() {
    const items = document.querySelectorAll('.video-item');
    items.forEach(function(item, index) {
        if (index === currentVideoIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Atajos de teclado
function handleKeyboard(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch(e.key.toLowerCase()) {
        case ' ':
        case 'k':
            e.preventDefault();
            togglePlay();
            break;
        case 'm':
            e.preventDefault();
            toggleMute();
            break;
        case 'f':
            e.preventDefault();
            toggleFullscreen();
            break;
        case 'arrowleft':
            e.preventDefault();
            skip(-10);
            break;
        case 'arrowright':
            e.preventDefault();
            skip(10);
            break;
        case 'arrowup':
            e.preventDefault();
            video.volume = Math.min(1, video.volume + 0.1);
            volumeSlider.value = video.volume;
            break;
        case 'arrowdown':
            e.preventDefault();
            video.volume = Math.max(0, video.volume - 0.1);
            volumeSlider.value = video.volume;
            break;
        case 'n':
            e.preventDefault();
            playNext();
            break;
        case 'p':
            e.preventDefault();
            playPrevious();
            break;
        case 's':
            e.preventDefault();
            stopVideo();
            break;
    }
}