import { hideTitleOnScroll } from '../utils/scroll';

export class Appointment {
    init = () => {
        hideTitleOnScroll();
    };

    render = () => {
        return `
            <section class="section">
                <div class="section__half section__half--left"></div>
                <div class="section__half section__half--right">
                    <h1 class="section__title">Consulta</h1>

                    <div class="section__content">
                        <div class="section__block">
                            <h2 class="section__secondary-title">Estructura de la consulta</h2>
                            <p class="section__paragraph">
                                La consulta es online, eso te ofrece tiempo (al no tener que
                                desplazarte) y que puedas elegir un entorno donde sientas confort y
                                tranquilidad.
                            </p>

                            <p class="section__paragraph">
                                A diferencia de otras consultas medicas para poder hacer una
                                dermatología consciente necesitaremos comunicación y tiempo. Es
                                importante que busques un lugar y un horario tranquilo que te
                                permita conectarte y recibir.
                            </p>

                            <h3 class="section__tertiary-title">Primera consulta</h3>
                            <p class="section__paragraph">
                                El objetivo principal de esta consulta es conocerte. También
                                hablaremos de expectativas y valores personales para poder
                                personalizar el tratamiento al máximo.
                            </p>

                            <p class="section__paragraph">
                                Durante la consulta haremos una entrevista en la que iremos
                                evaluando distintos aspectos que influyen en la salud cutánea, para
                                localizar los puntos conflictivos, así como la manera de
                                redirigirlos a algo mas positivo y saludable para ti y tu piel.
                            </p>

                            <p class="section__paragraph">
                                Por último, explicaremos las pautas básicas del tratamiento, así
                                como los puntos a mejorar. Recibirás un documento con toda la
                                información en unos días. Mantendremos contacto hasta la siguiente
                                revisión por si hubiera alguna duda o necesitaras algún apoyo extra.
                            </p>

                            <h3 class="section__tertiary-title">Siguientes consultas</h3>

                            <p class="section__paragraph">
                                En las siguientes revisiones iremos implementando gradualmente el
                                tratamiento de acuerdo a tus progresos, capacidad de adaptación y
                                mejora de la piel.
                            </p>
                            <p class="section__paragraph">
                                Todo aquello que aprendas y descubras sobre los autocuidados podrás
                                volver aplicarlo siempre. Irás ganando mas autonomía y
                                autoconocimiento de forma progresiva. El tratamiento médico se irá
                                ajustando según nos lo vaya pidiendo tu piel.
                            </p>

                            <p class="section__paragraph">
                                Durante todo el proceso mantendremos comunicación tanto por correo
                                electrónico como por mensajería móvil.
                            </p>

                            <h3 class="section__tertiary-title">Antes de la cita</h3>

                            <p class="section__paragraph">
                                Para poder dedicarte el mayor tiempo posible pediremos una serie de
                                información previa a la cita:
                            </p>
                            <ul class="section__list">
                                <li>
                                Adjuntar fotos de la piel según estas indicaciones. (documento
                                para descargar)
                                </li>
                                <li>
                                Rellenar un cuestionario básico de salud y el formulario de
                                protección de datos. (documentos para descargar)
                                </li>
                            </ul>

                            <p class="section__paragraph">
                                No es imprescindible, pero si muy útil, ya que la intención es poder
                                utilizar TODOS los minutos de la visita para TI.
                            </p>

                            <h3 class="section__tertiary-title">Pide cita</h3>

                            <p class="section__paragraph">
                                Primera consulta: la duración de esta primera consulta es de unos 90
                                minutos aproximadamente.
                            </p>

                            <p class="section__paragraph">
                                Revisiones: la duración de las revisiones es de unos 60 minutos
                                aproximadamente.
                            </p>

                            <h3 class="section__tertiary-title">Proceso</h3>

                            <p class="section__paragraph">
                                El proceso para llegar a una piel saludable consta de varias etapas.
                            </p>

                            <ul class="section__list">
                                <li>
                                La primera se basa en el autoconocimiento. La mayoría de nosotros
                                vivimos desconectados de nuestro cuerpo, de nuestras emociones e
                                incluso de nuestras necesidades físicas. Nuestro cuerpo, nuestra
                                piel cambian cada día y aprender a reconectar es fundamental para
                                que el proceso de sanación sea efectivo. Este pequeño paso inicial
                                sentará las bases del trabajo futuro y nos ayudará a prevenir
                                recaídas.
                                </li>

                                <li>
                                La segunda etapa es la de los cambios. Empezaremos a modificar
                                conductas, hábitos que <strong>son la base</strong> de nuestra
                                salud. Aunque lo fundamental es construir desde dentro con hábitos
                                saludables, en esta etapa podemos empezar a utilizar suplementos y
                                medicinas para ayudar a nuestro cuerpo a ajustarse. Muchas veces
                                en esta fase inicial del proceso de sanación puede haber un
                                pequeño empeoramiento. Es normal que nuestra piel reaccione a los
                                cambios de esta manera, aunque sean elementos nocivos lo que
                                estamos retirando, se altera el equilibrio de nuestro cuerpo que
                                ya estaba acostumbrado a ellos. La piel es un órgano detoxificador
                                y esta etapa de aclarado y limpieza hay que hacerla con mucho
                                cuidado.
                                </li>

                                <li>
                                La tercera etapa se centra en la recuperación de la salud,
                                mantendremos e implementaremos cambios e iremos ajustado el
                                tratamiento según vuestras necesidades. El objetivo es producir un
                                cambio interno de tal forma que podamos comenzar a retirar
                                tratamientos mas potentes y ayudar a que la piel se ajuste con
                                productos mas suaves.
                                </li>

                                <li>
                                La cuarta y ultima etapa es el mantenimiento. Una vez conseguida
                                la estabilidad interna y externa que se reflejará en una piel
                                saludable es importante no relajarse. Mantener los cambios
                                positivos que nos brindan salud y estar alerta a pequeños
                                desajustes para poder afrontarlos antes de que representen un
                                problema. Tu piel es el reflejo de tu interior, cuando se inflama
                                nos está diciendo que existe un problema interno desde hace mucho
                                mas tiempo.
                                </li>
                            </ul>

                            <p class="section__paragraph">
                                Es importante durante todo este proceso ser bondadoso y gentil con
                                uno mismo, date tiempo a ti y a tu cuerpo. Los cambios se generan
                                con constancia. No te exijas demasiado, no tengas prisa, ni te
                                desanimes si un día flojeas y vuelves a los viejos hábitos. Lo
                                importante es recordar siempre tu objetivo, que es la salud de tu
                                piel, perdonarte, quererte y retomarlo todo en cuanto te des cuenta
                                de que te alejaste del camino de conecta contigo mismo y con tu
                                piel.
                            </p>

                            <p class="section__paragraph">
                                Es muy importante ser consciente del factor tiempo, si buscamos
                                soluciones inmediatas y rápidas no serán duraderas ni profundas.
                            </p>

                            <h3 class="section__tertiary-title">Básicos</h3>

                            <p class="section__paragraph">
                                La consulta es absolutamente <strong>individualizada</strong>.
                                Pensada por y para ti en este momento.
                            </p>

                            <p class="section__paragraph">
                                La medicina que ejerzo <strong>no es paternalista</strong> , no
                                impongo tratamientos. Creo en ti, en tu autonomía y en que sólo tu
                                conoces tus circunstancias individuales.
                            </p>

                            <p class="section__paragraph">
                                <strong>La comunicación</strong> es fundamental, se consensuarán los
                                pros y contras de cada tratamiento y se ofrecerán todas las
                                alternativas disponibles. Al final tu decides.
                                <strong>Mi función es la de guiarte, pero el viaje es tuyo.</strong>
                            </p>

                            <p class="section__paragraph">
                                El enfoque del tratamiento es integrativo y holístico. Esto quiere
                                decir que
                                <strong
                                >se tiene en cuenta al individuo en su totalidad, mente, cuerpo y
                                espíritu.</strong
                                >
                            </p>

                            <p class="section__paragraph">
                                <strong>El objetivo es retomar el equilibrio del cuerpo</strong>,
                                aprender de él y que éste pueda guiarte en el futuro si se dan
                                nuevos desequilibrios.
                            </p>

                            <p class="section__paragraph">
                                El término curación en las enfermedades crónicas puede ser engañoso.
                                Prefiero hablar de recuperación de la salud. El grado de
                                <strong>recuperación de la salud</strong> y la velocidad con la que
                                suceda dependerá de tu biotipo, del grado de desequilibrio previo y
                                del nivel de compromiso con el cambio que adquieras. Cada persona
                                está satisfecha en un punto concreto. Una vez mas mi misión no es
                                llevarte a donde yo querría si no a donde tu quieras.
                            </p>

                            <p class="section__paragraph">
                                Para poder crecer en salud es fundamental que exista una relación de
                                <strong>confianza y sinceridad mutua</strong>.
                            </p>

                            <p class="section__paragraph">
                                Los
                                <strong>precios de las consultas se ajustan a lo que ofrezco</strong
                                >, mi experiencia, mi formación, el tiempo dedicado a cada uno de
                                vosotros y la completa individualización del tratamiento.
                            </p>

                            <p class="section__paragraph">
                                Me comprometo a <strong>dar el máximo con cada paciente</strong> y
                                ayudarte a encontrar el camino para retomar su salud cutánea. Por
                                ello requiero también <strong>compromiso y confianza</strong> para
                                poder llevarte al máximo beneficio.
                            </p>

                            <p class="section__paragraph">
                                <strong
                                >El camino para llegar a una piel sana y bonita comienza y termina
                                en ti.</strong
                                >
                            </p>
                            <p class="section__paragraph">
                                La recuperación de la salud es un trabajo individual, yo simplemente
                                estoy para guiarte ayudarte y darle el empujón médico que tu piel
                                necesita.
                            </p>

                            <p class="section__paragraph">
                                Intento evitar en todo lo posible multiplicar vuestras consultas,
                                pero si considero que en algún momento requieres de la ayuda de otro
                                profesional optaremos por un enfoque
                                <strong>multidisciplinar</strong> y te derivaré al terapeuta
                                correspondiente.
                            </p>

                            <p class="section__paragraph">
                                Nuestro cuerpo necesita <strong>tiempo</strong> para sanarse.
                                Vivimos en una sociedad donde se busca la inmediatez, pero eso nos
                                desconecta de la naturaleza que no sabe de prisas.
                            </p>

                            <p class="section__paragraph">
                                Como médico me comprometo a proteger
                                <strong>la relación médico-paciente</strong>. Cualquier información
                                recibida quedará bajo el secreto profesional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    };
}
