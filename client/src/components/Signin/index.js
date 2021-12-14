import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Signin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const {
		actions: { triggerReload },
	} = useContext(UserContext);

	let navigate = useNavigate();

	const handleSignin = (e) => {
		e.preventDefault();
		let user = {
			username: username,
			password: password,
		};
		fetch("/user/signin", {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.status === 200) {
					console.log("JSON", json);
					localStorage.setItem("_id", json.data);
					triggerReload();
					// navigate("../", { replace: true });
				} else {
					setError(true);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<div>
			<form onSubmit={(e) => handleSignin(e)}>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button>Sign-In</button>
			</form>
			<div>Don't have an account?</div>
			<Link to="/signup">Sign up</Link>
			{error && (
				<div> Looks like the username or password is incorrect </div>
			)}
		</div>
	);
};

export default Signin;
