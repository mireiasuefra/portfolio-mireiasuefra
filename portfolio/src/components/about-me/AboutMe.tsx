import "./AboutMe.scss";
import React from "react";

import logo from "../../images/mireia.jpeg";
import Footer from "../footer/Footer";

function AboutMe() {
  return (
    <section>
      <div className="me">
        <div className="me__container-image">
          <img className="me__image" src={logo} alt="mireia-logo"></img>
        </div>
        <h3 className="me__title">About me:</h3>
        <p className="me__text">
          Soy Mireia y soy una desarrolladora frontend junior. Tengo experiencia
          en React, Javascript, HTML, CSS y SASS. Trabajo con metodologías
          ágiles e intento aplicar las buenas prácticas a la hora de programar.
          Mi formación previa es en el campo de lo social, donde trabajé como
          educadora social e integradora social.
        </p>
        <p className="me__text">
          Siempre he estado ligada al mundo de la programación ya que en mi
          entorno cuento con varias personas que se dedican al desarrollo web.
          Mi primer contacto con la programación fue en unas prácticas que
          realicé con jóvenes de Madrid. Hacíamos alfabetización digital a
          personas mayores y en nuestros tiempos libres jugábamos con HTML y
          CSS.
        </p>
        <p className="me__text">
          En el verano de 2021 quise explorar más y realicé diversos cursos
          sobre programación web, HTML, CSS y JavaScript. Me gustó demasiado
          como para dejarlo ahí y me convencí de dar un giro a mi carrera y
          apostar por este campo. Decidí apuntarme al Bootcamp de Adalab, una
          escuela de formación digital para mujeres de la que ya tenía buenas
          referencias. El temario que ofertaban se ajustaba a lo que estaba
          buscando.
        </p>
        <p className="me__text">
          Fue en Adalab donde realmente me enamoré de la programación.
          Comenzamos de nuevo con HTML y CSS, pero en más profundidad. ¡Poder
          dar vida a páginas estáticas es todo un hito cuando estás empezando!
          Te crees un "senior" de la programación :). Reconozco que la parte de
          maquetación es de mis favoritas, me gusta mucho dar forma a los
          diseños que me dan o a despertar mi lado creativo.
        </p>
        <p className="me__text">
          Después de esto seguimos con JavaScript y React, lo de "senior" ya no
          lo tenía tan claro :). Pero cuando le empiezas a pillar el truco y das
          dinamismo a esas páginas, sientes que (aunque sabes que tienes mucho
          más que aprender) te comes el mundo. Madre mía lo bien que sienta
          cuando todo acaba de funcionar.
        </p>
        <p className="me__text">
          Aunque tengo muchos años de experiencia laboral en otros ámbitos y he
          aprendido bien lo que es el trabajo en equipo no habia tenído la
          oportunidad de trabajar con metodologías ágiles. En el bootcamp
          aprendimos a gestionarnos con Scrum. En cada módulo tenía un equipo
          diferente y teníamos que realizar un proyecto. Dividiamos el trabajo
          por sprint, hacíamos las daylis a diario, también teníamos la demo del
          proyecto, etc. Una de las cosas que más me gustaron de trabajar con
          compañeras es el pair programing, cuando estás atascada en algo
          siempre se dice que cuatro ojos ven más que dos.
        </p>
        <p className="me__text">
          Después de terminar el bootcamp he seguido formándome por mi cuenta,
          he realizado distintos proyectos intentando superarme cada vez un
          poquito más. He investigado sobre distintas librerías como Material
          UI, Prime, Bootstrap, también hice un proyecto con Vue.js (quería
          saber como funcionaba otro framework).
        </p>
        <p className="me__text">
          En este momento estoy estudiando unos cursos de Typescript de
          OpenBootcamp y cuando lo acabe me gustaría hacer el curso sobre
          testing que también tienen.
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default AboutMe;
