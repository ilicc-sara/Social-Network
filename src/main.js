"use strict";
import "./style.css";
import { friendsListEl, nameEl, numberOfFriendsEl, addressEl } from "./helpers";

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

let date = `${day}.${month}.${year}`;
console.log(date);

const postListEl = document.querySelector(".post-list");

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
    this.address = "PL";
    this.friends = [];
    this.posts = [];
  }

  addFriend(name, photo) {
    this.friends.push({ name: name, photo: photo });
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

friends.forEach(function (person) {
  account.addFriend(person.name, person.photo);
  numberOfFriendsEl.textContent = account.getFriendsNumber();
});

account.friends.forEach(function (person) {
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
    this.id = crypto.randomUUID();
    this.likes = [];
    this.comments = [];
  }

  addLikes(perosn) {
    this.likes.push(perosn);
  }

  addComment(person, commentText) {
    this.comments.push({ person: person, commentText: commentText });
  }
}

// account.addPost(new Post());

posts.forEach(function (postItem) {
  let post = new Post(postItem.name, postItem.postText);

  account.addPost(post);

  console.log(account.posts);
});

account.posts.forEach(function (postItem) {
  const postEl = document.createElement("li");
  // prettier-ignore
  postEl.innerHTML = `
  <div class="account-posting">
              <img class="img-post" src="/profile.jpg" alt="profile" />
              <div class="info-post">
                <p class="account">${postItem.name}</p>
                <p class="days">${postItem.postDate}</p>
              </div>
            </div>

            <p class="post-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              excepturi molestias ut fuga distinctio?
            </p>

            <div class="likes-container">
              <ion-icon class="like-icon" name="thumbs-up-outline"></ion-icon>
              <!-- prettier-ignore -->
              <p class="like-text">  <span class="number-of-likes">2</span>&nbsp;&nbsp;&nbsp; ${postItem.likes.toString()}</p>
            </div>

            <div class="like-and-comment">
              <button class="like-btn">Like</button>
              <button class="comment-btn">Comment</button>
            </div>

            <div class="write-comment">
              <img class="comment-img" src="/profile.jpg" alt="profile" />
              <input type="text" class="input-comment" placeholder="Write a comment" />
            </div>

            <ul class="comments">
            
            </ul>
          </li>
  `;
  postEl.className = "post-item";
  postEl.setAttribute("data-id", postItem.id);
  postListEl.appendChild(postEl);
});

account.posts[0].addLikes("Dana Dacic");
console.log(account.posts[0]);

class Like {
  constructor(person) {
    this.person = person;
  }
}

class Comment {
  constructor() {
    this.person = "";
    this.commentText = "";
    this.id = crypto.randomUUID();
    this.photo = "";
  }
}

postListEl.addEventListener("click", function (e) {
  if (!e.target.classList.contains("comment-btn")) return;
  console.log(e.target);
});
