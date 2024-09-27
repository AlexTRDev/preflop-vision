import { Outlet, useLocation } from "react-router-dom";
import { NavLinkCustomComponent } from "../components";
import useMatrixStore from "../store/matrixStore";
import { TYPE_GAME } from "../data/default.json";

const ControllerPreflopVisionComponent = () => {
  const btn3h = useMatrixStore((store) => store.btn3h);
  const sb3HvsBTNLimp = useMatrixStore((store) => store.sb3HvsBTNLimp);
  const sb3HvsBTNRaise = useMatrixStore((store) => store.sb3HvsBTNRaise);
  const sb3HvsBB = useMatrixStore((store) => store.sb3HvsBB);
  const bb3HvsBTNLimp = useMatrixStore((store) => store.bb3HvsBTNLimp);
  const bb3HvsBTNRaise = useMatrixStore((store) => store.bb3HvsBTNRaise);
  const bb3HvsSBLimp = useMatrixStore((store) => store.bb3HvsSBLimp);
  const bb3HvsSBRaise = useMatrixStore((store) => store.bb3HvsSBRaise);
  const bb3Hvs2PLLimp = useMatrixStore((store) => store.bb3Hvs2PLLimp);
  const bb3Hvs2PLRaise = useMatrixStore((store) => store.bb3Hvs2PLRaise);
  const sbHUvsBB = useMatrixStore((store) => store.sbHUvsBB);
  const bbHUvsSBLimp = useMatrixStore((store) => store.bbHUvsSBLimp);
  const bbHUvsSBRaise = useMatrixStore((store) => store.bbHUvsSBRaise);

  const location = useLocation();

  return (
    <div className=" flex flex-col w-full ">
      <div className="flex-1 w-full ">
        <Outlet />
      </div>
      <div className="flex-1 grid grid-cols-6 text-[10px] gap-2 mb-4">
        {/* 3 HANDLE */}
        {(location.pathname.split("/")[2] === TYPE_GAME.FULL ||
          location.pathname.split("/")[2] === TYPE_GAME.TRHEEHANDLE) && (
          <div className={`grid col-span-6  grid-cols-3 gap-2 `}>
            {/* BTN */}
            <div className="flex flex-col w-full h-32 items-center rounded justify-center  text-white bg-info shadow shadow-info ">
              <label className="font-bold text-[12px]">3H | BTN</label>
              <label className="">vs</label>
              <div className="flex rounded-b flex-col bg-base-300 w-full h-full  items-center justify-center  ">
                {btn3h?.map(({ id, range }) => (
                  <NavLinkCustomComponent
                    key={id}
                    id={id}
                    to={id}
                    range={range}
                    bgColor={"bg-info"}
                    hoverBgColor={"hover:bg-info"}
                  />
                ))}
              </div>
            </div>

            {/* SB vs BTN*/}
            <div className=" rounded w-full h-32 flex flex-col items-center text-white justify-center bg-success shadow-md shadow-success">
              <label className=" font-bold text-[12px]">3H | SB vs BTN</label>
              <div className="grid grid-cols-2 w-full h-full bg-base-300 rounded-b">
                <div className="flex flex-col ">
                  <label className=" bg-success text-center">LIMP</label>
                  <div className=" flex flex-col items-center justify-center w-full h-full">
                    {sb3HvsBTNLimp?.map(({ id, range }) => (
                      <NavLinkCustomComponent
                        key={id}
                        id={id}
                        to={id}
                        range={range}
                        bgColor={"bg-success"}
                        hoverBgColor={"hover:bg-success"}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col ">
                  <label className=" bg-success text-center">RAISE</label>
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    {sb3HvsBTNRaise?.map(({ id, range }) => (
                      <NavLinkCustomComponent
                        key={id}
                        id={id}
                        to={id}
                        range={range}
                        bgColor={"bg-success"}
                        hoverBgColor={"hover:bg-success"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SB vs BB */}
            <div className="rounded flex flex-col w-full h-32 items-center  justify-center bg-success  text-white shadow-md shadow-success">
              <label className=" font-bold text-[12px]">3H | SB vs BB</label>
              <label className="">vs</label>
              <div className="rounded-b flex flex-col bg-base-300 w-full h-full items-center justify-center">
                {sb3HvsBB?.map(({ id, range }) => (
                  <NavLinkCustomComponent
                    key={id}
                    id={id}
                    to={id}
                    range={range}
                    bgColor={"bg-success"}
                    hoverBgColor={"hover:bg-success"}
                  />
                ))}
              </div>
            </div>

            {/* BB vs BTN*/}

            <div className="rounded w-full h-32 flex flex-col items-center justify-center bg-error text-white shadow-md shadow-error">
              <label className=" font-bold text-[12px] ">3H | BB vs BTN</label>
              <div className="rounded-b grid grid-cols-2 w-full h-full bg-base-300 ">
                <div className="flex flex-col rounded-b">
                  <label className=" bg-error text-center">LIMP</label>

                  <div className="flex rounded-b  flex-col bg-base-300 w-full h-full items-center justify-center">
                    {bb3HvsBTNLimp?.map(({ id, range }) => (
                      <NavLinkCustomComponent
                        key={id}
                        id={id}
                        to={id}
                        range={range}
                        bgColor={"bg-error"}
                        hoverBgColor={"hover:bg-error"}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col ">
                  <label className=" bg-error text-center">RAISE</label>
                  <div className="flex rounded-b flex-col bg-base-300 w-full h-full items-center justify-center">
                    {bb3HvsBTNRaise?.map(({ id, range }) => (
                      <NavLinkCustomComponent
                        key={id}
                        id={id}
                        to={id}
                        range={range}
                        bgColor={"bg-error"}
                        hoverBgColor={"hover:bg-error"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* BB vs SB */}
            <div className="rounded w-full h-32 flex flex-col items-center justify-center bg-error text-white shadow-md shadow-error">
              <label className=" font-bold text-[12px]">3H | BB vs SB</label>
              <div className="grid grid-cols-2 w-full h-full bg-base-300 rounded-b">
                <div className="flex flex-col rounded-b">
                  <label className=" bg-error text-center ">LIMP</label>
                  <div className="rounded-b flex flex-col bg-base-300 w-full h-full items-center justify-center">
                    {bb3HvsSBLimp?.map(({ id, range }) => (
                      <NavLinkCustomComponent
                        key={id}
                        id={id}
                        to={id}
                        range={range}
                        bgColor={"bg-error"}
                        hoverBgColor={"hover:bg-error"}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col ">
                  <label className=" bg-error text-center">RAISE</label>
                  <div className="rounded-b flex flex-col bg-base-300 w-full h-full items-center justify-center">
                    {bb3HvsSBRaise?.map(({ id, range }) => (
                      <NavLinkCustomComponent
                        key={id}
                        id={id}
                        to={id}
                        range={range}
                        bgColor={"bg-error"}
                        hoverBgColor={"hover:bg-error"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BB vs 2 PLAYERS */}
            <div className="rounded w-full h-32 flex flex-col items-center justify-center bg-error text-white shadow-md shadow-error">
              <label className=" font-bold text-[12px]">3H | BB vs 2 PL</label>
              <div className="rounded-b grid grid-cols-2 w-full h-full bg-base-300">
                <div className="flex flex-col rounded-b">
                  <label className=" bg-error text-center">2 LIMP</label>
                  <div className="rounded-b flex flex-col bg-base-300 w-full h-full items-center justify-center">
                    {bb3Hvs2PLLimp?.map(({ id, range }) => (
                      <NavLinkCustomComponent
                        key={id}
                        id={id}
                        to={id}
                        range={range}
                        bgColor={"bg-error"}
                        hoverBgColor={"hover:bg-error"}
                      />
                    ))}
                  </div>
                </div>
                <div className=" rounded-b flex flex-col">
                  <label className=" bg-error text-center">BTN & BB</label>
                  <div className="rounded-b flex flex-col bg-base-300 w-full h-full items-center justify-center">
                    {bb3Hvs2PLRaise?.map(({ id, range }) => (
                      <NavLinkCustomComponent
                        key={id}
                        id={id}
                        to={id}
                        range={range}
                        bgColor={"bg-error"}
                        hoverBgColor={"hover:bg-error"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HEADSUP */}

        {(location.pathname.split("/")[2] === TYPE_GAME.FULL ||
          location.pathname.split("/")[2] === TYPE_GAME.HEADSUP) && (
          <div className={` grid gap-2 col-span-6 grid-cols-2`}>
            <div className="rounded flex flex-col h-32 items-center justify-between bg-warning  text-white shadow-md shadow-warning">
              <label className=" font-bold text-[12px] text-black">
                HU | SB vs BB
              </label>
              <div className="rounded-b flex flex-col  w-full h-full bg-base-300">
                <label className=" bg-warning text-center text-black">vs</label>
                <div className="rounded-b flex flex-col bg-base-300 w-full h-full items-center justify-center">
                  {sbHUvsBB?.map(({ id, range }) => (
                    <NavLinkCustomComponent
                      key={id}
                      id={id}
                      to={id}
                      range={range}
                      bgColor={"bg-warning"}
                      hoverBgColor={"hover:bg-warning"}
                      hoverTextColor={"hover:text-black"}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* BB */}
            <div className="rounded flex flex-col h-32 items-center justify-between bg-warning  text-white shadow-md shadow-warning">
              <label className=" font-bold text-[12px] text-black">
                HU | BB vs SB
              </label>
              <div className="rounded-b grid grid-cols-2 w-full h-full bg-base-300">
                <div className="flex flex-col">
                  <label className=" bg-warning text-center text-black">
                    LIMP
                  </label>
                  <div className="rounded-b flex flex-col bg-base-300 w-full h-full items-center justify-center">
                    {bbHUvsSBLimp?.map(({ id, range }) => (
                      <NavLinkCustomComponent
                        key={id}
                        id={id}
                        to={id}
                        range={range}
                        bgColor={"bg-warning"}
                        hoverBgColor={"hover:bg-warning"}
                        hoverTextColor={"hover:text-black"}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-b flex flex-col">
                  <label className=" bg-warning text-center text-black">
                    RAISE
                  </label>
                  <div className="rounded-b flex flex-col bg-base-300 w-full h-full items-center justify-center">
                    {bbHUvsSBRaise?.map(({ id, range }) => (
                      <NavLinkCustomComponent
                        key={id}
                        id={id}
                        to={id}
                        range={range}
                        bgColor={"bg-warning"}
                        hoverBgColor={"hover:bg-warning"}
                        hoverTextColor={"hover:text-black"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControllerPreflopVisionComponent;
