import React, { useState } from "react";
import BarraBusqueda from "../componentes/BarraBusqueda/BarraBusqueda";
import TarjetaClima from "../componentes/TarjetaClima/TarjetaClima";
import PronosticoHoras from "../componentes/PronosticoHoras/PronosticoHoras";
import Pronostico5Dias from "../componentes/Pronostico5Dias/Pronostico5Dias";
import OtrasCiudades from "../componentes/OtrasCiudades/OtrasCiudades";

import { useTema } from "../contexts/TemaContexto";

function Inicio() {
  const { alternarTema } = useTema();
  const [ciudad, setCiudad] = useState(null);

  return (
    <div>
      <h1>Pronóstico del Clima</h1>
      <button onClick={alternarTema}>Alternar Tema</button>

      <OtrasCiudades />

      <BarraBusqueda onBuscar={setCiudad} />

          <TarjetaClima ciudad={ciudad} />
          <PronosticoHoras ciudad={ciudad} />
          <Pronostico5Dias ciudad={ciudad} />
    </div>
  );
}

export default Inicio;



