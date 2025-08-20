import React from "react";
import BarraBusqueda from "../componentes/BarraBusqueda";
import TarjetaClima from "../componentes/TarjetaClima";
import { useTema } from "../contexts/TemaContexto";

function Inicio() {
  const { alternarTema } = useTema();

  return (
    <div>
      <h1>Pronóstico del Clima</h1>
      <button onClick={alternarTema}>Alternar Tema</button>
      <BarraBusqueda />
      <TarjetaClima />
    </div>
  );
}

export default Inicio;
