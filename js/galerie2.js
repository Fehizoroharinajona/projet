const galeryContainer = document.querySelector('.galery-container');
const galeryItems = document.querySelectorAll('.top');

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
            el.classList.remove('ab1', 'ab2', 'ab3', 'ab4', 'ab5');
        });

        this.items.slice(0, 5).forEach((el, i) => {
            el.classList.add(`ab${i + 1}`);
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