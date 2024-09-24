import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import imgPoker from "../assets/poker.jpg";

/* eslint-disable react/no-unescaped-entities */
const HeroComponent = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${imgPoker})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">¡Prepárate para el Desafío!</h1>
            <p className="py-6 x">
              "El éxito en el póker no se trata solo de las cartas que te
              reparten, sino de cómo juegas esas cartas. Cada Spin & Go es una
              nueva oportunidad. La paciencia, el análisis y la valentía son las
              claves para conquistar las mesas.
              <br /> ¡Juega con estrategia y gana!"
            </p>
            <NavLink to="preflop-vision/FULL/3H_BTN_15+_null_null">
              <button className="btn btn-neutral btn-outline ">
                Empieza tu Aventura
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HeroComponent;
