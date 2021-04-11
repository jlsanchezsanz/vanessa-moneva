export const hideTitleOnScroll = () => {
    const title = document.querySelector('.section__title');
    const section = document.querySelector('.section');

    section.addEventListener('scroll', (e) => {
        const opacity = 1 - e.target.scrollTop / 100;
        title.style.opacity = opacity >= 0.1 ? opacity : 0.1;
    });
};

export const animateImages = () => {
    const section = document.querySelector('.section');
    const images = document.querySelectorAll('.section__img');

    if (images.length <= 1) {
        images[0].classList.add('active');
        return;
    }
    const percentagePerImage = 100 / images.length;

    setTimeout(() => {
        const maxScroll =
            section.scrollHeight - section.scrollTop - section.clientHeight;
        images[0].classList.add('active');

        section.addEventListener('scroll', (e) => {
            const currentPercentage = e.target.scrollTop * (100 / maxScroll);
            const imageIndex = Math.trunc(
                currentPercentage / percentagePerImage,
            );
            if (imageIndex < images.length) {
                images.forEach((img) => img.classList.remove('active'));
                images[imageIndex].classList.add('active');
            }
        });
    }, 0);
};
