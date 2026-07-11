/**
 * Playlist - Maneja la lista de reproducción de videos
 * Controla la navegación, selección y reproducción de videos
 */
class Playlist {
    constructor(player, videos = []) {
        this.player = player;
        this.videos = videos;
        this.currentIndex = 0;
        this.autoplay = true;

        this.init();
    }

    init() {
        if (this.videos.length > 0) {
            this.loadVideo(0);
        }
        this.setupPlayerCallback();
        this.render();
    }

    setupPlayerCallback() {
        this.player.onVideoEnded = () => {
            if (this.autoplay) {
                this.next();
            }
        };
    }

    loadVideo(index) {
        if (index >= 0 && index < this.videos.length) {
            this.currentIndex = index;
            const video = this.videos[index];
            this.player.loadSource(video.src, video.poster);
            this.updateActiveItem();
            this.onVideoChange(video);
        }
    }

    onVideoChange(video) {
        // Para ser override externamente
    }

    next() {
        const nextIndex = this.currentIndex < this.videos.length - 1
            ? this.currentIndex + 1
            : 0;
        this.loadVideo(nextIndex);
    }

    previous() {
        const prevIndex = this.currentIndex > 0
            ? this.currentIndex - 1
            : this.videos.length - 1;
        this.loadVideo(prevIndex);
    }

    play() {
        if (this.videos.length > 0) {
            this.player.play();
        }
    }

    pause() {
        this.player.pause();
    }

    getCurrentVideo() {
        return this.videos[this.currentIndex] || null;
    }

    getCurrentIndex() {
        return this.currentIndex;
    }

    getVideos() {
        return this.videos;
    }

    addVideo(video) {
        this.videos.push(video);
        this.render();
    }

    removeVideo(index) {
        if (index >= 0 && index < this.videos.length) {
            this.videos.splice(index, 1);
            if (this.currentIndex >= this.videos.length) {
                this.currentIndex = Math.max(0, this.videos.length - 1);
            }
            this.render();
        }
    }

    shuffle() {
        const shuffled = [...this.videos];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        this.videos = shuffled;
        this.currentIndex = 0;
        this.render();
    }

    setAutoplay(enabled) {
        this.autoplay = enabled;
    }

    render() {
        const container = document.querySelector('.video-list');
        if (!container) return;

        container.innerHTML = '';

        this.videos.forEach((video, index) => {
            const item = document.createElement('div');
            item.className = `video-item ${index === this.currentIndex ? 'active' : ''}`;
            item.innerHTML = `
                <img src="${video.poster}" alt="${video.title}">
                <p>${video.title}</p>
            `;
            item.addEventListener('click', () => this.loadVideo(index));
            container.appendChild(item);
        });
    }

    updateActiveItem() {
        const items = document.querySelectorAll('.video-item');
        items.forEach((item, index) => {
            if (index === this.currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}

export default Playlist;