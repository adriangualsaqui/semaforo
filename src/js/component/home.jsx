import React from "react";

//include images into your bundle
import TrafficLight from "./Traffic.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<TrafficLight />
		</div>
	);
};

export default Home;
