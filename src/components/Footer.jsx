import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const Footer = () => {
	return (

        <div> 

            <footer className="bg-sky-100 flex flex-col fixed bottom-0 left-0 right-0 z-10">
        
            <div className="w-full md:w-10 flex justify-between items-center">
			<img className="h-10 w-10" src={logo} alt=" Logo"></img>
            <Link to={"/admin-portal"} class="hover:bg-sky-200 text-xs"> Admin Only </Link>
            </div>
            </footer>
        </div>


	);
};

export default Footer;