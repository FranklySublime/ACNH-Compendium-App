// react import
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components import
import Homepage from "./components/Homepage";
import Wiki from "./components/Wiki";

//styling imports
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Wrapper>
				<H1> Hello world 🌍 </H1>
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/wiki">
						<Wiki />
					</Route>
				</Switch>
			</Wrapper>
		</BrowserRouter>
	);
}

const Wrapper = styled.div``;

const H1 = styled.h1`
	background-color: var(--accent-color);
`;

export default App;
