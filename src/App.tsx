import React, { useState } from "react";
import InfoBox, { InfoBoxSection } from "./components/InfoBox/InfoBox";
import Map from "./components/Map/Map";
import "./App.css";

const App: React.FC = () => {

  const [layersVisibility, setLayersVisibility] = useState<Record<string, boolean>>({
    // 11 programas de la capa puntos_cfe_cdmx
    cfe_aeropuerto: true,
    cfe_clinicas: true,
    cfe_colonias_perifericas: true,
    cfe_escuelas: true,
    cfe_mi_calle: true,
    cfe_pilares: true,
    cfe_poste_c5: true,
    cfe_sitios_publicos: true,
    cfe_transporte: true,
    cfe_unidades_habitacionales: true,
    cfe_utopias: true,
    // capa 2: puntos cfe “genérica”
    cfe_inmuebles: true,
    // capa 3: ageb TIC
    ageb_tic: true,
  });

  const handleToggle = (id: string) => {
    setLayersVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // 👉 Panel
  const sections: InfoBoxSection[] = [
    {
      title: "Puntos CFE – CDMX",
      items: [
        { id: "cfe_aeropuerto", label: "Aeropuerto", color: "#ff6b35", shape: "circle", switch: true, checked: layersVisibility["cfe_aeropuerto"] },
        { id: "cfe_clinicas", label: "Clínicas, Centros de Salud y Hospitales", color: "#007bff", shape: "circle", switch: true, checked: layersVisibility["cfe_clinicas"] },
        { id: "cfe_colonias_perifericas", label: "Colonias Periféricas", color: "#9b2247", shape: "circle", switch: true, checked: layersVisibility["cfe_colonias_perifericas"] },
        { id: "cfe_escuelas", label: "Escuelas", color: "#ffb703", shape: "circle", switch: true, checked: layersVisibility["cfe_escuelas"] },
        { id: "cfe_mi_calle", label: "Mi Calle", color: "#2a9d8f", shape: "circle", switch: true, checked: layersVisibility["cfe_mi_calle"] },
        { id: "cfe_pilares", label: "Pilares", color: "#6a4c93", shape: "circle", switch: true, checked: layersVisibility["cfe_pilares"] },
        { id: "cfe_poste_c5", label: "Poste C5", color: "#e76f51", shape: "circle", switch: true, checked: layersVisibility["cfe_poste_c5"] },
        { id: "cfe_sitios_publicos", label: "Sitios Públicos", color: "#264653", shape: "circle", switch: true, checked: layersVisibility["cfe_sitios_publicos"] },
        { id: "cfe_transporte", label: "Transporte", color: "#f4a261", shape: "circle", switch: true, checked: layersVisibility["cfe_transporte"] },
        { id: "cfe_unidades_habitacionales", label: "Unidades Habitacionales", color: "#8ecae6", shape: "circle", switch: true, checked: layersVisibility["cfe_unidades_habitacionales"] },
        { id: "cfe_utopias", label: "Utopías", color: "#118ab2", shape: "circle", switch: true, checked: layersVisibility["cfe_utopias"] },
        // la segunda capa de puntos (color fijo)
        { id: "cfe_inmuebles", label: "Puntos CFE (Inmuebles)", color: "#9b2247", shape: "square", switch: true, checked: layersVisibility["cfe_inmuebles"] },
      ],
    },
    {
      title: "Datos base – CDMX",
      items: [
        { id: "ageb_tic", label: "AGEB TIC (Viviendas con acceso)", color: "#50b498", shape: "square", switch: true, checked: layersVisibility["ageb_tic"] },
      ],
    },
  ];

  return (
    <div className="App">
      <InfoBox
        title="Red CFE e indicadores TIC – Ciudad de México"
        subtitle="Mapa interactivo CDMX"
        sections={sections}
        onToggle={handleToggle}
      />
      <Map layersVisibility={layersVisibility} />
    </div>
  );
};

export default App;
