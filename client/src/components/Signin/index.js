import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import { Wrapper, Input, FormWrapper } from "./styled-components";

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
					navigate("../", { replace: true });
				} else {
					setError(true);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<Wrapper>
			<FormWrapper onSubmit={(e) => handleSignin(e)}>
				<label>Username :</label>
				<Input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Password :</label>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button>Sign-In</button>
			</FormWrapper>
			<div>Don't have an account?</div>
			<Link to="/signup">Sign up</Link>
			{error && (
				<div> Looks like the username or password is incorrect </div>
			)}
		</Wrapper>
	);
};

export default Signin;
