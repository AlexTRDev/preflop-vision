import { useState } from "react";
import useMatrixStore from "../store/matrixStore";

const ColorPickerComponent = () => {
  const [color, setColor] = useState(undefined);
  const [description, setDescription] = useState("");
  const addLegend = useMatrixStore((state) => state.addLegend);

  const handleAddLegend = async () => {
    if (description) {
      await addLegend({ color, description });
      setDescription("");
      setColor(undefined); // Resetear el color a un valor por defecto
    }
  };

  return (
    <div className="p-4">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border rounded"
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded ml-2"
      />
      <button
        onClick={handleAddLegend}
        className="btn btn-outline text-success btn-success btn-sm ml-2"
      >
        Agregar Leyenda
      </button>
    </div>
  );
};

export default ColorPickerComponent;
