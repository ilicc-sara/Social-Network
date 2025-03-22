"use strict";
import "./style.css";

const likeBtn = document.querySelector(".like-icon");

likeBtn.addEventListener("click", function (e) {
  console.log("like icon is clicked");
  e.target.style.color = "blue";
});

const friendsListEl = document.querySelector(".friends-list");

const friends = [
  { name: "Angelina Simonovska", photo: "/angelina-simonovska.webp" },
  { name: "Marc Anderson", photo: "/marc-anderson.webp" },
  { name: "Carol Hamada", photo: "/carol-hamada.jpeg" },
  { name: "Jorge Fakhouri", photo: "/jorge-fakhouri.webp" },
  { name: "Julie Thompson", photo: "/julie-thompson.webp" },
  { name: "Nina Vuksanovic", photo: "/nina-vuksanovic.jpeg" },
];

class Account {
  constructor() {
    this.name = "Sara";
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

class Friend {
  constructor() {
    // this.names = [];
    // this.photos = [];

    this.friends = [];
  }

  // addFriend(friend) {
  //   this.names.push(friend);
  // }

  // addPhoto(photo) {
  //   this.photos.push(photo);
  // }

  addFriend(name, photo) {
    this.friends.push({ name: name, photo: photo });
  }
}

const friend = new Friend();

friends.forEach(function (person) {
  account.addFriend(person.name);

  friend.addFriend(person.name, person.photo);
});

console.log(friend);
console.log(account.friends);

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
    this.postText = "";
    this.likes = [];
    this.comments = [];
    this.id = crypto.randomUUID();
  }
}

class Like {
  constructor() {}
}

// napravi clasu like
// post id

class Comment {
  constructor() {
    this.commentText = "";
    this.commentId = crypto.randomUUID();
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
