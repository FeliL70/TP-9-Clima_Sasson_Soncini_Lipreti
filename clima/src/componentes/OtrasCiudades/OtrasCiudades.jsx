import React, { useEffect, useState } from "react";

const API_KEY = "7c17bdf5e8359ccaf2568d591bb04201";

const ciudades = [
  { nombre: "New York", pais: "US" },
  { nombre: "Copenhagen", pais: "DK" },
  { nombre: "Ho Chi Minh City", pais: "VN" },
];

function OtrasCiudades() {
  const [climas, setClimas] = useState([]);

  useEffect(() => {
    const cargarClimas = async () => {
      try {
        const promesas = ciudades.map(async (ciudad) => {
          const resp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.nombre},${ciudad.pais}&appid=${API_KEY}&units=metric&lang=es`
          );
          return await resp.json();
        });

        const resultados = await Promise.all(promesas);
        setClimas(resultados);
      } catch (error) {
        console.error("Error al cargar otras ciudades:", error);
      }
    };

    cargarClimas();
  }, []);

  return (
    <div className="otras-ciudades">
      <h2>Otras ciudades grandes</h2>
      <div className="lista-ciudades">
        {climas.map((ciudad, index) => (
          <div key={index} className="tarjeta-ciudad">
            <p className="pais">{ciudad.sys?.country}</p>
            <h3>{ciudad.name}</h3>
            <img
              src={`https://openweathermap.org/img/wn/${ciudad.weather?.[0].icon}@2x.png`}
              alt={ciudad.weather?.[0].description}
            />
            <p>{ciudad.weather?.[0].description}</p>
            <p className="temp">{Math.round(ciudad.main?.temp)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtrasCiudades;
