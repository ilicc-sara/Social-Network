"use strict";
import "./style.css";

const likeBtn = document.querySelector(".like-icon");

likeBtn.addEventListener("click", function (e) {
  console.log("like icon is clicked");
  e.target.style.color = "blue";
});

class Account {
  constructor(name) {
    this.name = name;
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
account.addFriend("Angelina Simonovska");
account.addFriend("Areous Ahmad");
account.addFriend("Carol Hamada");
account.addFriend("Jorge Fakhouri");
account.addFriend("Julie Thompson");
account.addFriend("Nina Vuksanovic");

console.log(account.friends);
console.log(account.getFriendsNumber());

class Post {
  constructor() {
    this.postText = "";
    this.likes = [];
    this.comments = [];
  }
}

// napravi clasu like
// post id

class Comment {
  constructor() {
    this.commentText = "";
    this.commentId = crypto.randomUUID();
  }
}
