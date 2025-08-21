import React, { useState } from "react";
import BarraBusqueda from "../componentes/BarraBusqueda/BarraBusqueda";
import TarjetaClima from "../componentes/TarjetaClima";
import PronosticoHoras from "../componentes/PronosticoHoras";
import Pronostico5Dias from "../componentes/Pronostico5Dias";
import OtrasCiudades from "../componentes/OtrasCiudades";

import { useTema } from "../contexts/TemaContexto";

function Inicio() {
  const { alternarTema } = useTema();
  const [ciudad, setCiudad] = useState(null);

  return (
    <div>
      <h1>Pronóstico del Clima</h1>
      <button onClick={alternarTema}>Alternar Tema</button>

      <OtrasCiudades />

      {/* 👇 La barra de búsqueda actualiza la ciudad */}
      <BarraBusqueda onBuscar={setCiudad} />

      {/* 👇 Se renderiza solo si hay ciudad */}
      {ciudad && (
        <>
          <TarjetaClima ciudad={ciudad} />
          <PronosticoHoras ciudad={ciudad} />
          <Pronostico5Dias ciudad={ciudad} />
        </>
      )}
    </div>
  );
}

export default Inicio;



