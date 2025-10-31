import React, { useState } from "react";
import InfoBox, { InfoBoxSection } from "./components/InfoBox/InfoBox";
import Map from "./components/Map/Map";
import "./App.css";

const App: React.FC = () => {
  const [layersVisibility, setLayersVisibility] = useState<Record<string, boolean>>({
    region1: true,
    region2: true,
    region3: true,
    region4: true,
    inundaciones_conagua: true,
  });

  const handleToggle = (id: string) => {
    setLayersVisibility(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Paleta + LABELS que quieres ver en el panel
  const sections: InfoBoxSection[] = [
    {
      title: "Capas del Proyecto",
      items: [
        { id: "region1", label: "Región 1 - Huejutla",      color: "#70613F", shape: "square", switch: true, checked: layersVisibility["region1"] },
        { id: "region2", label: "Región 2 - Zacualtipán",   color: "#9D792A", shape: "square", switch: true, checked: layersVisibility["region2"] },
        { id: "region3", label: "Región 3 - Zimapán",       color: "#DEB52D", shape: "square", switch: true, checked: layersVisibility["region3"] },
        { id: "region4", label: "Región 4 - Tulancingo",    color: "#BDAA76", shape: "square", switch: true, checked: layersVisibility["region4"] },
        { id: "inundaciones_conagua", label: "Inundaciones (Fuente: CONAGUA)", color: "#9B1B3E", shape: "circle", switch: true, checked: layersVisibility["inundaciones_conagua"] },
      ],
    },
  ];

  return (
    <div className="App">
      <InfoBox
        title="Atención por lluvias en el estado de Hidalgo - SEGOB (v-labels)"
        sections={sections}
        onToggle={handleToggle}
      />
      <Map layersVisibility={layersVisibility} />
    </div>
  );
};

export default App;
