import { animateImages, hideTitleOnScroll } from '../utils/scroll';

export class AboutMe {
    init = () => {
        hideTitleOnScroll();
        animateImages();
    };

    render = () => {
        return `
            <section class="section">
                <div class="section__half section__half--left">
                    <img src="imgs/sobre-mi-1.jpg" alt="Sobre mí" class="section__img" />
                    <img src="imgs/sobre-mi-2.jpg" alt="Sobre mí" class="section__img" />
                    <img src="imgs/sobre-mi-3.jpg" alt="Sobre mí" class="section__img" />
                </div>
                <div class="section__half section__half--right">
                    <h1 class="section__title">Sobre mí</h1>

                    <div class="section__content">
                        <div class="section__block">
                            <h2 class="section__secondary-title">
                                Mi historia
                            </h2>

                            <p class="section__paragraph">
                                Desde que tengo memoria he sufrido de
                                problemas en la piel.
                            </p>
                            <p class="section__paragraph">
                                Sufrir todo esto, el picor, las rojeces,
                                gente preguntándome qué es lo que me pasa en
                                la piel (seguro que también te ha pasado)…
                                me inspiró para convertirme en
                                <i><b>médico</b></i> y especializarme en
                                <i><b>dermatología</b></i
                                >.
                            </p>
                            <p class="section__paragraph">
                                Sé lo complicadas que pueden ser las
                                enfermedades de la piel, lo difícil que
                                puede ser controlarlas. Como nos
                                desesperamos al sentir que sólo estamos
                                aplicando parches, buscando cremas y
                                soluciones que no consiguen sanarnos.
                                Mejorando para luego volver a empeorar en un
                                ciclo difícil de romper.
                            </p>
                            <p class="section__paragraph">
                                El camino para llegar a un equilibrio con mi
                                piel no fue fácil. Al principio fue una
                                lucha en la que me enfrentaba y me enfadaba
                                con mi cuerpo. No entendía porque me pasaba
                                esto a mi y solo intentaba acallar lo que mi
                                cuerpo trataba de comunicarme.
                            </p>
                            <p class="section__paragraph">
                                Mi propia vivencia con la dermatología me
                                llevó a buscar soluciones que profundizan
                                mas en las causas detrás de los brotes para
                                poder prevenirlos.
                            </p>
                            <p class="section__paragraph">
                                Poco a poco me di cuenta de lo
                                <i>equivocado de tapar los síntomas</i> sin
                                escuchar qué es lo que te quieren decir.
                                Como mi estilo de vida y mis rutinas podían
                                influir y por lo tanto cambiar el estado de
                                mi piel.
                            </p>
                            <p class="section__paragraph">
                                Observar estas rutinas se convirtió en un
                                viaje de autoconocimiento. La piel no es el
                                enemigo, si no un amigo que, como hacen los
                                amigos de verdad, me decía las verdades que
                                no quería, pero
                                <i>necesitaba oír</i>.
                            </p>

                            <p class="section__paragraph">
                                Me di cuenta de cuántos hábitos tóxicos
                                normalizados había en mí que me enfermaban e
                                inflamaban.
                            </p>

                            <figure class="section__quote">
                                <blockquote>
                                    <p class="section__paragraph">
                                        <i
                                            >La piel es un reflejo de lo que
                                            sucede en tu interior y para
                                            mejorarla es necesario trabajar
                                            desde dentro.</i
                                        >
                                    </p>
                                </blockquote>
                            </figure>

                            <p class="section__paragraph">
                                Aquello que comes, piensas y haces se
                                refleja en
                                <i>tu piel como un espejo</i> y por tanto
                                para empezar a tratar y mejorar lo primero
                                es atender y comprender esos aspectos
                                fundamentales.
                            </p>

                            <p class="section__paragraph">
                                Pronto los valiosos recursos que el ser
                                médico y dermatóloga me ofrecían se quedaron
                                cortos y necesité buscar algo mas que
                                permitiese tratar desde la prevención y con
                                una aproximación mas natural siempre que
                                fuera posible.
                            </p>

                            <p class="section__paragraph">
                                Profundicé en estudios de nutrición,
                                medicina y cosmética tradicional,
                                meditación… para poder integrar todos los
                                aspectos del individuo, buscando la raíz de
                                los problemas y los detonantes de los brotes
                                para reconducirlos a una vida mas sana y
                                consciente.
                            </p>

                            <figure class="section__quote">
                                <blockquote>
                                    <p class="section__paragraph">
                                        <i
                                            >Una piel sana y bonita es la
                                            consecuencia de un cuerpo
                                            sano.</i
                                        >
                                    </p>
                                </blockquote>
                            </figure>

                            <p class="section__paragraph">
                                Fue por eso que, sin dejar de lado mi
                                formación como
                                <i
                                    >dermatóloga y la medicina basada en la
                                    evidencia</i
                                >
                                sentí la necesidad de ofrecer a mis
                                pacientes herramientas que me ayudaran a
                                sanar la piel con
                                <i>una aproximación mas natural y global</i>
                                juntando lo mejor de los dos mundos,
                                <b>modernidad y tradición</b>,
                                <b>tecnología y naturaleza</b>. Me formé en
                                <i><b>medicina integrativa</b></i> para
                                poder tratar como un todo perfecto piel,
                                mente y cuerpo.
                            </p>
                            <p class="section__paragraph"></p>

                            <figure class="section__quote">
                                <blockquote>
                                    <p class="section__paragraph">
                                        <i
                                            >Las cremas son parte del
                                            tratamiento, pero sólo una
                                            pequeña parte, hay que ir mas
                                            allá y transcender la piel hacia
                                            los cambios que nuestro cuerpo
                                            pide y necesita.</i
                                        >
                                    </p>
                                </blockquote>
                            </figure>

                            <p class="section__paragraph">
                                Siento una gran emoción al poder ayudar a
                                otras personas que quieren recuperar el
                                control de su cuerpo y su salud. No para
                                enseñarles mi camino, si no para
                                acompañarlos en el viaje que los lleve a
                                descubrir el suyo propio a través de una
                                dermatología consciente. Escuchando su
                                cuerpo y entendiéndose como un ser entero y
                                conectado.
                            </p>

                            <p class="section__paragraph">
                                No hay nada mas reconfortante que cuando un
                                paciente me dice que ha mejorado, y cuando
                                no, es una inspiración y un reto para seguir
                                trabajando juntos, investigando y
                                aprendiendo hasta dar con la solución.
                            </p>

                            <p class="section__paragraph">
                                Mi experiencia vital me ha llevado a buscar
                                un tipo de dermatología diferente a la que
                                se ofrece habitualmente. Basada en la
                                persona y no en la enfermedad, que busca
                                prevenir y crear salud.
                                <a href="#"
                                    >Puedes saber más sobre mi método de
                                    trabajo (link)</a
                                >
                            </p>

                            <p class="section__paragraph">
                                La piel es el órgano que une nuestro
                                interior con el mundo, una puerta a nosotros
                                mismos. Nos comunica y nos expresa problemas
                                internos y externos, pide cambios completos.
                                Desandar esas rutinas que nos dañan para
                                encontrar el camino a la sanación no es
                                fácil. Quisiera que tu también puedas
                                experimentar el cambio hacia una piel sana y
                                bonita, que irradie la luz que tu interior
                                quiere proyectar.
                            </p>

                            <p class="section__paragraph">
                                En ese viaje me encantaría acompañarte.
                            </p>

                            <p class="section__paragraph">¿Te apuntas?</p>

                            <p class="section__paragraph">
                                <a href="#">Reserva cita.</a>
                            </p>
                        </div>

                        <div class="section__block">
                            <h2 class="section__secondary-title">
                                Formación
                            </h2>
                            <p class="section__paragraph">
                                Soy médico formada en la universidad
                                complutense de Madrid.
                            </p>
                            <p class="section__paragraph">
                                Me especialicé en dermatología en el
                                Hospital 12 de Octubre.
                            </p>
                            <p class="section__paragraph">
                                Máster en la Universidad Complutense de
                                Madrid de medicina antienvejecimiento.
                            </p>
                            <p class="section__paragraph">
                                Curso de experto en medicina integrativa por
                                la universidad de Minnesota.
                            </p>
                            <p class="section__paragraph">
                                Además durante este tiempo no paro de
                                actualizarme realizando cursos sobre
                                mindfulness, nutrición, ciencias del
                                deporte, aromaterapia, fitoterapia, imágenes
                                guiadas con el fin de dar una atención
                                global, completa y actualizada.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    };
}
