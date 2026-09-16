const galeryContainer = document.querySelector('.galery-container')
const galeryControlsContainer = document.querySelector('.galery-controls')
const galeryControls = ['previous','next'];
const galeryItems = document.querySelectorAll('.top')

class carousel {
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('ab1');
            el.classList.remove('ab2');
            el.classList.remove('ab3');
            el.classList.remove('ab4');
            el.classList.remove('ab5');
        });

        this.carouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add(`ab${i+1}`);
        });
    }

    setCurrentState(direction){
        if (direction.className == 'galery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control => {
            galeryControlsContainer.appendChild(document.createElement('button')).className = `galery-controls-${control}`;
            document.querySelector(`.galery-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...galeryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exempleCarousel = new carousel(galeryContainer,  galeryItems, galeryControls);
exempleCarousel.setControls();
exempleCarousel.useControls();