import { useState } from "react";
import data from "../data/data.json";
import LegendaCustom from "./LegendaCustom";
import { useEffect } from "react";

const initialLegendas = data.legendas;

const TableView = ({ table }) => {
  const [legendas, setLegendas] = useState([]);

  useEffect(() => {
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
  }, [table]);
  return (
    <div className="flex sm:flex-row-reverse flex-col md:max-w-screen-md w-full font-medium justify-center items-center ">
      <div className="p-2 w-full h-24 md:max-w-screen-md items-center justify-start mb-4">
        <LegendaCustom legendas={legendas} />
      </div>
      <div className=" grid grid-cols-[repeat(13,1fr)] grid-rows-[repeat(13,1fr)] shadow-sm shadow-primary-content ">
        {table?.map(({ id, name, legendaId }) => (
          <button
            key={id}
            className="text-center  text-[10px]  drop-shadow-md cursor-default m-[1px] h-6 w-6 rounded-full "
            style={{
              backgroundColor:
                initialLegendas.find(({ id }) => id == legendaId)?.color ||
                "black",
              color:
                initialLegendas.find(({ id }) => id == legendaId)?.colorText ||
                "black",
            }}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableView;
