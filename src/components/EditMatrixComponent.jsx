import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColorPickerComponent, LegendListComponent } from "../components";
import useMatrixStore from "../store/matrixStore";

const EditMatrixComponent = () => {
  const { id } = useParams(); // Obtener el ID de la URL
  const navigate = useNavigate();

  // funciones del estado global
  const viewMatrix = useMatrixStore((state) => state.viewMatrix);
  const paintCombo = useMatrixStore((state) => state.paintCombo);
  const toggleComboColor = useMatrixStore((state) => state.toggleComboColor);
  const updateTable = useMatrixStore((state) => state.updateTable);
  // partes del estado global
  const selectedMatrix = useMatrixStore((state) => state.selectedMatrix);
  const selectedColor = useMatrixStore((state) => state.selectedColor);
  const matrizUpdate = useMatrixStore((state) => state.matrizUpdate);
  const leyendasTemp = useMatrixStore((state) => state.leyendasTemp);
  const [isPainting, setIsPainting] = useState(false);

  const handleMouseDown = (combo) => {
    setIsPainting(true);
    toggleComboColor(combo, selectedColor);
  };

  const handleMouseUp = () => {
    setIsPainting(false);
  };

  const handleCellMouseEnter = (combo) => {
    if (isPainting) {
      paintCombo(combo, selectedColor);
    }
  };

  useEffect(() => {
    updateTable();
  }, [matrizUpdate, updateTable]);

  useEffect(() => {
    viewMatrix({ id });
  }, [id, viewMatrix]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Editar Matriz</h2>
      <ul className="space-y-4">
        <div>
          <p>
            <strong>Tipo de Juego:</strong> {selectedMatrix?.typeGame}
          </p>
          <p>
            <strong>Posición:</strong> {selectedMatrix?.position}
          </p>
          <p>
            <strong>Rango:</strong> {selectedMatrix?.range}
          </p>
          <p>
            <strong>VS:</strong> {selectedMatrix?.vsOption}
          </p>
          <p>
            <strong>Tipo de Bote:</strong> {selectedMatrix?.typePot}
          </p>
        </div>
        {/* utilidades para pintar */}
        <div>
          <ColorPickerComponent />
          <LegendListComponent removed={false} />
        </div>
        <div className="  ">
          {/* dibujamos la matrix */}
          <h4 className="font-semibold mt-4">Tabla:</h4>
          <div
            className="grid grid-cols-13 gap-1 p-4 max-w-lg"
            onMouseUp={handleMouseUp}
          >
            {matrizUpdate?.map(({ combo, color }) => (
              <div
                key={`${combo}`}
                className="cursor-pointer w-8 h-8  border border-gray-300 flex items-center justify-center text-center text-xs font-semibold "
                style={{
                  backgroundColor: color?.color || "",
                  color: color?.textColor || "",
                }}
                onMouseDown={() => handleMouseDown(combo)}
                onMouseEnter={() => handleCellMouseEnter(combo)}
              >
                <button>{combo}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 ">
          <h4 className="font-semibold">Leyendas Utilizadas:</h4>
          {leyendasTemp && leyendasTemp.length > 0 ? (
            <ul className="flex flex-wrap gap-1">
              {leyendasTemp.map((legend) => (
                <li
                  key={legend?.id}
                  className="flex items-center px-2 py-1 rounded-lg"
                  style={{
                    backgroundColor: legend?.color,
                    color: legend?.textColor,
                  }}
                >
                  <span className="text-[10px] font-medium">
                    {legend?.description}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron leyendas para esta matriz.</p>
          )}
        </div>
      </ul>

      <button onClick={() => navigate(-1)} className="link mt-4 flex text-info">
        Regresar
        <svg
          className="w-5 h-5 ml-2  fill-info"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="459px"
          height="459px"
          viewBox="0 0 459 459"
          xmlSpace="preserve"
        >
          <g>
            <g id="reply">
              <path d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z" />
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default EditMatrixComponent;
