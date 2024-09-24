import useMatrixStore from "../store/matrixStore";

const LegendListComponent = ({ removed = true }) => {
  const legends = useMatrixStore((store) => store.legends);
  const removeLegend = useMatrixStore((store) => store.removeLegend);
  const selectLegendColor = useMatrixStore((store) => store.selectLegendColor);
  const selectedColor = useMatrixStore((state) => state.selectedColor);

  const handleColor = ({ id, color, description, textColor }) => {
    if (!removed) selectLegendColor({ id, color, description, textColor });
  };

  return (
    <div className="p-4">
      <h2 className="text-[10px] font-bold ">Leyendas</h2>
      <div className="grid grid-cols-3  gap-2">
        {legends?.map(({ id, color, description, textColor }) => (
          <li
            key={id}
            className={`${
              removed
                ? "justify-between"
                : "justify-center cursor-pointer w-full"
            }" flex items-center  p-2  rounded "`}
            style={{
              backgroundColor: color,
              color: textColor,
              border:
                !removed && selectedColor?.id === id
                  ? "2px solid white"
                  : "none",
            }}
            onClick={() => handleColor({ id, color, description, textColor })}
          >
            <span
              className={`${
                removed ? "text-start" : "text-center "
              } "  text-[10px]  font-semibold w-full "`}
            >
              {description}
            </span>
            {removed && (
              <button
                onClick={() => removeLegend({ id })}
                className="btn-error btn btn-xs rounded text-xs"
              >
                x
              </button>
            )}
          </li>
        ))}
      </div>
    </div>
  );
};

export default LegendListComponent;
