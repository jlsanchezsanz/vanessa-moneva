import Navigo from 'navigo';

import { AboutMe } from './sections/about-me';
import { Appointment } from './sections/appointment';
import { GroupalProgram } from './sections/groupal-program';
import { Home } from './sections/home';
import { Contact } from './sections/contact';
import { IntegrativeDermatology } from './sections/integrative-dermatology';

export const router = new Navigo('/');
let prevContent = null;

const setContent = (content) => {
    const root = document.querySelector('#root');
    root.innerHTML = content.render();
    content.init && content.init();
    prevContent && prevContent.destroy && prevContent.destroy();
    prevContent = content;
};

const navigate = (e) => {
    const {
        target: {
            dataset: { route: route },
        },
    } = e;
    router.navigate(`${route}`);
};

router
    .on({
        '/': () => setContent(new Home()),
        '/sobre-mi': () => setContent(new AboutMe()),
        '/dermatologia-integrativa': () =>
            setContent(new IntegrativeDermatology()),
        '/consulta': () => setContent(new Appointment()),
        '/programa-grupal': () => setContent(new GroupalProgram()),
        '/contacto': () => setContent(new Contact()),
    })
    .resolve();

const desktopMenu = document.querySelector('#desktop-menu');
desktopMenu.addEventListener('click', navigate);
const mobileMenuToggle = document.querySelector('#mobile-menu__toggle');
const mobileMenu = document.querySelector('#mobile-menu');
mobileMenu.addEventListener('click', (e) => {
    navigate(e);
    mobileMenuToggle.checked = false;
});
const headerTitle = document.querySelector('#header-title');
headerTitle.addEventListener('click', navigate);
