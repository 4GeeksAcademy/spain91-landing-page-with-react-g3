import React from "react";

//include images into your bundle

import { Card } from "./cards";

//create your first component
const Home = () => {
	return (
		<div className="container">
			
				<div className=" row row-cols row-cols-md-2 row-cols-lg-4   mb-4" >




					<Card
						name='Terri Matthews'
						email='terri.matthews@example.com'
						imageURL={'https://randomuser.me/api/portraits/women/69.jpg'}
						imageAlt={'Photo Terri Matthews'}
					/>
					<Card
						name='Tomothy Ford'
						email='tomothy.ford@example.com'
						imageURL={'https://randomuser.me/api/portraits/men/86.jpg'}
						imageAlt={'Photo Timothy Ford'}
					/>
					<Card
						name='Savannah Larson'
						email='savannah.larson@example.com'
						imageURL={'https://randomuser.me/api/portraits/women/12.jpg'}
						imageAlt={'Photo Savannah Larson'}
					/>
					<Card />
				</div>


			


		</div>

	);
};

export default Home;			
