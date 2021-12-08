// react import
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// context import
import { WikiProvider } from "./context/WikiContext";

// components import
import Homepage from "./components/Homepage";
import Wiki from "./components/Wiki";
import CritterInfo from "./components/Wiki/CritterInfo";

//styling imports
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

function App() {
	return (
		<BrowserRouter>
			<WikiProvider>
				<GlobalStyles />
				<Wrapper>
					<H1> Hello world 🌍 </H1>
					<Switch>
						<Route exact path="/">
							<Homepage />
						</Route>
						<Route exact path="/wiki/">
							<Wiki />
						</Route>
						<Route path="/wiki/:id">
							<CritterInfo />
						</Route>
					</Switch>
				</Wrapper>
			</WikiProvider>
		</BrowserRouter>
	);
}

const Wrapper = styled.div``;

const H1 = styled.h1`
	background-color: var(--accent-color);
`;

export default App;
