import React, { createContext, useState, useContext } from "react";

const TemaContexto = createContext();

export const ProveedorTema = ({ children }) => {
  const [tema, setTema] = useState("claro");

  const alternarTema = () => {
    setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));
  };

  return (
    <TemaContexto.Provider value={{ tema, alternarTema }}>
      <div className={tema === "claro" ? "tema-claro" : "tema-oscuro"}>
        {children}
      </div>
    </TemaContexto.Provider>
  );
};

export const useTema = () => useContext(TemaContexto);
