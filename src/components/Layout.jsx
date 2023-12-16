import Header from "./Header";
import {Outlet} from "react-router-dom";


export default function Layout({ children }) {
    return (
        <div className="flex flex-col">
            <Header/>
            {children}
            <Outlet />
            
        </div>
    )
}   