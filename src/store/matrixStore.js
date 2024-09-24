// src/store/matrixStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import defaultMatrix from "../data/default.json"; // Importar la matriz por defecto
import { v4 as uuidv4 } from "uuid";

const POSITIONS = defaultMatrix.POSITIONS;
const TYPE_GAME = defaultMatrix.TYPE_GAME;
const TYPE_POT = defaultMatrix.TYPE_POT;

const useMatrixStore = create(
  persist(
    (set, get) => ({
      // Estado inicial
      legends: defaultMatrix.legends,
      savedMatrices: defaultMatrix.savedMatrices,
      selectedColor: null,
      selectedMatrix: null,
      btn3h: [],
      sb3HvsBTNLimp: [],
      sb3HvsBTNRaise: [],
      sb3HvsBB: [],
      bb3HvsBTNLimp: [],
      bb3HvsBTNRaise: [],
      bb3HvsSBLimp: [],
      bb3HvsSBRaise: [],
      bb3Hvs2PLLimp: [],
      bb3Hvs2PLRaise: [],
      sbHUvsBB: [],
      bbHUvsSBLimp: [],
      bbHUvsSBRaise: [],
      matrizUpdate: [],
      leyendasTemp: [],
      //   Accion para agregar una leyenda
      addLegend: (legend) =>
        set((state) => ({
          legends: [...state.legends, { ...legend, id: uuidv4() }],
        })),
      //   Accion para remover una leyenda
      removeLegend: ({ id }) =>
        set((state) => ({
          legends: state.legends.filter((legend) => legend.id !== id),
        })),

      // Accion para seleccionar el color de la legenda
      selectLegendColor: (legend) => set({ selectedColor: legend }),

      // Acción para pintar un combo de la matrix
      paintCombo: (combo, color) => {
        set((state) => {
          return {
            matrizUpdate: state.matrizUpdate.map((cell) =>
              cell.combo === combo ? { ...cell, color: color } : cell
            ),
          };
        });
      },
      toggleComboColor: (combo, color) =>
        set((state) => {
          return {
            matrizUpdate: state.matrizUpdate.map((cell) =>
              cell.combo === combo
                ? { ...cell, color: cell.color ? null : color }
                : cell
            ),
          };
        }),

      //  ver una matrix
      viewMatrix: ({ id }) => {
        const matriz = get().savedMatrices.find((matriz) => matriz?.id === id);
        set({ selectedMatrix: matriz, matrizUpdate: matriz?.matrix });
      },

      updateTable: () => {
        const savedMatrices = get().savedMatrices;
        const selectedMatrix = get().selectedMatrix;
        const matrizUpdate = get().matrizUpdate;

        // agregar las leyendas como unicos
        const usedColors = matrizUpdate
          .map((combo) => combo.color)
          .filter((color) => color); // Recuperar solo los colores no nulos

        // hacer unicos estps colores si se repiten como son objetos utilizar el id con un reducer
        const uniqueColors = usedColors.reduce((acc, color) => {
          if (!acc.find((c) => c.color === color.color)) {
            acc.push(color);
          }
          return acc;
        }, []);

        set({
          savedMatrices: savedMatrices?.map((matrix) =>
            matrix?.id === selectedMatrix?.id
              ? { ...matrix, legends: uniqueColors, matrix: matrizUpdate }
              : matrix
          ),
          leyendasTemp: uniqueColors,
        });
      },

      // formatear
      formatData: () => {
        const matrices = get().savedMatrices;
        const btn3h = [];
        const sb3HvsBTNLimp = [];
        const sb3HvsBTNRaise = [];
        const sb3HvsBB = [];
        const bb3HvsBTNLimp = [];
        const bb3HvsBTNRaise = [];
        const bb3HvsSBLimp = [];
        const bb3HvsSBRaise = [];
        const bb3Hvs2PLLimp = [];
        const bb3Hvs2PLRaise = [];
        const sbHUvsBB = [];
        const bbHUvsSBLimp = [];
        const bbHUvsSBRaise = [];

        matrices.forEach(
          ({ id, typeGame, position, range, vsOption, typePot }) => {
            if (
              typeGame === TYPE_GAME.TRHEEHANDLE &&
              position === POSITIONS.BTN
            ) {
              btn3h.push({ id, range, typeGame, position });
            }
            if (
              typeGame === TYPE_GAME.TRHEEHANDLE &&
              position === POSITIONS.SB &&
              vsOption.toUpperCase() === POSITIONS.BTN &&
              typePot.toUpperCase() === TYPE_POT.LIMP
            ) {
              sb3HvsBTNLimp.push({ id, range, typeGame, position });
            }
            if (
              typeGame === TYPE_GAME.TRHEEHANDLE &&
              position === POSITIONS.SB &&
              vsOption.toUpperCase() === POSITIONS.BTN &&
              typePot.toUpperCase() === TYPE_POT.RAISE
            ) {
              sb3HvsBTNRaise.push({ id, range, typeGame, position });
            }
            if (
              typeGame === TYPE_GAME.TRHEEHANDLE &&
              position === POSITIONS.SB &&
              vsOption.toUpperCase() === POSITIONS.BB
            ) {
              sb3HvsBB.push({ id, range, typeGame, position });
            }
            if (
              typeGame === TYPE_GAME.TRHEEHANDLE &&
              position === POSITIONS.BB &&
              vsOption.toUpperCase() === POSITIONS.BTN &&
              typePot.toUpperCase() === TYPE_POT.LIMP
            ) {
              bb3HvsBTNLimp.push({ id, range, typeGame, position });
            }
            if (
              typeGame === TYPE_GAME.TRHEEHANDLE &&
              position === POSITIONS.BB &&
              vsOption.toUpperCase() === POSITIONS.BTN &&
              typePot.toUpperCase() === TYPE_POT.RAISE
            ) {
              bb3HvsBTNRaise.push({ id, range, typeGame, position });
            }
            if (
              typeGame === TYPE_GAME.TRHEEHANDLE &&
              position === POSITIONS.BB &&
              vsOption.toUpperCase() === POSITIONS.SB &&
              typePot.toUpperCase() === TYPE_POT.LIMP
            ) {
              bb3HvsSBLimp.push({ id, range, typeGame, position });
            }
            if (
              typeGame === TYPE_GAME.TRHEEHANDLE &&
              position === POSITIONS.BB &&
              vsOption.toUpperCase() === POSITIONS.SB &&
              typePot.toUpperCase() === TYPE_POT.RAISE
            ) {
              bb3HvsSBRaise.push({ id, range, typeGame, position });
            }

            if (
              typeGame === TYPE_GAME.TRHEEHANDLE &&
              position === POSITIONS.BB &&
              vsOption.toUpperCase() === POSITIONS.BTN_SB &&
              typePot.toUpperCase() === TYPE_POT.LIMP
            ) {
              bb3Hvs2PLLimp.push({ id, range, typeGame, position });
            }
            if (
              typeGame === TYPE_GAME.TRHEEHANDLE &&
              position === POSITIONS.BB &&
              vsOption.toUpperCase() === POSITIONS.BTN_SB &&
              typePot.toUpperCase() === TYPE_POT.RAISE
            ) {
              bb3Hvs2PLRaise.push({ id, range, typeGame, position });
            }
            if (typeGame === TYPE_GAME.HEADSUP && position === POSITIONS.SB) {
              sbHUvsBB.push({ id, range, typeGame, position });
            }
            if (
              typeGame === TYPE_GAME.HEADSUP &&
              position === POSITIONS.BB &&
              vsOption.toUpperCase() === POSITIONS.SB &&
              typePot.toUpperCase() === TYPE_POT.LIMP
            ) {
              bbHUvsSBLimp.push({ id, range, typeGame, position });
            }
            if (
              typeGame === TYPE_GAME.HEADSUP &&
              position === POSITIONS.BB &&
              vsOption.toUpperCase() === POSITIONS.SB &&
              typePot.toUpperCase() === TYPE_POT.RAISE
            ) {
              bbHUvsSBRaise.push({ id, range, typeGame, position });
            }
          }
        );

        set({
          btn3h,
          sb3HvsBTNLimp,
          sb3HvsBTNRaise,
          sb3HvsBB,
          bb3HvsBTNLimp,
          bb3HvsBTNRaise,
          bb3HvsSBLimp,
          bb3HvsSBRaise,
          bb3Hvs2PLLimp,
          bb3Hvs2PLRaise,
          sbHUvsBB,
          bbHUvsSBLimp,
          bbHUvsSBRaise,
        });
      },
    }),
    {
      name: "matrix-storage", // Nombre de la clave en localStorage
      getStorage: () => localStorage,
    }
  )
);

export default useMatrixStore;
