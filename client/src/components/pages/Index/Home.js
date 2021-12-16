import "../Index/Home.css";
import ImgSection1 from "../../../assets/2-5-pie.png";
import Icon1 from "../../../assets/ico1.png";
import Icon2 from "../../../assets/ico2.png";
import Icon3 from "../../../assets/ico3.png";
import Icon4 from "../../../assets/ico4.png";

function Home() {
  return (
    <div>
      <section className="hero1">
        <div>
          <h1>Marchando</h1>
          <p>¡Si no tienes reserva, por lo menos ten Marchando!</p>
        </div>
      </section>

      <section className="hero4">
        <div className="grafico">
          <div class="section-img">
            <img className="imgHero3" src={ImgSection1} alt="ImgSection1" />
          </div>

          <div className="text">
            <p>
              No pierdas parte del pastel de tu negocio gestionando de manera
              eficiente las cancelaciones de última hora.
            </p>
          </div>
        </div>

        <div className="icogroup">
          <div className="ico-container">
            <img className="ico" src={Icon1} alt="Icon1" />
            <div className="text-container">
              <p>Llega a un mayor número de clientes potenciales.</p>
            </div>
          </div>

          <div className="ico-container">
            <img className="ico" src={Icon2} alt="Icon2" />

            <div className="text-container">
              <p>Cubre cancelaciones de última hora.</p>
            </div>
          </div>

          <div className="ico-container">
            <img className="ico" src={Icon3} alt="Icon3" />

            <div className="text-container">
              <p>
                Gestionamos la comunicación entre el cliente y el restaurante.
              </p>
            </div>
          </div>

          <div className="ico-container">
            <img className="ico" src={Icon4} alt="Icon4" />

            <div className="text-container">
              <p>No requiere integración adicional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero3 fl-container fl-centerh fl-centerv"></section>

      <section className="heroFooter">
        <p className="textFooter">
          {" "}
          Desarrollado en Ironhack con ❤️ por Alex Alcaide & JM Sánchez Diezma
        </p>
      </section>
    </div>
  );
}

export default Home;
