import { useSelector } from "react-redux";

import SideBar from "./SideBar";
import { SideBarIcons } from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
    const isHideMenu = useSelector((state) => state.menu.hide);
    return (
        <div className="grid grid-flow-col">
            {isHideMenu ? <SideBarIcons /> : <SideBar />}
            <Outlet />
        </div>
    );
};

export default Body;
