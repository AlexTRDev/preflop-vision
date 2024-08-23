import { useState } from "react";
import data from "../data/data.json";
import { useEffect } from "react";
import TableView from "../components/TableView";

const {
  positions: initialPositions,
  gameTypes: initialGameTypes,
  tables: initialTables,
} = data;

const positionsInitials = [
  {
    id: 1,
    name: "BTN",
    typeId: 1,
    children: [],
  },
  {
    id: 2,
    name: "SB VS BTN",
    typeId: 1,
    children: [
      {
        id: 1,
        name: "LIMP",
      },
      {
        id: 2,
        name: "RAISE",
      },
    ],
  },

  {
    id: 3,
    name: "SB VS BB",
    typeId: 1,
    children: [],
  },

  {
    id: 4,
    name: "BB VS BTN",
    typeId: 1,
    children: [
      {
        id: 1,
        name: "LIMP",
      },
      {
        id: 2,
        name: "RAISE",
      },
    ],
  },

  {
    id: 5,
    name: "BB VS SB",
    typeId: 1,
    children: [
      {
        id: 1,
        name: "LIMP",
      },
      {
        id: 2,
        name: "RAISE",
      },
    ],
  },

  {
    id: 6,
    name: "BB VS BTN + SB",
    typeId: 1,
    children: [],
  },
  {
    id: 7,
    name: "HU | SB VS BB",
    typeId: 2,
    children: [],
  },
  {
    id: 8,
    name: "HU | BB VS SB",
    typeId: 2,
    children: [
      {
        id: 1,
        name: "LIMP",
      },
      {
        id: 2,
        name: "RAISE",
      },
    ],
  },
];

const PreflopVisionLayout = () => {
  const [gameTypes] = useState(initialGameTypes);
  const [table, setTable] = useState([]);
  const [selectedType, setSelectedType] = useState(initialGameTypes[0].id);
  const [selectedSizeId, setSelectedSizeId] = useState(1);

  const handleClick = (e) => {
    e.preventDefault();
    setSelectedSizeId(Number(e.target.name));
  };

  useEffect(() => {
    const table = initialTables.find(
      (table) => table.sizeId == selectedSizeId
    ).table;
    setTable(table);
  }, [selectedSizeId]);

  return (
    <div className="flex flex-col w-full  min-h-screen bg-base-100">
      <div className="flex-none w-full  font-medium ">
        <div role="tablist" className="tabs tabs-boxed">
          <button
            role="tab"
            className="tab"
            aria-selected={selectedType === 0}
            onClick={() => setSelectedType(0)}
          >
            <p className="">FULL</p>
          </button>
          {gameTypes.map((gameType) => (
            <button
              key={gameType.id}
              role="tab"
              className="tab"
              aria-selected={selectedType === gameType.id}
              onClick={() => setSelectedType(gameType.id)}
            >
              {gameType.abbreviation}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 sm:flex  w-full justify-center items-center ">
        <div>
          <TableView table={table} />
        </div>
      </div>
      <div
        className={`flex-1 gap-2 grid p-4 text-[10px] font-medium ${
          selectedType == 1
            ? "grid-cols-3"
            : selectedType == 2
            ? "grid-cols-2"
            : ""
        }`}
      >
        {positionsInitials.map(
          ({ id, name, children, typeId }) =>
            typeId == selectedType && (
              <div key={id} className="w-full justify-center items-center">
                <div
                  className={`${
                    name === "BTN"
                      ? "bg-info text-[#fff]"
                      : name.startsWith("HU | SB") || name.startsWith("SB")
                      ? "bg-warning text-[#000]"
                      : "bg-primary text-[#fff]"
                  } ${
                    selectedSizeId == id ? "bg-success text-[#fff]" : ""
                  } w-full text-[10px] font-medium`}
                >
                  <h2 className=" text-center  ">{name}</h2>
                </div>
                <div className=" w-full text-[10px] font-medium  rounded-b-lg shadow-md shadow-primary-content">
                  <div className="w-full grid grid-cols-2 ">
                    {children.length > 0 &&
                      children.map(({ id, name: nameChild }) => (
                        <div
                          key={id}
                          className=" w-full text-[10px] font-medium"
                        >
                          <label
                            key={id}
                            className=" w-full bg-neutral-700 grid place-content-center   "
                          >
                            <span className=" text-center">{nameChild}</span>
                          </label>
                          <div className="w-full grid grid-rows-5">
                            {initialPositions
                              .find(
                                (pos) => pos.name === name + " " + nameChild
                              )
                              ?.sizes?.map(({ id, range }) => (
                                <button
                                  key={id}
                                  className={`${
                                    name === "BTN"
                                      ? "hover:bg-info/70 hover:text-[#fff]"
                                      : name.startsWith("HU | SB") ||
                                        name.startsWith("SB")
                                      ? "hover:bg-warning/70 hover:text-[#000]"
                                      : "hover:bg-primary/70 hover:text-[#fff]"
                                  } ${
                                    selectedSizeId == id
                                      ? "bg-success text-[#fff]"
                                      : ""
                                  } w-full `}
                                  name={id}
                                  onClick={handleClick}
                                >
                                  {range}
                                </button>
                              ))}
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="w-full grid grid-rows-5 grid-cols-1 items-center justify-center ">
                    {children.length === 0 &&
                      initialPositions
                        .find((pos) => pos.name === name)
                        ?.sizes?.map(({ id, range }) => (
                          <button
                            key={id}
                            className={`${
                              name === "BTN"
                                ? "hover:bg-info/70 hover:text-[#fff]"
                                : name === "SB VS BTN" ||
                                  name === "SB VS BB" ||
                                  name === "HU | SB VS BB"
                                ? "hover:bg-warning/70 hover:text-[#000]"
                                : "hover:bg-primary/70 hover:text-[#fff]"
                            } ${
                              selectedSizeId == id
                                ? "bg-success text-[#fff]"
                                : ""
                            } w-full font-bold`}
                            name={id}
                            onClick={handleClick}
                          >
                            {range}
                          </button>
                        ))}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <div
        className={`flex-1 gap-2 grid grid-cols-3 text-[10px] font-medium p-4 ${
          selectedType == 1
            ? "grid-cols-3"
            : selectedType == 2
            ? "grid-cols-2"
            : ""
        }`}
      >
        {positionsInitials.map(
          ({ id, name, children }) =>
            selectedType == 0 && (
              <div key={id} className="w-full justify-center items-center">
                <div
                  className={`${
                    name === "BTN"
                      ? "bg-info text-[#fff]"
                      : name.startsWith("HU | SB") || name.startsWith("SB")
                      ? "bg-warning text-[#000]"
                      : "bg-primary text-[#fff]"
                  } ${
                    selectedSizeId == id ? "bg-success text-[#fff]" : ""
                  } w-full text-[10px] font-medium`}
                >
                  <h2 className=" text-center  ">{name}</h2>
                </div>
                <div className=" w-full text-sm   rounded-b-lg shadow-md shadow-primary-content">
                  <div className="w-full grid grid-cols-2 ">
                    {children.length > 0 &&
                      children.map(({ id, name: nameChild }) => (
                        <div
                          key={id}
                          className=" w-full text-[10px] font-medium"
                        >
                          <label
                            key={id}
                            className=" w-full bg-neutral-700 grid place-content-center   "
                          >
                            <span className=" text-center">{nameChild}</span>
                          </label>
                          <div className="w-full grid grid-rows-5">
                            {initialPositions
                              .find(
                                (pos) => pos.name === name + " " + nameChild
                              )
                              ?.sizes?.map(({ id, range }) => (
                                <button
                                  key={id}
                                  className={`${
                                    name === "BTN"
                                      ? "hover:bg-info/70 hover:text-[#fff]"
                                      : name.startsWith("HU | SB") ||
                                        name.startsWith("SB")
                                      ? "hover:bg-warning/70 hover:text-[#000]"
                                      : "hover:bg-primary/70 hover:text-[#fff]"
                                  } ${
                                    selectedSizeId == id
                                      ? "bg-success text-[#fff]"
                                      : ""
                                  } w-full `}
                                  name={id}
                                  onClick={handleClick}
                                >
                                  {range}
                                </button>
                              ))}
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="w-full grid grid-rows-5 grid-cols-1 items-center justify-center ">
                    {children.length === 0 &&
                      initialPositions
                        .find((pos) => pos.name === name)
                        ?.sizes?.map(({ id, range }) => (
                          <button
                            key={id}
                            className={`${
                              name === "BTN"
                                ? "hover:bg-info/70 hover:text-[#fff]"
                                : name === "SB VS BTN" ||
                                  name === "SB VS BB" ||
                                  name === "HU | SB VS BB"
                                ? "hover:bg-warning/70 hover:text-[#000]"
                                : "hover:bg-primary/70 hover:text-[#fff]"
                            } ${
                              selectedSizeId == id
                                ? "bg-success text-[#fff]"
                                : ""
                            } w-full text-[10px] font-medium`}
                            name={id}
                            onClick={handleClick}
                          >
                            {range}
                          </button>
                        ))}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default PreflopVisionLayout;
