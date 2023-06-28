const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
let posts = require("./post.json");
require("dotenv").config();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const users = require("./users.json");
const followersData = require("./follow.json");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get(`/`, (req, res) => {
  res.status(200).json(users);
});

app.post("/register", (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  const user = {
    id: users.users.length + 1,
    firstName,
    lastName,
    username,
    email,
    password,
    img: "https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg",
    cover:
      "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png",
  };

  // Salva il nuovo utente nel database JSON
  saveUser(user);

  res.send("Registrazione completata con successo!");
});

//api/users?username=kfadfdsf
app.get("/api/users", (req, res, next) => {
  // let firstName = req.query.firstname.toLowerCase()
  let userName = req.query.username.toLowerCase();
  let usersList = JSON.parse(fs.readFileSync("users.json")).users;
  let searchResult = usersList.filter((user) =>
    user.username.toLowerCase().includes(userName)
  ); //|| user.firstName.toLowerCase().includes(firstName) )
  console.log(searchResult);
  return res.status(200).send(searchResult);
});

// Funzione per salvare l'utente nel database JSON
function saveUser(user) {
  const users = loadUsers();
  users.users.push(user);

  fs.writeFileSync("users.json", JSON.stringify(users));
}

// Funzione per caricare gli utenti dal database JSON
function loadUsers() {
  try {
    const data = fs.readFileSync("users.json");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = loadUsers();
  const user = users.users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login avvenuto con successo!", user });
  } else {
    res.status(401).send("Credenziali non valide");
  }
});

// Funzione per caricare gli utenti dal database JSON
function loadUsers() {
  try {
    const data = fs.readFileSync("users.json");
    return JSON.parse(data);
  } catch (error) {
    console.error("Errore durante la lettura del file users.json", error);
    return [];
  }
}

app.get("/api/posts", (req, res) => {
  res.status(200).send(JSON.stringify(posts.post));
});

app.post("/api/create/post", (req, res) => {
  const { username, imgPost, descriptionPost } = req.body;
  const post = {
    username,
    imgPost: "https://picsum.photos/500/252",
    descriptionPost,
  };
  posts.post.unshift(post);
  res.status(200).send(posts);
});

//backend followers
app.get("/api/followers-data", (req, res) => {
  res.status(200).send(JSON.stringify(followersData));
});

app.get("/api/suggested-data", (req, res) => {
  res.status(200).send(JSON.stringify(users));
});

const port = process.env.NODE_PORT || 3001;

app.listen(port, () => {
  console.log("Stiamo ascoltando sulla porta: ", port);
});
