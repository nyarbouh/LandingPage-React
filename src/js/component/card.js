import React from "react";
import { Content } from "./content";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card h-100">
			<img
				className="card-img-top"
				src="http://placehold.it/500x325"
				alt=""
			/>
			<div className="card-body">
				<h4 className="card-title">Card title</h4>
				<p className="card-text">{props.content}</p>
			</div>
			<div className="card-footer">
				<a href="#" className="btn btn-primary">
					{props.flor || "Click Alt"}
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	content: PropTypes.string,
	flor: PropTypes.string
};
