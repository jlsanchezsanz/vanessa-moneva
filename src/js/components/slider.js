import { debounce } from '../utils/debounce';

export class Sliders {
    createDotLink = (i) => {
        const dotLink = document.createElement('a');
        dotLink.classList.add('slider__dot-link');
        dotLink.innerText = `0${i + 1}`;
        dotLink.addEventListener('click', () => this.goToSlide(i));
        return dotLink;
    };

    createSliderDots = () => {
        for (let i = 0; i < this.slidesLength; i++) {
            const dotItem = document.createElement('li');
            dotItem.classList.add('slider__dot-item');
            const dotLink = this.createDotLink(i);
            dotItem.appendChild(dotLink);

            this.sliderDotsContainer.appendChild(dotItem);
        }

        this.sliderDotsLinks = document.querySelectorAll('.slider__dot-link');
    };

    updateActiveDot = () => {
        const activeDot = document.querySelector('.slider__dot-link--active');
        if (activeDot) {
            activeDot.classList.remove('slider__dot-link--active');
        }

        this.sliderDotsLinks[this.activeSlideIndexLeft].classList.add(
            'slider__dot-link--active',
        );
    };

    updateSlides = () => {
        const sliderHeight = this.sliderContainer.clientHeight;
        const leftSliderWidth = this.leftSlider.clientWidth;

        this.setLeftSlidePosition(
            `-${this.activeSlideIndexLeft * leftSliderWidth}px`,
        );
        this.setRightSlidePosition(
            `-${this.activeSlideIndexRight * sliderHeight}px`,
        );
    };

    goToSlide = (i) => {
        this.activeSlideIndexLeft = i;
        this.activeSlideIndexRight = i + 1;
        if (this.activeSlideIndexRight > this.slidesLength - 1) {
            this.activeSlideIndexRight = 0;
        }

        this.updateSlides();
        this.updateActiveDot();
    };

    nextLeftSlide = () => {
        this.activeSlideIndexLeft++;
        if (this.activeSlideIndexLeft > this.slidesLength - 1) {
            this.activeSlideIndexLeft = 0;
        }
    };

    nextRighSlidet = () => {
        this.activeSlideIndexRight++;
        if (this.activeSlideIndexRight > this.slidesLength - 1) {
            this.activeSlideIndexRight = 0;
        }
    };

    prevLeftSlide = () => {
        this.activeSlideIndexLeft--;
        if (this.activeSlideIndexLeft < 0) {
            this.activeSlideIndexLeft = this.slidesLength - 1;
        }
    };

    prevRightSlide = () => {
        this.activeSlideIndexRight--;
        if (this.activeSlideIndexRight < 0) {
            this.activeSlideIndexRight = this.slidesLength - 1;
        }
    };

    setLeftSlidePosition = (position) => {
        this.leftSlider.style.transform = `translateX(${position})`;
    };

    setRightSlidePosition = (position) => {
        this.rightSlider.style.transform = `translateY(${position})`;
    };

    changeSlides = (direction) => {
        if (direction === 'next') {
            this.nextLeftSlide();
            this.nextRighSlidet();
        } else if (direction === 'prev') {
            this.prevLeftSlide();
            this.prevRightSlide();
        }

        this.updateSlides();
        this.updateActiveDot();
    };

    changeSlidesNext = () => this.changeSlides('next');

    changeSlidesPrev = () => this.changeSlides('prev');

    debouncedScroll = debounce((e) => {
        e.preventDefault();
        if (e.deltaY > 0 || e.deltaX > 0) {
            this.changeSlidesNext();
        } else {
            this.changeSlidesPrev();
        }
    }, 100);

    handleKeyUp = debounce((e) => {
        if (e.keyCode === 37 || e.keyCode === 38) {
            this.changeSlidesPrev();
        } else if (e.keyCode === 39 || e.keyCode === 40) {
            this.changeSlidesNext();
        }
    }, 100);

    getElementsFromDOM = () => {
        this.sliderContainer = document.querySelector('#slider');
        this.rightSlider = document.querySelector('#right-slider');
        this.leftSlider = document.querySelector('#left-slider');
        this.slidesLength = this.rightSlider.querySelectorAll(
            '.slider__slide',
        ).length;
        this.sliderDotsContainer = document.querySelector(
            '#slider-dots-container',
        );
        this.rightSliderLinks = document.querySelectorAll(
            '.slider__title--right',
        );
        this.prevButton = document.querySelector('#prev-button');
        this.nextButton = document.querySelector('#next-button');
    };

    listenToEvents = () => {
        this.prevButton.addEventListener('click', () =>
            this.changeSlidesPrev(),
        );
        this.nextButton.addEventListener('click', () =>
            this.changeSlidesNext(),
        );
        this.rightSliderLinks.forEach((link) =>
            link.addEventListener('click', () => this.changeSlidesNext()),
        );
        window.addEventListener('keyup', this.handleKeyUp);
        window.addEventListener('wheel', this.debouncedScroll);
    };

    unlistenToEvents = () => {
        this.prevButton.removeEventListener('click', this.changeSlidesPrev());
        this.nextButton.removeEventListener('click', this.changeSlidesNext());
        this.rightSliderLinks.forEach((link) =>
            link.removeEventListener('click', this.changeSlidesNext),
        );
        window.removeEventListener('keyup', this.handleKeyUp);
        window.removeEventListener('wheel', this.debouncedScroll);
    };

    initRightSlide = () => {
        this.setRightSlidePosition(`-${this.activeSlideIndexRight * 100}vh`);
    };

    init = () => {
        this.activeSlideIndexLeft = 0;
        this.activeSlideIndexRight = 1;

        this.getElementsFromDOM();
        this.createSliderDots();
        this.updateActiveDot();
        this.listenToEvents();
        this.initRightSlide();
    };

    destroy = () => {
        this.unlistenToEvents();
    };
}
