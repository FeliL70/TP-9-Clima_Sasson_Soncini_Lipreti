import React from "react";
import { ProveedorTema } from "./contexts/TemaContexto";
import { ProveedorUnidad } from "./contexts/UnidadContexto";
import { ProveedorClima } from "./contexts/ClimaContexto";
import Inicio from "./paginas/Inicio";

function App() {
  return (
    <ProveedorTema>
      <ProveedorUnidad>
        <ProveedorClima>
          <Inicio />
        </ProveedorClima>
      </ProveedorUnidad>
    </ProveedorTema>
  );
}

export default App;

