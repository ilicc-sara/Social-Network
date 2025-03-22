"use strict";
import "./style.css";

const friendsListEl = document.querySelector(".friends-list");

const nameEl = document.querySelector(".name");
const numberOfFriendsEl = document.querySelector(".friends");
const addressEl = document.querySelector(".address");

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

friends.forEach(function (person) {
  account.addFriend(person.name);
  numberOfFriendsEl.textContent = account.getFriendsNumber();

  friend.addFriend(person.name, person.photo);
});

friend.friends.forEach(function (person) {
  const friendEl = document.createElement("li");

  // prettier-ignore
  friendEl.innerHTML = ` <img class="img-friend" src=${person.photo} alt="profile" />
            <p class="friend-name">${person.name}</p>`;
  friendEl.className = "transaction-item";
  friendsListEl.appendChild(friendEl);
});

class Post {
  constructor() {
    this.name = "";
    this.postDate = "";
    this.postText = "";
    this.likes = [];
    this.comments = [];
    this.id = crypto.randomUUID();
  }
}

const post = new Post();

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
