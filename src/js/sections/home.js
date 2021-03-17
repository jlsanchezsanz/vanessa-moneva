import { Sliders } from '../components/slider';

export class Home {
    init = () => {
        this.sliders = new Sliders();
        this.sliders.init();
    };

    destroy = () => {
        this.sliders.destroy();
    };

    render = () => {
        return `
            <div class="slider" id="slider">
                <div
                    class="slider__side slider__side--left"
                    id="left-slider"
                >
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--left">
                                Home
                            </h1>
                            <p class="slider__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cum neque quas alias
                                sapiente illo officiis harum voluptate iusto
                                excepturi libero perspiciatis odio atque
                                nisi impedit, labore dolore ipsum soluta
                                consequuntur.
                            </p>
                            <a href="#" class="slider__view-more"
                                >&xrarr; Ver más</a
                            >
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--left">
                                Sobre <br />Mí
                            </h1>
                            <p class="slider__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cum neque quas alias
                                sapiente illo officiis harum voluptate iusto
                                excepturi libero perspiciatis odio atque
                                nisi impedit, labore dolore ipsum soluta
                                consequuntur.
                            </p>
                            <a href="#" class="slider__view-more"
                                >&xrarr; Ver más</a
                            >
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--left">
                                Dermatología<br />
                                Integrativa
                            </h1>
                            <p class="slider__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cum neque quas alias
                                sapiente illo officiis harum voluptate iusto
                                excepturi libero perspiciatis odio atque
                                nisi impedit, labore dolore ipsum soluta
                                consequuntur.
                            </p>
                            <a href="#" class="slider__view-more"
                                >&xrarr; Ver más</a
                            >
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--left">
                                Consulta
                            </h1>
                            <p class="slider__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cum neque quas alias
                                sapiente illo officiis harum voluptate iusto
                                excepturi libero perspiciatis odio atque
                                nisi impedit, labore dolore ipsum soluta
                                consequuntur.
                            </p>
                            <a href="#" class="slider__view-more"
                                >&xrarr; Ver más</a
                            >
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--left">
                                Programa <br />Grupal
                            </h1>
                            <p class="slider__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cum neque quas alias
                                sapiente illo officiis harum voluptate iusto
                                excepturi libero perspiciatis odio atque
                                nisi impedit, labore dolore ipsum soluta
                                consequuntur.
                            </p>
                            <a href="#" class="slider__view-more"
                                >&xrarr; Ver más</a
                            >
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--left">
                                Contacto
                            </h1>
                            <p class="slider__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cum neque quas alias
                                sapiente illo officiis harum voluptate iusto
                                excepturi libero perspiciatis odio atque
                                nisi impedit, labore dolore ipsum soluta
                                consequuntur.
                            </p>
                            <a href="#" class="slider__view-more"
                                >&xrarr; Ver más</a
                            >
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--left">
                                Blog
                            </h1>
                            <p class="slider__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cum neque quas alias
                                sapiente illo officiis harum voluptate iusto
                                excepturi libero perspiciatis odio atque
                                nisi impedit, labore dolore ipsum soluta
                                consequuntur.
                            </p>
                            <a href="#" class="slider__view-more"
                                >&xrarr; Ver más</a
                            >
                        </div>
                    </div>
                </div>
                <div
                    class="slider__side slider__side--right"
                    id="right-slider"
                >
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--right">
                                <a href="#">Home</a>
                            </h1>
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--right">
                                <a href="#">Sobre <br />Mí</a>
                            </h1>
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--right">
                                <a href="#"
                                    >Dermatología <br />Integrativa</a
                                >
                            </h1>
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--right">
                                <a href="#">Consulta</a>
                            </h1>
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--right">
                                <a href="#">Programa <br />Grupal</a>
                            </h1>
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--right">
                                <a href="#">Contacto</a>
                            </h1>
                        </div>
                    </div>
                    <div class="slider__slide">
                        <div>
                            <h1 class="slider__title slider__title--right">
                                <a href="#">Blog</a>
                            </h1>
                        </div>
                    </div>
                </div>

                <div class="slider__navigation">
                    <button
                        id="prev-button"
                        class="slider__btn slider__btn--prev"
                    >
                        Prev
                    </button>
                    <div class="slider__separator"></div>
                    <button
                        id="next-button"
                        class="slider__btn slider__btn--next"
                    >
                        Next
                    </button>
                </div>

                <ul class="slider__dots" id="slider-dots-container"></ul>
            </div>
        `;
    };
}
