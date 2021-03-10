import { debounce } from '../utils/debounce';

const sliderContainer = document.querySelector('#slider');
const rightSlider = document.querySelector('#right-slider');
const leftSlider = document.querySelector('#left-slider');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const slidesLength = rightSlider.querySelectorAll('.slider__slide').length;
const sliderDotsContainer = document.querySelector('#slider-dots-container');
const rightSliderLinks = document.querySelectorAll('.slider__title--right');
let sliderDotsLinks;

let activeSlideIndexLeft = 0;
let activeSlideIndexRight = 1;

const createDotLink = (i) => {
    const dotLink = document.createElement('a');
    dotLink.classList.add('slider__dot-link');
    dotLink.innerText = `0${i + 1}`;
    dotLink.addEventListener('click', () => goToSlide(i));
    return dotLink;
};

const createSliderDots = () => {
    for (let i = 0; i < slidesLength; i++) {
        const dotItem = document.createElement('li');
        dotItem.classList.add('slider__dot-item');
        const dotLink = createDotLink(i);
        dotItem.appendChild(dotLink);

        sliderDotsContainer.appendChild(dotItem);
    }

    sliderDotsLinks = document.querySelectorAll('.slider__dot-link');
};

const updateActiveDot = () => {
    const activeDot = document.querySelector('.slider__dot-link--active');
    if (activeDot) {
        activeDot.classList.remove('slider__dot-link--active');
    }

    sliderDotsLinks[activeSlideIndexLeft].classList.add(
        'slider__dot-link--active',
    );
};

const updateSlides = () => {
    const sliderHeight = sliderContainer.clientHeight;
    const leftSliderWidth = leftSlider.clientWidth;

    setLeftSlidePosition(`-${activeSlideIndexLeft * leftSliderWidth}px`);
    setRightSlidePosition(`-${activeSlideIndexRight * sliderHeight}px`);
};

const goToSlide = (i) => {
    activeSlideIndexLeft = i;
    activeSlideIndexRight = i + 1;
    if (activeSlideIndexRight > slidesLength - 1) {
        activeSlideIndexRight = 0;
    }

    updateSlides();
    updateActiveDot();
};

const nextLeftSlide = () => {
    activeSlideIndexLeft++;
    if (activeSlideIndexLeft > slidesLength - 1) {
        activeSlideIndexLeft = 0;
    }
};

const nextRighSlidet = () => {
    activeSlideIndexRight++;
    if (activeSlideIndexRight > slidesLength - 1) {
        activeSlideIndexRight = 0;
    }
};

const prevLeftSlide = () => {
    activeSlideIndexLeft--;
    if (activeSlideIndexLeft < 0) {
        activeSlideIndexLeft = slidesLength - 1;
    }
};

const prevRightSlide = () => {
    activeSlideIndexRight--;
    if (activeSlideIndexRight < 0) {
        activeSlideIndexRight = slidesLength - 1;
    }
};

const setLeftSlidePosition = (position) => {
    leftSlider.style.transform = `translateX(${position})`;
};

const setRightSlidePosition = (position) => {
    rightSlider.style.transform = `translateY(${position})`;
};

const changeSlides = (direction) => {
    if (direction === 'next') {
        nextLeftSlide();
        nextRighSlidet();
    } else if (direction === 'prev') {
        prevLeftSlide();
        prevRightSlide();
    }

    updateSlides();
    updateActiveDot();
};

const debouncedScroll = debounce((e) => {
    e.preventDefault();
    if (e.deltaY > 0 || e.deltaX > 0) {
        changeSlides('next');
    } else {
        changeSlides('prev');
    }
}, 100);

const handleKeyUp = debounce((e) => {
    if (e.keyCode === 37 || e.keyCode === 38) {
        changeSlides('prev');
    } else if (e.keyCode === 39 || e.keyCode === 40) {
        changeSlides('next');
    }
}, 100);

createSliderDots();
updateActiveDot();

setRightSlidePosition(`-${activeSlideIndexRight * 100}vh`);

prevButton.addEventListener('click', () => changeSlides('prev'));
nextButton.addEventListener('click', () => changeSlides('next'));
rightSliderLinks.forEach((link) =>
    link.addEventListener('click', () => changeSlides('next')),
);
window.addEventListener('keyup', handleKeyUp);
window.addEventListener('wheel', debouncedScroll);
