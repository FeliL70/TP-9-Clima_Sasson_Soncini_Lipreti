import React, { useState } from "react";
import { useClima } from "../../contexts/ClimaContexto";
import { useUnidad } from "../../contexts/UnidadContexto";

const API_KEY = "7c17bdf5e8359ccaf2568d591bb04201";

function BarraBusqueda() {
  const [ciudad, setCiudad] = useState("");
  const { setClimaActual } = useClima();
  const { unidad } = useUnidad();

  const buscarClima = async () => {
    if (!ciudad) return;
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=${unidad}&lang=es`
      );
      const datos = await respuesta.json();
      setClimaActual(datos);
    } catch (error) {
      console.error("Error al obtener clima:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresar ciudad..."
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      <button onClick={buscarClima}>Buscar</button>
    </div>
  );
}

export default BarraBusqueda;
