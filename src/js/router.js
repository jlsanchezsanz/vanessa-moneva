import Navigo from 'navigo';

import { AboutMe } from './sections/about-me';
import { Home } from './sections/home';

export const router = new Navigo('/');
let prevContent = null;

const setContent = (content) => {
    const root = document.querySelector('#root');
    root.innerHTML = content.render();
    content.init && content.init();
    prevContent && prevContent.destroy && prevContent.destroy();
    prevContent = content;
};

router
    .on({
        '/': () => {
            setContent(new Home());
        },
        '/sobre-mi': () => {
            setContent(new AboutMe());
        },
    })
    .resolve();

const menu = document.querySelector('#desktop-menu');
menu.addEventListener('click', (e) => {
    const {
        target: {
            dataset: { route: route },
        },
    } = e;
    router.navigate(`${route}`);
});

const headerTitle = document.querySelector('#header-title');
headerTitle.addEventListener('click', (e) => {
    const {
        target: {
            dataset: { route: route },
        },
    } = e;
    router.navigate(`${route}`);
});
