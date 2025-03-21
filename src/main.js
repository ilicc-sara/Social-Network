"use strict";
import "./style.css";
import { friendsListEl, nameEl, numberOfFriendsEl, addressEl } from "./helpers";

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

let date = `${day}.${month}.${year}`;
console.log(date);

const friends = [
  { name: "Angelina Simonovska", photo: "/angelina-simonovska.webp" },
  { name: "Marc Anderson", photo: "/marc-anderson.webp" },
  { name: "Carol Hamada", photo: "/carol-hamada.jpeg" },
  { name: "Jorge Fakhouri", photo: "/jorge-fakhouri.webp" },
  { name: "Julie Thompson", photo: "/julie-thompson.webp" },
  { name: "Nina Vuksanovic", photo: "/nina-vuksanovic.jpeg" },
];

const posts = [
  {
    name: "Sara Ilic",
    postText: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              excepturi molestias ut fuga distinctio?`,
  },

  {
    name: "Sara Ilic",
    postText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              natus praesentium magni quia, officia autem adipisci.`,
  },
];

class Account {
  constructor() {
    this.name = "Sara";
    this.address = "Palilula";
    this.friends = [];
    this.posts = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  getFriendsNumber() {
    return this.friends.length;
  }

  addPost(post) {
    this.posts.push(post);
  }
}
const account = new Account();
nameEl.textContent = account.name;
addressEl.textContent = account.address;

class Friend {
  constructor() {
    this.friends = [];
  }
  addFriend(name, photo) {
    this.friends.push({ name: name, photo: photo });
  }
}

const friend = new Friend();

// preko dobijenog objekta stavljam informacije u klasu
friends.forEach(function (person) {
  account.addFriend(person.name);
  numberOfFriendsEl.textContent = account.getFriendsNumber();

  friend.addFriend(person.name, person.photo);
});

// renderujem informacije preko klase
friend.friends.forEach(function (person) {
  const friendEl = document.createElement("li");

  // prettier-ignore
  friendEl.innerHTML = ` <img class="img-friend" src=${person.photo} alt="profile" />
            <p class="friend-name">${person.name}</p>`;
  friendEl.className = "transaction-item";
  friendsListEl.appendChild(friendEl);
});

class Post {
  constructor(name, postText) {
    this.name = name;
    this.postText = postText;
    this.postDate = date;
    this.likes = [];
    this.comments = [];
    this.id = crypto.randomUUID();
  }
}

posts.forEach(function (postItem) {
  let post = new Post(postItem.name, postItem.text);
  console.log(post);
  account.addPost(post);
});

console.log(account.posts);

class Like {
  constructor() {
    this.person = "";
  }
}

// napravi clasu like
// post id

class Comment {
  constructor() {
    this.person = "";
    this.commentText = "";
    this.id = crypto.randomUUID();
  }
}

// const account = new Account();
// account.addFriend("Angelina Simonovska");
// account.addFriend("Marc Anderson");
// account.addFriend("Carol Hamada");
// account.addFriend("Jorge Fakhouri");
// account.addFriend("Julie Thompson");
// account.addFriend("Nina Vuksanovic");

// console.log(account.friends);
// console.log(account.getFriendsNumber());

const likeBtn = document.querySelector(".like-icon");

likeBtn.addEventListener("click", function (e) {
  console.log("like icon is clicked");
  e.target.style.color = "blue";
});
