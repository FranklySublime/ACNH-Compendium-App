import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailableSea = () => {
	const [availableSea, setAvailableSea] = useState(null);

	useEffect(() => {
		fetch("sea/available")
			.then((res) => res.json())
			.then((data) => setAvailableSea(data.data));
	}, []);

	return (
		availableSea && (
			<div>
				{availableSea.map((sea) => {
					return (
						<Link
							to={`/critterpedia/sea/${sea.filename}`}
							key={sea.filename}
						>
							<img src={sea.iconSrc} alt={sea.name} />
						</Link>
					);
				})}
			</div>
		)
	);
};

export default AvailableSea;
