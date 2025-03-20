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
    // prettier-ignore
    this.friends = [];
    this.friendsNumber = this.friends.length;
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  setFriendsNumber() {
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
console.log(account.setFriendsNumber());

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
