import React, { useEffect, useState } from "react";
import { useClima } from "../../contexts/ClimaContexto";
import { useUnidad } from "../../contexts/UnidadContexto";

const API_KEY = "7c17bdf5e8359ccaf2568d591bb04201";

function PronosticoHoras() {
  const { climaActual } = useClima();
  const { unidad } = useUnidad();
  const [pronostico, setPronostico] = useState([]);

  useEffect(() => {
    if (!climaActual) return;

    const cargarPronostico = async () => {
      try {
        const respuesta = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${climaActual.name}&appid=${API_KEY}&units=${unidad}&lang=es`
        );
        const datos = await respuesta.json();
        // Tomamos solo las próximas 8 mediciones (24 horas aprox)
        setPronostico(datos.list.slice(0, 8));
      } catch (error) {
        console.error("Error al obtener pronóstico:", error);
      }
    };

    cargarPronostico();
  }, [climaActual, unidad]);

  if (!climaActual) return null;

  return (
    <div className="contenedor-pronostico">
      {pronostico.map((item, index) => {
        const hora = new Date(item.dt * 1000).toLocaleTimeString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
        });
        return (
          <div key={index} className="tarjeta-hora">
            <p>{hora}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />
            <p>{item.weather[0].main}</p>
            <p>
              {Math.round(item.main.temp)}° {unidad === "metric" ? "C" : "F"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default PronosticoHoras;
