import React, { useEffect, useState } from "react";
import { useClima } from "../../contexts/ClimaContexto";
import { useUnidad } from "../../contexts/UnidadContexto";

const API_KEY = "7c17bdf5e8359ccaf2568d591bb04201";

function Pronostico5Dias() {
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

        if (!datos.list) return;

        // Elegir 1 dato por día (más cercano a las 12:00)
        const diasMap = {};
        datos.list.forEach((item) => {
          const [fecha, horaStr] = item.dt_txt.split(" ");
          const hora = parseInt(horaStr.split(":")[0], 10);

          if (
            !diasMap[fecha] ||
            Math.abs(hora - 12) <
              Math.abs(
                parseInt(diasMap[fecha].dt_txt.split(" ")[1].split(":")[0], 10) -
                  12
              )
          ) {
            diasMap[fecha] = item;
          }
        });

        setPronostico(Object.values(diasMap).slice(0, 5));
      } catch (error) {
        console.error("Error al obtener pronóstico de 5 días:", error);
      }
    };

    cargarPronostico();
  }, [climaActual, unidad]);

  if (!climaActual) return null;

  return (
    <div className="contenedor-pronostico-5dias">
      {pronostico.map((dia, index) => {
        const fecha = new Date(dia.dt * 1000);
        const nombreDia = fecha.toLocaleDateString("es-ES", { weekday: "short" });
        return (
          <div key={index} className="tarjeta-dia">
            <p>{nombreDia}</p>
            <img
              src={`https://openweathermap.org/img/wn/${dia.weather[0].icon}@2x.png`}
              alt={dia.weather[0].description}
            />
            <p>{dia.weather[0].main}</p>
            <p>
              {Math.round(dia.main.temp)}° {unidad === "metric" ? "C" : "F"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Pronostico5Dias;






