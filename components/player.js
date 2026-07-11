/**
 * VideoPlayer - Clase principal del reproductor de video
 * Maneja la reproducción, volumen, progreso y eventos del video
 */
class VideoPlayer {
    constructor(videoElementId) {
        this.video = document.getElementById(videoElementId);
        this.isPlaying = false;
        this.isMuted = false;
        this.volume = 0.5;
        this.playbackRate = 1.0;
        this.oldVolume = 1;

        this.init();
    }

    init() {
        if (!this.video) {
            console.error('Elemento de video no encontrado');
            return;
        }

        this.video.volume = this.volume;
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.video.addEventListener('loadedmetadata', () => {
            this.onMetadataLoaded();
        });

        this.video.addEventListener('timeupdate', () => {
            this.onTimeUpdate();
        });

        this.video.addEventListener('ended', () => {
            this.onVideoEnded();
        });

        this.video.addEventListener('error', (e) => {
            this.onError(e);
        });

        this.video.addEventListener('play', () => {
            this.isPlaying = true;
            this.onPlayStateChange(true);
        });

        this.video.addEventListener('pause', () => {
            this.isPlaying = false;
            this.onPlayStateChange(false);
        });
    }

    onMetadataLoaded() {
        // Para ser override por controles
    }

    onTimeUpdate() {
        // Para ser override por controles
    }

    onVideoEnded() {
        // Para ser override por playlist
    }

    onError(e) {
        console.error('Error en el video:', e);
    }

    onPlayStateChange(isPlaying) {
        // Para ser override por controles
    }

    play() {
        this.video.play().catch(e => console.error('Error al reproducir:', e));
    }

    pause() {
        this.video.pause();
    }

    togglePlay() {
        if (this.video.paused) {
            this.play();
        } else {
            this.pause();
        }
        return !this.video.paused;
    }

    stop() {
        this.video.pause();
        this.video.currentTime = 0;
        this.isPlaying = false;
    }

    setVolume(value) {
        this.volume = Math.max(0, Math.min(1, value));
        this.video.volume = this.volume;
        this.isMuted = this.volume === 0;
    }

    getVolume() {
        return this.volume;
    }

    toggleMute() {
        if (this.video.muted) {
            this.video.muted = false;
            this.video.volume = this.oldVolume || 0.5;
            this.volume = this.video.volume;
            this.isMuted = false;
        } else {
            this.oldVolume = this.video.volume;
            this.video.muted = true;
            this.isMuted = true;
        }
        return this.isMuted;
    }

    seek(time) {
        this.video.currentTime = Math.max(0, Math.min(time, this.video.duration));
    }

    seekPercent(percent) {
        const time = (percent / 100) * this.video.duration;
        this.seek(time);
    }

    skip(seconds) {
        this.seek(this.video.currentTime + seconds);
    }

    setPlaybackRate(rate) {
        this.playbackRate = Math.max(0.25, Math.min(2, rate));
        this.video.playbackRate = this.playbackRate;
    }

    getPlaybackRate() {
        return this.playbackRate;
    }

    speedUp() {
        this.setPlaybackRate(this.playbackRate + 0.25);
    }

    slowDown() {
        this.setPlaybackRate(this.playbackRate - 0.25);
    }

    resetSpeed() {
        this.setPlaybackRate(1.0);
    }

    getCurrentTime() {
        return this.video.currentTime;
    }

    getDuration() {
        return this.video.duration || 0;
    }

    getProgress() {
        if (this.video.duration) {
            return (this.video.currentTime / this.video.duration) * 100;
        }
        return 0;
    }

    isFullscreen() {
        return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
    }

    toggleFullscreen() {
        if (this.isFullscreen()) {
            this.exitFullscreen();
        } else {
            this.enterFullscreen();
        }
    }

    enterFullscreen() {
        const container = this.video.closest('.video-container') || this.video.parentElement;
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen();
        } else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        }
    }

    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    loadSource(src, poster = null) {
        this.video.src = src;
        if (poster) {
            this.video.poster = poster;
        }
        this.video.load();
    }

    takeScreenshot() {
        const canvas = document.createElement('canvas');
        canvas.width = this.video.videoWidth;
        canvas.height = this.video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/png');
    }

    downloadScreenshot(filename = 'screenshot.png') {
        const dataURL = this.takeScreenshot();
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = filename;
        link.click();
    }
}

export default VideoPlayer;