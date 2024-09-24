import useMatrixStore from "../store/matrixStore";

// Exportar el estado a un archivo JSON
export const exportMatrixState = () => {
  const { savedMatrices, legends } = useMatrixStore.getState(); // Solo obtener savedMatrices y legends

  const exportData = { savedMatrices, legends }; // Crear un objeto con los datos a exportar
  const dataStr = JSON.stringify(exportData, null, 2); // Convertir a JSON con espacios para legibilidad
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `tablas_preflop_${new Date().toISOString()}.json`;
  link.click();

  // Limpia el objeto URL para evitar fugas de memoria
  URL.revokeObjectURL(url);
};

// Importar archivo JSON y actualizar el estado global
export const importMatrixState = (file) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    try {
      const importedState = JSON.parse(event.target.result);

      // Validar que el archivo tenga savedMatrices y legends
      if (importedState.savedMatrices && importedState.legends) {
        // Actualiza el estado global solo con estos valores
        useMatrixStore.setState({
          savedMatrices: importedState.savedMatrices,
          legends: importedState.legends,
        });
        alert("Matrices y leyendas importadas con éxito!");
        // Recargar la página para reflejar los cambios
        window.location.reload();
      } else {
        throw new Error(
          "El archivo no contiene las propiedades necesarias (savedMatrices o legends)."
        );
      }
    } catch (error) {
      console.error("Error al importar las matrices:", error);
      alert(
        "Hubo un error al importar el archivo. Verifica que contenga las propiedades necesarias."
      );
    }
  };

  reader.readAsText(file);
};
