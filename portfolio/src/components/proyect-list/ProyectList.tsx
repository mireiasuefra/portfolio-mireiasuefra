import "./ProyectList.scss";
import React from "react";
import Footer from "../footer/Footer";

interface ProyectListProps {}

function ProyectList(props: ProyectListProps) {
  return (
    <div>
      <section className="list">
        <h3 className="list__title">My proyects:</h3>
        <p className="list__text">
          Here you can see some of the things I have built
        </p>

        <ul>aqui va la lista de proyectos </ul>
      </section>
      <Footer />
    </div>
  );
}

export default ProyectList;
