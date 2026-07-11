/**
 * Helpers - Funciones utilitarias para el reproductor
 */

/**
 * Formatea segundos a MM:SS
 */
export function formatTime(seconds) {
    if (isNaN(seconds) || seconds === null || seconds === undefined) {
        return '0:00';
    }
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Formatea segundos a HH:MM:SS
 */
export function formatTimeLong(seconds) {
    if (isNaN(seconds) || seconds === null || seconds === undefined) {
        return '0:00:00';
    }
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Limita un valor entre min y max
 */
export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

/**
 * Debounce - Retrasa la ejecución de una función
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle - Limita la ejecución de una función
 */
export function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Selecciona un elemento del DOM de forma segura
 */
export function $(selector) {
    return document.querySelector(selector);
}

/**
 * Selecciona múltiples elementos del DOM
 */
export function $$(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Crea un elemento con atributos y contenido
 */
export function createElement(tag, attrs = {}, content = '') {
    const element = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    if (content) {
        element.innerHTML = content;
    }
    return element;
}

/**
 * Verifica si es dispositivo móvil
 */
export function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Verifica si es tablet
 */
export function isTablet() {
    return /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent);
}

/**
 * Verifica si es desktop
 */
export function isDesktop() {
    return !isMobile() && !isTablet();
}

/**
 * Obtiene el tamaño de la pantalla
 */
export function getScreenSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

/**
 * Capitaliza la primera letra de un string
 */
export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Trunca un string a cierta longitud
 */
export function truncate(str, length, suffix = '...') {
    if (!str || str.length <= length) return str;
    return str.substring(0, length) + suffix;
}

/**
 * Genera un ID único
 */
export function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Espera un tiempo determinado
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Verifica si un elemento está visible en el viewport
 */
export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Datos de videos de ejemplo para el reproductor
 */
export const sampleVideos = [
    {
        id: 1,
        title: 'Cuando te miro - Ska Jazz Messengers',
        src: '/contents/video/Cuando te miro - Ska Jazz Messengers.mp4',
        poster: '/contents/img/Cuando te miro.jpg',
        category: 'ska-jazz'
    },
    {
        id: 2,
        title: 'Love - Out Of Control Army & Lollypop Lorry',
        src: '/contents/video/Out Of Control Army & Lollypop Lorry - Love.mp4',
        poster: '/contents/img/Love.jpg',
        category: 'ska-punk'
    },
    {
        id: 3,
        title: 'Lilith - Out Of Control Army',
        src: '/contents/video/Out Of Control Army -Lilith.mp4',
        poster: '/contents/img/Out Of Control Army.jpg',
        category: 'ska-punk'
    },
    {
        id: 4,
        title: 'Shadows - Quito Ska Jazz',
        src: '/contents/video/Quito Ska Jazz - Shadows.mp4',
        poster: '/contents/img/Quito Ska Jazz.jpg',
        category: 'ska-jazz'
    },
    {
        id: 5,
        title: 'You Dont Love Me - Jazz Jamaica',
        src: '/contents/video/Jazz Jamaica - You Dont Love Me.mp4',
        poster: '/contents/img/Jazz Jamaica.jpg',
        category: 'ska-jazz'
    },
    {
        id: 6,
        title: 'Suikinkutsu',
        src: '/contents/video/Suikinkutsu.mp4',
        poster: '/contents/img/SUIKINKUTSU.jpeg',
        category: 'japanese'
    }
];