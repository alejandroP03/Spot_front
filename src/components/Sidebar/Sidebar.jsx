import {
  LiaBackwardSolid,
  LiaCogSolid,
  LiaDownloadSolid,
  LiaHomeSolid,
  LiaSearchSolid,
  LiaSignOutAltSolid,
} from "react-icons/lia";
import SidebarButtonRoute from "./SidebarButtonRoute";
function Sidebar() {
  return (
    <>
      <div className="w-1/3 max-w-[300px] flex flex-col gap-2 bg-default-100 rounded-large py-2 sticky top-5 h-[calc(100vh-40px)]">
        <div className="py-4 px-5">
          <h1 className="text-2xl font-bold">Spot VR</h1>
        </div>
        <div className="flex flex-col px-4 gap-2 flex-1">
          <SidebarButtonRoute
            icon={<LiaHomeSolid />}
            text={"Inicio"}
            selected={true}
          />
          <SidebarButtonRoute
            icon={<LiaSearchSolid />}
            text={"Buscar"}
            selected={false}
          />
          <SidebarButtonRoute
            icon={<LiaBackwardSolid />}
            text={"Retransmisiones"}
            selected={false}
          />
          <SidebarButtonRoute
            icon={<LiaDownloadSolid />}
            text={"Descargas"}
            selected={false}
          />
        </div>

        <div className="px-3 flex flex-col gap-2">
          <SidebarButtonRoute
            icon={<LiaCogSolid />}
            text={"Configuración"}
            selected={false}
          />

          <SidebarButtonRoute
            icon={<LiaSignOutAltSolid />}
            text={"Salir"}
            selected={false}
          />
        </div>
      </div>
      <div />
    </>
  );
}

export default Sidebar;
