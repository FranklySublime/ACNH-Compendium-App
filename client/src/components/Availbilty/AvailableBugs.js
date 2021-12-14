import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const AvailableBugs = () => {
	const [availableBugs, setAvailableBugs] = useState(null);

	useEffect(() => {
		fetch("bugs/available")
			.then((res) => res.json())
			.then((data) => setAvailableBugs(data.data));
	}, []);

	return (
		availableBugs && (
			<div>
				{availableBugs.map((bug) => {
					return (
						<Link
							to={`/critterpedia/bugs/${bug.filename}`}
							key={bug.filename}
						>
							<img src={bug.iconSrc} alt={bug.name} />
						</Link>
					);
				})}
			</div>
		)
	);
};

export default AvailableBugs;
