import React, { createContext, useState, useContext } from "react";

const UnidadContexto = createContext();

export const ProveedorUnidad = ({ children }) => {
  const [unidad, setUnidad] = useState("metric");

  const alternarUnidad = () => {
    setUnidad((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  return (
    <UnidadContexto.Provider value={{ unidad, alternarUnidad }}>
      {children}
    </UnidadContexto.Provider>
  );
};

export const useUnidad = () => useContext(UnidadContexto);
