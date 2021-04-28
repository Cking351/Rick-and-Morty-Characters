import React, { useState, useEffect } from "react";
import "./App.css";
import JumboCard from "./Components/JumboCard";
import Character from "./Components/Character";
import axios from "axios";
import logo from "./images/logo.png";

const App = () => {
	const [picklerick, setPicklerick] = useState([]);

	useEffect(() => {
		axios
			.get(`https://rickandmortyapi.com/api/character`)
			.then((response) => setPicklerick(response.data.results))
			.catch((error) => error);
	}, []);

	return (
		<div className="App">
			<div>
				<img src={logo} />
			</div>
			<h1>Characters</h1>
			<JumboCard>
				{picklerick.map((item) => (
					<Character cards={item} />
				))}
			</JumboCard>
		</div>
	);
};

export default App;
