/**
 * PlayerControls - Maneja la interfaz de usuario del reproductor
 * Controla botones, barras de progreso, volumen y otros elementos UI
 */
class PlayerControls {
    constructor(player) {
        this.player = player;
        this.elements = {};
        this.isDragging = false;

        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.setupPlayerCallbacks();
    }

    cacheElements() {
        this.elements = {
            playBtn: document.getElementById('play'),
            pauseBtn: document.getElementById('pause'),
            muteBtn: document.getElementById('mute'),
            noMuteBtn: document.getElementById('noMute'),
            volumeSlider: document.getElementById('volumen'),
            seekBar: document.getElementById('seek'),
            currentTime: document.getElementById('currentTime'),
            duration: document.getElementById('duration'),
            slowDownBtn: document.getElementById('slow-down'),
            speedUpBtn: document.getElementById('speed-up'),
            resetSpeedBtn: document.getElementById('reset-speed'),
            fullscreenBtn: document.getElementById('maximizar'),
            subtitlesBtn: document.getElementById('subtitles'),
            noSubtitlesBtn: document.getElementById('noSubtitles'),
            screenshotBtn: document.getElementById('screenshotButton')
        };
    }

    bindEvents() {
        if (this.elements.playBtn) {
            this.elements.playBtn.addEventListener('click', () => this.handlePlay());
        }

        if (this.elements.pauseBtn) {
            this.elements.pauseBtn.addEventListener('click', () => this.handlePlay());
        }

        if (this.elements.muteBtn) {
            this.elements.muteBtn.addEventListener('click', () => this.handleMute());
        }

        if (this.elements.noMuteBtn) {
            this.elements.noMuteBtn.addEventListener('click', () => this.handleMute());
        }

        if (this.elements.volumeSlider) {
            this.elements.volumeSlider.addEventListener('input', (e) => {
                this.handleVolumeChange(parseFloat(e.target.value));
            });
        }

        if (this.elements.seekBar) {
            this.elements.seekBar.addEventListener('input', (e) => {
                this.handleSeek(parseFloat(e.target.value));
            });

            this.elements.seekBar.addEventListener('mousedown', () => {
                this.isDragging = true;
            });

            this.elements.seekBar.addEventListener('mouseup', () => {
                this.isDragging = false;
            });
        }

        if (this.elements.slowDownBtn) {
            this.elements.slowDownBtn.addEventListener('click', () => this.handleSlowDown());
        }

        if (this.elements.speedUpBtn) {
            this.elements.speedUpBtn.addEventListener('click', () => this.handleSpeedUp());
        }

        if (this.elements.resetSpeedBtn) {
            this.elements.resetSpeedBtn.addEventListener('click', () => this.handleResetSpeed());
        }

        if (this.elements.fullscreenBtn) {
            this.elements.fullscreenBtn.addEventListener('click', () => this.handleFullscreen());
        }

        if (this.elements.subtitlesBtn) {
            this.elements.subtitlesBtn.addEventListener('click', () => this.handleToggleSubtitles());
        }

        if (this.elements.noSubtitlesBtn) {
            this.elements.noSubtitlesBtn.addEventListener('click', () => this.handleToggleSubtitles());
        }

        if (this.elements.screenshotBtn) {
            this.elements.screenshotBtn.addEventListener('click', () => this.handleScreenshot());
        }

        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    setupPlayerCallbacks() {
        this.player.onMetadataLoaded = () => this.updateDuration();
        this.player.onTimeUpdate = () => this.updateSeekBar();
        this.player.onPlayStateChange = (isPlaying) => this.updatePlayButton(isPlaying);
    }

    handlePlay() {
        this.player.togglePlay();
    }

    handleMute() {
        const isMuted = this.player.toggleMute();
        this.updateMuteButton(isMuted);
        this.updateVolumeSlider();
    }

    handleVolumeChange(value) {
        this.player.setVolume(value);
        this.updateMuteButton(value === 0);
    }

    handleSeek(value) {
        this.player.seek(value);
    }

    handleSlowDown() {
        this.player.slowDown();
    }

    handleSpeedUp() {
        this.player.speedUp();
    }

    handleResetSpeed() {
        this.player.resetSpeed();
    }

    handleFullscreen() {
        this.player.toggleFullscreen();
    }

    handleToggleSubtitles() {
        const video = this.player.video;
        if (video.textTracks && video.textTracks.length > 0) {
            const track = video.textTracks[0];
            if (track.mode === 'showing') {
                track.mode = 'hidden';
                this.showSubtitlesButton(true);
            } else {
                track.mode = 'showing';
                this.showSubtitlesButton(false);
            }
        }
    }

    handleScreenshot() {
        this.player.downloadScreenshot('screenshot.png');
    }

    handleKeyboard(e) {
        if (e.target.tagName === 'INPUT') return;

        switch(e.key.toLowerCase()) {
            case ' ':
            case 'k':
                e.preventDefault();
                this.handlePlay();
                break;
            case 'm':
                e.preventDefault();
                this.handleMute();
                break;
            case 'arrowleft':
                e.preventDefault();
                this.player.skip(-10);
                break;
            case 'arrowright':
                e.preventDefault();
                this.player.skip(10);
                break;
            case 'arrowup':
                e.preventDefault();
                this.handleVolumeChange(Math.min(1, this.player.getVolume() + 0.1));
                this.updateVolumeSlider();
                break;
            case 'arrowdown':
                e.preventDefault();
                this.handleVolumeChange(Math.max(0, this.player.getVolume() - 0.1));
                this.updateVolumeSlider();
                break;
            case 'f':
                e.preventDefault();
                this.handleFullscreen();
                break;
        }
    }

    updateSeekBar() {
        if (!this.isDragging && this.elements.seekBar) {
            this.elements.seekBar.value = this.player.getCurrentTime();
        }
        this.updateCurrentTime();
    }

    updateDuration() {
        if (this.elements.duration) {
            this.elements.duration.textContent = this.formatTime(this.player.getDuration());
        }
        if (this.elements.seekBar) {
            this.elements.seekBar.max = this.player.getDuration();
        }
    }

    updateCurrentTime() {
        if (this.elements.currentTime) {
            this.elements.currentTime.textContent = this.formatTime(this.player.getCurrentTime());
        }
    }

    updatePlayButton(isPlaying) {
        if (this.elements.playBtn && this.elements.pauseBtn) {
            if (isPlaying) {
                this.elements.playBtn.classList.add('ocultar');
                this.elements.pauseBtn.classList.remove('ocultar');
            } else {
                this.elements.playBtn.classList.remove('ocultar');
                this.elements.pauseBtn.classList.add('ocultar');
            }
        }
    }

    updateMuteButton(isMuted) {
        if (this.elements.muteBtn && this.elements.noMuteBtn) {
            if (isMuted) {
                this.elements.muteBtn.classList.remove('ocultar');
                this.elements.noMuteBtn.classList.add('ocultar');
            } else {
                this.elements.muteBtn.classList.add('ocultar');
                this.elements.noMuteBtn.classList.remove('ocultar');
            }
        }
    }

    updateVolumeSlider() {
        if (this.elements.volumeSlider) {
            this.elements.volumeSlider.value = this.player.getVolume();
        }
    }

    showSubtitlesButton(show) {
        if (this.elements.subtitlesBtn && this.elements.noSubtitlesBtn) {
            if (show) {
                this.elements.subtitlesBtn.style.display = 'inline-block';
                this.elements.noSubtitlesBtn.style.display = 'none';
            } else {
                this.elements.subtitlesBtn.style.display = 'none';
                this.elements.noSubtitlesBtn.style.display = 'inline-block';
            }
        }
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

export default PlayerControls;