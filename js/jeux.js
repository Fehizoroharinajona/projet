const galeryContainer = document.querySelector('.galerie-container');
const galeryItems = document.querySelectorAll('.game');

class SimpleAutoCarousel {
    constructor() {
        this.items = [...galeryItems];
        this.interval = null;
        this.delay = 3000;
        this.init();
    }

    init() {
        if (this.items.length === 0) return;
        
        this.startAutoPlay();
        this.setHoverPause();
    }

    updateGallery() {
        this.items.forEach(el => {
            el.classList.remove('G1', 'G2', 'G3', 'G4', 'G5', 'G6');
        });

        this.items.slice(0, 5).forEach((el, i) => {
            el.classList.add(`G${i + 1}`);
        });
    }

    nextSlide() {
        this.items.push(this.items.shift());
        this.updateGallery();
    }

    startAutoPlay() {
        this.interval = setInterval(() => {
            this.nextSlide();
        }, this.delay);
    }

    stopAutoPlay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    setHoverPause() {
        galeryContainer.addEventListener('mouseenter', () => {
            this.stopAutoPlay();
        });

        galeryContainer.addEventListener('mouseleave', () => {
            this.startAutoPlay();
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new SimpleAutoCarousel();
});