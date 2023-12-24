import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const Footer = () => {
	return (

        <div> 

            <footer className="bg-sky-100 flex flex-col bottom-0 z-50 ">
        
            <div className="w-full md:w-10 flex justify-between items-center fixed-bottom">
			<img className="h-20 w-20" src={logo} alt=" Logo"></img>
            <Link to={"/admin-portal"} class="hover:bg-sky-200 text-xs"> Admin Only </Link>
            </div>
            </footer>
        </div>


	);
};

export default Footer;