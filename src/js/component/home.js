import React from "react";

import { Content } from "/workspace/LandingPage-React/src/js/component/content";
import { Card } from "./card";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
//create your first component
export const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Content />
			<div className="container">
				<div className="row">
					<div className="card-deck">
						<Card content="Card1" flor="Click 1" />
						<Card content="Card2" />
						<Card content="Card3" />
						<Card content="Card4" flor="Click 4" />
					</div>
				</div>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</React.Fragment>
	);
};
