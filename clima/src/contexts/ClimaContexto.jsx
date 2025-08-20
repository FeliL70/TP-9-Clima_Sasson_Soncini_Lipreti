import React, { createContext, useState, useContext } from "react";

const ClimaContexto = createContext();

export const ProveedorClima = ({ children }) => {
  const [climaActual, setClimaActual] = useState(null);

  return (
    <ClimaContexto.Provider value={{ climaActual, setClimaActual }}>
      {children}
    </ClimaContexto.Provider>
  );
};

export const useClima = () => useContext(ClimaContexto);