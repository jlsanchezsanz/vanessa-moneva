import { animateImages, hideTitleOnScroll } from '../utils/scroll';

export class Contact {
    init = () => {
        hideTitleOnScroll();
        animateImages();
    };

    render = () => {
        return `
            <section class="section">
                <div class="section__half section__half--left">
                    <img src="imgs/contacto.jpg" alt="Contacto" class="section__img" />
                </div>
                <div class="section__half section__half--right">
                    <h1 class="section__title">Contacto</h1>

                    <div class="section__content">
                        <form class="form">
                            <div class="form__row">
                                <div class="form__group">
                                    <label class="form__label" for="name"
                                        >Nombre</label
                                    >
                                    <input
                                        class="form__control"
                                        type="text"
                                        name="name"
                                        id="name"
                                    />
                                </div>
                                <div class="form__group">
                                    <label class="form__label" for="lastName"
                                        >Apellidos</label
                                    >
                                    <input
                                        class="form__control"
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                    />
                                </div>
                            </div>
                            <div class="form__row">
                                <div class="form__group">
                                    <label class="form__label" for="email"
                                        >Email</label
                                    >
                                    <input
                                        class="form__control"
                                        type="text"
                                        name="email"
                                        id="email"
                                    />
                                </div>
                                <div class="form__group">
                                    <label
                                        class="form__label"
                                        for="confirm-email"
                                        >Confirma tu email</label
                                    >
                                    <input
                                        class="form__control"
                                        type="text"
                                        name="confirm-email"
                                        id="confirm-email"
                                    />
                                </div>
                            </div>
                            <div class="form__row">
                                <div class="form__group">
                                    <label class="form__label" for="reason"
                                        >Razón</label
                                    >
                                    <select
                                        class="form__select"
                                        name="reason"
                                        id="reason"
                                    >
                                        <option value="Psoriasis">
                                            Psoriasis
                                        </option>
                                        <option value="Dermatitis seborreica">
                                            Dermatitis seborreica
                                        </option>
                                        <option value="Rosácea">Rosácea</option>
                                        <option value="Acné">Acné</option>
                                        <option value="Dermatitis atópica">
                                            Dermatitis atópica
                                        </option>
                                        <option value="Eccemas">Eccemas</option>
                                        <option
                                            value="Caída de pelo (alopecias, efluvios"
                                        >
                                            Caída de pelo (alopecias, efluvios)
                                        </option>
                                        <option value="Cuidados de la piel">
                                            Cuidados de la piel
                                        </option>
                                        <option
                                            value="Programa grupal de dermatología consciente"
                                        >
                                            Programa grupal de dermatología
                                            consciente
                                        </option>
                                        <option value="Otros">Otros</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form__row">
                                <div class="form__group">
                                    <label class="form__label" for="comments"
                                        >Comentarios</label
                                    >
                                    <textarea
                                        class="form__control"
                                        name="comments"
                                        id="comments"
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                </div>
                            </div>
                            <input
                                class="btn"
                                type="submit"
                                value="Enviar"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
      `;
    };
}
