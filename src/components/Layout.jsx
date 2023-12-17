import Header from "./Header";
import {Outlet} from "react-router-dom";


export default function Layout({ children }) {
    return (
        <div className="flex flex-col justify-between">
            <Header/>
            { children }
            <Outlet />
            
        </div>
    )
}   