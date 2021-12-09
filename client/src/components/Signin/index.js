import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
	return (
		<div>
			hello
			<form>
				<input placeholder="Username" />
				<input placeholder="Password" />
				<button>Sign-In</button>
			</form>
			<Link to="/signup">Don't have an account? Sign-up here.</Link>
		</div>
	);
};

export default Signin;
