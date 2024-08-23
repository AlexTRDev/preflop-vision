import { useState } from "react";

const TableCustom = ({ table, setTable, selectedlegenda, initialLegendas }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseOver = (buttonId) => {
    if (isMouseDown && selectedlegenda.id) {
      setTable((prevTable) =>
        prevTable.map((item) =>
          item.id === buttonId
            ? { ...item, legendaId: selectedlegenda.id }
            : item
        )
      );
    }
  };

  const handleButtonClick = (buttonId) => {
    if (!isMouseDown && selectedlegenda.id) {
      setTable((prevTable) =>
        prevTable.map((item) =>
          item.id === buttonId
            ? { ...item, legendaId: item.legendaId ? null : selectedlegenda.id }
            : item
        )
      );
    }
  };

  return (
    <>
      <div
        className="grid grid-cols-[repeat(13,1fr)] p-8 max-w-screen-sm"
        onMouseUp={handleMouseUp} // Detecta cuando el mouse deja de estar presionado
        onMouseLeave={handleMouseUp} // Opcional: Detecta cuando el mouse deja la tabla
      >
        {table?.map(({ id, name, legendaId }) => (
          <button
            key={id}
            className="text-center  text-[12px] font-bold drop-shadow-md cursor-pointer m-[1px] p-1 rounded-full h-8 w-8"
            onMouseDown={() => handleMouseDown(id)}
            onMouseOver={() => handleMouseOver(id)}
            onClick={() => handleButtonClick(id)}
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
    </>
  );
};

export default TableCustom;
