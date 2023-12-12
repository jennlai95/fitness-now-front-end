import logo from "../assets/logo.jpg";


const Footer = () => {
	return (

        <div className="flex flex-col min-h-screen">
         <main className="flex-1"> {/* Add any content here */}</main>
            <footer className="text-center bg-background py-4">
        
            <div className="w-10 md:w-10">
			<img className="logo" src={logo} alt=" Logo"></img>

            </div>
            </footer>
            </div>

	);
};

export default Footer;