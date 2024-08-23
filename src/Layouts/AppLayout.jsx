import { useEffect, useState } from "react";
import data from "../data/data.json";
import { LegendaCustom, TableCustom } from "../components";

const gameTypes = data.gameTypes;
const positions = data.positions;
const sizes = data.sizes;
const initialTable = data.table;
const initialLegendas = data.legendas;
const initialTables = data.tables;

function AppLayout() {
  // const [selectedButtons, setSelectedButtons] = useState({});
  const [selectedlegenda, setSelectedlegenda] = useState({});
  const [table, setTable] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [legendas, setLegendas] = useState([]);

  const [form, setForm] = useState({});

  useEffect(() => {
    if (selectedType && selectedPosition && selectedSize) {
      const table =
        initialTables.find((table) => table.sizeId == selectedSize)?.table ||
        initialTable;
      setTable(table);
      const legendas = [];
      table.forEach(({ legendaId }) => {
        if (legendaId) {
          const legenda = initialLegendas.find(
            (legenda) => legenda.id == legendaId
          );
          if (!legendas.some((l) => l.id === legenda.id)) {
            legendas.push(legenda);
          }
        }
      });
      setLegendas(legendas);
    }
  }, [selectedPosition, selectedSize, selectedType]);

  const handlelegenda = (legenda) => {
    setSelectedlegenda(legenda); // Actualiza el color seleccionado
  };

  const handleType = (e) => {
    setSelectedType(e.target.value);
  };

  const handlePosition = (e) => {
    setSelectedPosition(e.target.value);
  };

  const handleSize = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      sizeId: selectedSize,
      table,
    });
  };

  const handleReset = () => {
    setTable(initialTable);
  };

  console.log(form);
  return (
    <>
      {/* Código para las pestañas o tabs si es necesario */}
      <div className="flex flex-col gap-4 p-8">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleType}
        >
          <option value="" disabled selected>
            Seleciona el tipo juego
          </option>
          {gameTypes?.map(({ id, abbreviation }) => (
            <option key={id} value={id}>
              {abbreviation}
            </option>
          ))}
        </select>
        {/* <-------- FIN SELECT TIPO DE JUEGO -----------> */}

        {selectedType && (
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handlePosition}
          >
            <option value="" disabled selected>
              Seleciona la posicion
            </option>
            {positions?.map(({ id, name, gameTypeId }) => {
              if (selectedType == gameTypeId) {
                return (
                  <option key={id} value={id}>
                    {name}
                  </option>
                );
              }
            })}
          </select>
        )}
        {/* <-------- FIN SELECT POSICION -----------> */}
        {selectedType && selectedPosition && (
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handleSize}
          >
            <option value="" disabled selected>
              Seleciona el sizing
            </option>
            {sizes?.map(({ id, range, positionId }) => {
              if (selectedPosition == positionId) {
                return (
                  <option key={id} value={id}>
                    {range}
                  </option>
                );
              }
            })}
          </select>
        )}
        {/* <-------- FIN SELECT SIZING -----------> */}
        {selectedType && selectedPosition && selectedSize && (
          <div className="grid grid-cols-2 gap-4">
            {initialLegendas?.map(({ id, description, color, colorText }) => (
              <button
                key={id}
                className=" btn "
                style={{
                  backgroundColor: color,
                  border:
                    selectedlegenda?.description == description
                      ? "3px solid white"
                      : null,
                  color: colorText,
                }}
                onClick={() => handlelegenda({ id, description, color })}
              >
                {description}
              </button>
            ))}
            {/* <-------- FIN SELECT legenda -----------> */}
          </div>
        )}
      </div>

      <TableCustom
        table={table}
        setTable={setTable}
        selectedlegenda={selectedlegenda}
        initialLegendas={initialLegendas}
      />

      <LegendaCustom legendas={legendas} />

      <div className="flex flex-grow justify-center gap-4">
        <button className="btn btn-primary" onClick={handleSubmit}>
          guardar
        </button>
        <button className="btn btn-error" onClick={handleReset}>
          reiniciar
        </button>
      </div>
    </>
  );
}

export default AppLayout;
