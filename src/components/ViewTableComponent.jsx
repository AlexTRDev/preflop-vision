import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ImportExportComponent } from "../components";
import useMatrixStore from "../store/matrixStore";

const ViewTableComponent = () => {
  const { id } = useParams();

  const viewMatrix = useMatrixStore((state) => state.viewMatrix);
  const selectedMatrix = useMatrixStore((state) => state.selectedMatrix);

  useEffect(() => {
    viewMatrix({ id });
  }, [id, viewMatrix]);

  return (
    <div className=" flex  md:mt-4 md:flex-row-reverse flex-col  items-center justify-center">
      <div className=" h-24  md:h-full flex flex-col items-center justify-center ">
        <ul className=" flex flex-wrap gap-1 md:gap-2 md:flex-col md:p-4">
          {selectedMatrix &&
            Object.values(selectedMatrix?.legends)
              .sort((a, b) => a.id - b.id)
              .map((legend) => (
                <li
                  key={legend?.id}
                  className="flex  items-center p-1 rounded-lg justify-center"
                  style={{
                    backgroundColor: legend?.color,
                    color: legend?.textColor,
                  }}
                >
                  <label className="w-[135px] text-center text-[10px] font-medium">
                    {legend?.description}
                  </label>
                </li>
              ))}
        </ul>
      </div>

      <div className=" grid grid-cols-13 gap-1  ">
        {selectedMatrix?.matrix?.map(({ combo, color }) => (
          <div
            key={`${combo}`}
            className=" relative group rounded shadow shadow-white/80 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-center text-xs font-semibold "
            data-tip={color?.description}
            style={{
              backgroundColor: color?.color || "",
              color: color?.textColor,
            }}
          >
            <label>{combo}</label>
            {color?.description && (
              <label className="absolute hidden group-hover:block top-8 text-xs w-20 z-10 rounded-md p-1 bg-base-content text-neutral">
                {color?.description}
              </label>
            )}
          </div>
        ))}
        <div className=" flex p-2 items-center justify-center gap-2 col-span-full">
          <Link
            title="Editar"
            to={`/tablas/editar/${id}`}
            className="text-info link text-xs font-medium "
          >
            <svg
              className="w-7 h-7 fill-info"
              title="editar"
              id="svg2"
              version="1.1"
              data-tags="remove-circle, cancel, close, remove, delete"
              height="1200"
              width="1200"
              data-du=""
              viewBox="0 0 1200 1200"
            >
              <defs id="defs32" />
              <sodipodi:namedview
                pagecolor="#ffffff"
                bordercolor="#666666"
                borderopacity="1"
                objecttolerance="10"
                gridtolerance="10"
                guidetolerance="10"
                inkscape:pageopacity="0"
                inkscape:pageshadow="2"
                inkscape:window-width="1535"
                inkscape:window-height="876"
                id="namedview30"
                showgrid="false"
                inkscape:zoom="0.37249375"
                inkscape:cx="660.52093"
                inkscape:cy="577.90752"
                inkscape:window-x="65"
                inkscape:window-y="24"
                inkscape:window-maximized="1"
                inkscape:current-layer="svg2"
              />
              <metadata id="metadata62">
                <rdf:RDF>
                  <cc:Work rdf:about="">
                    <dc:format>image/svg+xml</dc:format>
                    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                    <dc:title />
                  </cc:Work>
                </rdf:RDF>
              </metadata>
              <path
                id="path7543"
                d="M 600,0 C 268.62914,0 0,268.62914 0,600 c 0,331.37086 268.62914,600 600,600 331.37087,0 600,-268.62914 600,-600 C 1200,268.62914 931.37087,0 600,0 z m -143.11523,220.89843 394.48243,0 0,172.04578 24.68249,-24.60936 122.38781,122.31467 -289.01367,289.08681 -181.20117,58.88671 58.81359,-181.27429 198.04688,-198.04688 0,-172.48547 -279.85852,0 0,118.72547 -124.80468,0 0,507.64173 404.6632,0 0,-109.42383 66.28407,-66.35743 0,241.69923 -537.3047,0 0,-620.28798 142.82227,-137.91516 z m 160.76648,466.99219 -29.44313,90.67383 90.60047,-29.44335 -61.15734,-61.23048 z"
              />
            </svg>
          </Link>
          <ImportExportComponent />
        </div>
      </div>
    </div>
  );
};

export default ViewTableComponent;
