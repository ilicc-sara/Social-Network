"use strict";
import "./style.css";
import { friendsListEl, nameEl, numberOfFriendsEl, addressEl } from "./helpers";

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

let date = `${day}.${month}.${year}`;

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

  addLikes(person) {
    this.likes.push(person);
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  getLikesNumber() {
    return this.likes.length;
  }

  getCommentsNumber() {
    return this.comments.length;
  }
}

posts.forEach(function (postItem) {
  let post = new Post(postItem.name, postItem.postText);
  account.addPost(post);
});

class Like {
  constructor(person) {
    this.person = person;
  }
}
account.posts[0].addLikes(new Like(account.friends[4].name));
account.posts[0].addLikes(new Like(account.friends[5].name));

class Comment {
  constructor(person, photo, commentText) {
    this.person = person;
    this.photo = photo;
    this.commentText = commentText;
    this.id = crypto.randomUUID();
  }
}

account.posts[0].addComment(
  new Comment(
    account.friends[4].name,
    account.friends[4].photo,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem ipsum assumenda excepturi hic ex.`
  )
);

account.posts[0].addComment(
  new Comment(
    account.friends[5].name,
    account.friends[5].photo,
    `Temporibus dolores nulla explicabo esse fugit qui velit nostrum iusto
atque ea. Corrupti corporis ea repudiandae! Nostrum, aut magnam.`
  )
);

account.posts[1].addComment(
  new Comment(
    account.friends[2].name,
    account.friends[2].photo,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem ipsum assumenda excepturi hic ex.`
  )
);

account.posts[1].addComment(
  new Comment(
    account.friends[1].name,
    account.friends[1].photo,
    `Temporibus dolores nulla explicabo esse fugit qui velit nostrum iusto
atque ea. Corrupti corporis ea repudiandae! Nostrum, aut magnam.`
  )
);

account.posts.forEach(function (postItem) {
  const likes = [];
  postItem.likes.forEach((like) => likes.push(like.person));

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
             ${postItem.postText}
            </p>

            <div class="likes-container">
              <ion-icon class="like-icon" name="thumbs-up-outline"></ion-icon>
              <!-- prettier-ignore -->
              <p class="like-text">  <span class="number-of-likes">${postItem.getLikesNumber()}</span>&nbsp;&nbsp;&nbsp; ${likes.join(' and ')}</p>
            </div>

            <div class="like-and-comment">
              <button class="like-btn">Like</button>
              <button class="comment-btn">Comment</button>
            </div>

            <form class="write-comment">
              <img class="comment-img" src="/profile.jpg" alt="profile" />
              <input type="text" class="input-comment" placeholder="Write a comment" required />
              <button class="hidden"></button>
            </form>

            <ul class="comments">
            

            </ul>
          </li>
  `;
  postEl.className = "post-item";
  postEl.setAttribute("data-id", postItem.id);
  postListEl.appendChild(postEl);
});

postListEl.addEventListener("click", function (e) {
  // prettier-ignore
  if (!e.target.classList.contains("comment-btn") && !e.target.classList.contains("write-comment") && !e.target.classList.contains("input-comment") && !e.target.classList.contains("like-icon")) return;
  let targetEl = e.target.closest(".post-item");
  const commentsListEl = targetEl.querySelector(".comments");

  let targetId = targetEl.dataset.id;
  let target = account.posts.find((post) => post.id === targetId);

  if (e.target.classList.contains("comment-btn")) {
    target.comments.forEach(function (comment) {
      let commentItem = document.createElement("li");
      commentItem.innerHTML = `
      <img class="comment-img" src=${comment.photo} />
      <div class="comment-cont">
      <h3 class="person-commenting">${comment.person}</h3>
      <p class="persons-comment">
      ${comment.commentText}
      </p>
      </div>
      `;
      commentItem.className = "item-comment";
      commentItem.setAttribute("data-id", comment.id);
      commentsListEl.appendChild(commentItem);
    });
  }
  // prettier-ignore
  if (e.target.classList.contains("write-comment") || e.target.classList.contains("input-comment")) {
    const commentForm = targetEl.querySelector(".write-comment");
    const inputComment = targetEl.querySelector(".input-comment");

    commentForm.addEventListener("submit", function (e) {

      e.preventDefault();
      // prettier-ignore
      target.addComment(new Comment(account.name, "/profile.jpg", inputComment.value));

    });
  }

  if (e.target.classList.contains("like-icon")) {
    e.target.style.color = "blue";

    target.addLikes(new Like("Sara"));
  }
});
