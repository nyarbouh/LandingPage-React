import React from "react";

import { Content } from "/workspace/react-hello/src/js/component/content";
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
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</React.Fragment>
	);
};
