"use strict";
import "./style.css";

const likeBtn = document.querySelector(".like-icon");

likeBtn.addEventListener("click", function (e) {
  console.log("like icon is clicked");
  e.target.style.color = "blue";
});

// prettier-ignore
const friends = ["Angelina Simonovska", "Areous Ahmad", "Carol Hamada", "Jorge Fakhouri", "Julie Thompson", "Nina Vuksanovic"];

class Account {
  constructor(name) {
    this.name = name;
    // prettier-ignore
    this.friends = ["Angelina Simonovska", "Areous Ahmad", "Carol Hamada", "Jorge Fakhouri", "Julie Thompson", "Nina Vuksanovic"];
    this.friendsNumber = friends.length;
    // this.posts = [];
    // this.likes = [];
  }
}

class Post {
  constructor() {
    this.postText = "";
    this.likes = [];
    this.personCommented = [];
  }
}

class Comment {
  constructor() {
    this.commentText = "";
    this.commentId = crypto.randomUUID();
  }
}
