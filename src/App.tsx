import { Outlet } from "react-router-dom";

import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Menu from "./component/Menu";

import "./App.css";


function App() {

	return (
		<>
			<Navbar />
			<div className='alignment'>
				<Menu />
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default App;
