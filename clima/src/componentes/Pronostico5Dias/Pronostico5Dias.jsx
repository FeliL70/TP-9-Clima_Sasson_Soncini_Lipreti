import React, { useEffect, useState } from "react";

function Pronostico5Dias({ ciudad }) {
  const [pronostico, setPronostico] = useState([]);

  useEffect(() => {
    if (!ciudad) return;

    const fetchPronostico = async () => {
      try {
        const apiKey = "7c17bdf5e8359ccaf2568d591bb04201"; // 👈 poné tu API Key de OpenWeather
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

        const res = await fetch(url);
        const data = await res.json();

        // Filtrar solo 1 dato por día (aprox 12:00)
        const dias = data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );

        setPronostico(dias);
      } catch (err) {
        console.error("Error al obtener pronóstico de 5 días:", err);
      }
    };

    fetchPronostico();
  }, [ciudad]);

  return (
    <div className="pronostico-5dias">
      <h2>Pronóstico de 5 días</h2>
      <div className="contenedor-dias">
        {pronostico.map((dia, index) => {
          const fecha = new Date(dia.dt * 1000);
          const nombreDia = fecha.toLocaleDateString("es-ES", {
            weekday: "short",
          });

          return (
            <div key={index} className="tarjeta-dia">
              <p>{nombreDia}</p>
              <img
                src={`https://openweathermap.org/img/wn/${dia.weather[0].icon}@2x.png`}
                alt={dia.weather[0].description}
              />
              <p>{Math.round(dia.main.temp)}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pronostico5Dias;

