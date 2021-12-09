import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
	return (
		<div>
			<form>
				<input placeholder="Username" />
				<input placeholder="Password" />
				<button>Sign-In</button>
			</form>
			<div>Don't have an account?</div>
			<Link to="/signup">Sign up</Link>
		</div>
	);
};

export default Signin;
