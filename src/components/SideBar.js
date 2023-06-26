import { Link } from "react-router-dom";
import home from "../assets/home.svg";
import sorts from "../assets/sorts.svg";
import subscription from "../assets/subscription.svg";

function SideBar() {
    return (
        <div className="col-span-1 m-3">
            <Link to="/" className="flex hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
                <img src={home} alt="home svg" className="h-5 mr-5" />
                <h3>Home</h3>
            </Link>
            <div className="flex hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
                <img src={sorts} alt="sorts svg" className="h-5 mr-5" />
                <h3>Sorts</h3>
            </div>
            <div className="flex hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
                <img src={subscription} alt="subscription svg" className="h-5 mr-5" />
                <h3>Subscription</h3>
            </div>
        </div>
    );
}

export const SideBarIcons = () => {
    return (
        <div className="m-3">
            <div className="hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
                <img src={home} alt="home svg" className="h-5 mb-1" />
            </div>
            <div className="hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
                <img src={sorts} alt="sorts svg" className="h-5 mb-1" />
            </div>
            <div className="hover:bg-gray-100 p-2 rounded-xl cursor-pointer">
                <img src={subscription} alt="subscription svg" className="h-5 mb-1" />
            </div>
        </div>
    );
};

export default SideBar;
