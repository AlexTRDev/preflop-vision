import { exportMatrixState, importMatrixState } from "../utils";

const ImportExportComponent = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      importMatrixState(file);
    }
  };

  return (
    <div className="flex w-full gap-2">
      {/* Botón para exportar */}
      <button onClick={exportMatrixState} title="Exportar">
        <svg
          className="w-8 h-8  fill-warning"
          title="Exportar"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-name="Layer 2" id="Layer_2">
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM9.71,10.29,11,11.59V6h2v5.59l1.29-1.29,1.41,1.41L12,15.41,8.29,11.71ZM16,18H8V16h8Z" />
          </g>
        </svg>
      </button>

      {/* Input para importar archivo JSON */}
      <input
        id="fileInput"
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="hidden"
      />
      <label htmlFor="fileInput" className="cursor-pointer" title="Importar">
        <svg
          className="w-8 h-8  fill-primary "
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-name="Layer 2" id="Layer_2">
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm2.29,11.71L13,12.41V18H11V12.41L9.71,13.71,8.29,12.29,12,8.59l3.71,3.71ZM16,8H8V6h8Z" />
          </g>
        </svg>
      </label>
    </div>
  );
};

export default ImportExportComponent;
