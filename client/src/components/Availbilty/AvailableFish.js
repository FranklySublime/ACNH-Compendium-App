import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const AvailableFish = () => {
	const [availableFish, setAvailableFish] = useState(null);

	useEffect(() => {
		fetch("fish/available")
			.then((res) => res.json())
			.then((data) => setAvailableFish(data.data));
	}, []);

	return (
		availableFish && (
			<div>
				{availableFish.map((fish) => {
					return (
						<Link to={`/wiki/fish/${fish.filename}`}>
							<img src={fish.iconSrc} alt={fish.name} />
						</Link>
					);
				})}
			</div>
		)
	);
};
export default AvailableFish;
