import Header from "./Header";
import {Outlet} from "react-router-dom";

export default function Layout({ children }) {
    return (
        <div className="p-4">
            <Header/>
            {children}
            <Outlet />
            
        </div>
    )
}   