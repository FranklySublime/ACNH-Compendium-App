// imports
const fs = require("fs");

const { MongoClient } = require("mongodb");

require("dotenv").config();

// mongodb access
const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// data manipulation
const fish = JSON.parse(fs.readFileSync("./data/fish.json"));
const bugs = JSON.parse(fs.readFileSync("./data/bugs.json"));
const sea = JSON.parse(fs.readFileSync("./data/sea.json"));
const art = JSON.parse(fs.readFileSync("./data/art.json"));
const fossils = JSON.parse(fs.readFileSync("./data/fossils.json"));
const music = JSON.parse(fs.readFileSync("./data/music.json"));

// import functions
const fishImport = async () => {
	const client = new MongoClient(MONGO_URI, options);
	const fishArray = Object.keys(fish).map((key) => fish[key]);
	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");

		await db.collection("fish").insertMany(fishArray);
	} catch (err) {
		console.log(err.stack);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

const bugsImport = async () => {
	const client = new MongoClient(MONGO_URI, options);
	const bugsArray = Object.keys(bugs).map((key) => bugs[key]);
	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");

		await db.collection("bugs").insertMany(bugsArray);
	} catch (err) {
		console.log(err.stack);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

const seaImport = async () => {
	const client = new MongoClient(MONGO_URI, options);
	const seaArray = Object.keys(sea).map((key) => sea[key]);
	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");

		await db.collection("sea-critters").insertMany(seaArray);
	} catch (err) {
		console.log(err.stack);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

const artImport = async () => {
	const client = new MongoClient(MONGO_URI, options);
	const artArray = Object.keys(art).map((key) => art[key]);
	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");

		await db.collection("art").insertMany(artArray);
	} catch (err) {
		console.log(err.stack);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

const fossilsImport = async () => {
	const client = new MongoClient(MONGO_URI, options);
	const fossilsArray = Object.keys(fossils).map((key) => fossils[key]);
	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");

		await db.collection("fossils").insertMany(fossilsArray);
	} catch (err) {
		console.log(err.stack);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

const musicImport = async () => {
	const client = new MongoClient(MONGO_URI, options);
	const musicArray = Object.keys(music).map((key) => music[key]);
	try {
		await client.connect();
		console.log("connected");
		const db = client.db("items");

		await db.collection("music").insertMany(musicArray);
	} catch (err) {
		console.log(err.stack);
	} finally {
		client.close();
		console.log("disconnected");
	}
};

// fishImport();
// bugsImport();
// seaImport();
// artImport();
// fossilsImport();
// musicImport();
