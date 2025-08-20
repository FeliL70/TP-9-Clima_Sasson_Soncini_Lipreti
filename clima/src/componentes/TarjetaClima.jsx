import React from "react";
import { useClima } from "../contexts/ClimaContexto";
import { useUnidad } from "../contexts/UnidadContexto";

function TarjetaClima() {
  const { climaActual } = useClima();
  const { unidad, alternarUnidad } = useUnidad();

  if (!climaActual) return <p>No hay datos aún. Busca una ciudad.</p>;

  return (
    <div className="tarjeta">
      <h2>{climaActual.name}</h2>
      <p>{climaActual.weather[0].description}</p>
      <p>
        Temperatura: {climaActual.main.temp}° {unidad === "metric" ? "C" : "F"}
      </p>
      <button onClick={alternarUnidad}>
        Cambiar a {unidad === "metric" ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
}

export default TarjetaClima;
