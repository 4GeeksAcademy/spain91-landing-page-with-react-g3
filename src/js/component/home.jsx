import React from "react";
import Jumbotron from "./jumbotron.jsx";
import { Navbar } from "./navbar";
import { Footer } from "./footer";


const Home = () =>{
	return(
		<div>
      		<Navbar/>
				<Jumbotron/>	
           <Footer/>
		</div>
	)
};

export default Home;
