export const hideTitleOnScroll = () => {
    const title = document.querySelector('.section__title');
    const section = document.querySelector('.section');

    section.addEventListener('scroll', (e) => {
        const opacity = 1 - e.target.scrollTop / 100;
        title.style.opacity = opacity >= 0.1 ? opacity : 0.1;
    });
};
