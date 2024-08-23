const LegendaCustom = ({ legendas }) => {
  return (
    <div className="flex sm:flex-col sm:items-start flex-row flex-wrap gap-2  p-2 shadow-md  shadow-primary-content w-full max-96 items-center justify-start text-[10px]">
      {legendas?.map(({ id, color, description, colorText }) => (
        <label
          key={id}
          className="rounded-sm sm:w-full p-2  items-center justify-center"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="p-2 w-full text-center" style={{ color: colorText }}>
            {description}
          </span>
        </label>
      ))}
    </div>
  );
};

export default LegendaCustom;
