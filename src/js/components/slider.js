const sliderContainer = document.querySelector('#slider');
const slideRight = document.querySelector('#right-slide');
const slideLeft = document.querySelector('#left-slide');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const slidesLength = slideRight.querySelectorAll('.slider__slide').length;

let activeSlideIndexLeft = 0;
let activeSlideIndexRight = 1;

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
    slideLeft.style.transform = `translateX(${position})`;
};

const setRightSlidePosition = (position) => {
    slideRight.style.transform = `translateY(${position})`;
};

const changeSlides = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    const leftSliderWidth = slideLeft.clientWidth;

    if (direction === 'next') {
        nextLeftSlide();
        nextRighSlidet();
    } else if (direction === 'prev') {
        prevLeftSlide();
        prevRightSlide();
    }

    setLeftSlidePosition(`-${activeSlideIndexLeft * leftSliderWidth}px`);
    setRightSlidePosition(`-${activeSlideIndexRight * sliderHeight}px`);
};

setRightSlidePosition(`-${activeSlideIndexRight * 100}vh`);

prevButton.addEventListener('click', () => changeSlides('prev'));
nextButton.addEventListener('click', () => changeSlides('next'));
