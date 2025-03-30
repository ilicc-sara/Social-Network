"use strict";
import "./style.css";
// prettier-ignore
import { friendsListEl, nameEl, numberOfFriendsEl, addressEl, postListEl } from "./helpers";

const friends = [
  { name: "Angelina Simonovska", photo: "/angelina-simonovska.webp" },
  { name: "Mark Anderson", photo: "/marc-anderson.webp" },
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

function displayArr(arr) {
  let arrText;
  if (arr.length === 0) {
    arrText = "";
  }
  if (arr.length === 1) {
    arrText = `${arr[0]} like this`;
  }
  if (arr.length === 2) {
    arrText = `${arr.join(" and ")} like this`;
  }
  if (arr.length > 2) {
    // prettier-ignore
    arrText = `${arr.slice(0, 2).join(" and ")} and ${arr.slice(2, arr.length).length} others like this`;
  }
  return arrText;
}

class PublishedDate {
  constructor() {
    this.day = new Date().getDate();
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
    this.date = `${this.day}.${this.month}.${this.year}`;
  }
}

const date = new PublishedDate();

class Account {
  constructor() {
    this.name = "Sara";
    this.address = "PL";
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

class Friend {
  constructor(name, photo) {
    this.name = name;
    this.photo = photo;
  }
}

const account = new Account();
nameEl.textContent = account.name;
addressEl.textContent = account.address;
// napravi klasu friend
friends.forEach(function (person) {
  account.addFriend(new Friend(person.name, person.photo));
  numberOfFriendsEl.textContent = account.getFriendsNumber();
});

account.friends.forEach(function (person) {
  const friendEl = document.createElement("li");

  // prettier-ignore
  friendEl.innerHTML = ` <img class="img-friend" src=${person.photo} alt="profile" /><p class="friend-name">${person.name}</p>`;
  friendEl.className = "transaction-item";
  friendsListEl.appendChild(friendEl);
});

class Post {
  constructor(name, postText) {
    this.name = name;
    this.postText = postText;
    this.postDate = date.date;
    this.id = crypto.randomUUID();
    this.likes = [];
    this.comments = [];
  }

  addLikes(person) {
    this.likes.unshift(person);
  }

  removeLike(person) {
    this.likes.shift(person);
  }

  addComment(comment) {
    this.comments.unshift(comment);
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
account.posts[0].addLikes(new Like(account.friends[0].name));
account.posts[0].addLikes(new Like(account.friends[1].name));
account.posts[0].addLikes(new Like(account.friends[2].name));

class Comment {
  constructor(person, photo, commentText) {
    this.person = person;
    this.photo = photo;
    this.commentText = commentText;
    this.id = crypto.randomUUID();
    this.likes = [];
    this.dislikes = [];
  }

  getLikesNum() {
    return this.likes.length;
  }

  getDislikesNum() {
    return this.dislikes.length;
  }

  addLike(person) {
    this.likes.unshift(person);
  }

  removeLike(person) {
    this.likes.shift(person);
  }

  addDislike(person) {
    this.dislikes.unshift(person);
  }

  removeDislike(person) {
    this.dislikes.shift(person);
  }
}

class LikeComment {
  constructor(person) {
    this.person = person;
  }
}

class DislikeComment {
  constructor(person) {
    this.person = person;
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

function renderComments(comment, commentsListEl) {
  let commentItem = document.createElement("li");
  commentItem.innerHTML = `
      <img class="comment-img" src=${comment.photo} />
      <div class="comment-cont">
      <h3 class="person-commenting">${comment.person}</h3>
      <p class="persons-comment">
      ${comment.commentText}
      </p>
      <div class="like-dislike-cont">
      <i class='bx bx-like'></i>
      <span class="likes-num">0</span>
      <i class='bx bx-dislike'></i>
      <span class="dislikes-num">0</span>
      </div>
      </div>
      `;
  commentItem.className = "item-comment";
  commentItem.setAttribute("data-id", comment.id);
  commentsListEl.appendChild(commentItem);
}

account.posts.forEach(function (postItem) {
  const likes = [];
  postItem.likes.forEach((like) => likes.push(like.person));

  const postEl = document.createElement("li");
  // prettier-ignore
  postEl.innerHTML = `
  <div class="account-posting">
  <img class="img-post" src="/profile.png" alt="profile" />
  <div class="info-post">
  <p class="account">${postItem.name}</p>
  <p class="days">${postItem.postDate}</p>
  </div>
  </div>
  
  <p class="post-text">
  ${postItem.postText}
  </p>
  
  <div class="likes-container">
  <i class='bx bx-like like-icon'></i>
  <!-- prettier-ignore -->
  <p class="like-text">  <span class="number-of-likes">${postItem.getLikesNumber()}</span>&nbsp; <span class="liked-text">${displayArr(likes)}</span>  <span class="number-of-comments">${postItem.getCommentsNumber()} comments</span></p>
  </div>
  
  <div class="like-and-comment">
  <button class="like-btn"> <i class='bx bx-like'></i> Like</button>
  <button class="comment-btn"> <i class='bx bx-message-dots'></i> Comment</button>
  </div>
  
  <form class="write-comment">
  <img class="comment-img" src="/profile.png" alt="profile" />
  <input type="text" class="input-comment" placeholder="Write a comment" required />
  <button class="hidden"></button>
  </form>
  
  <ul class="comments hidden">
  
  </ul>

  </li>
  `;
  postEl.className = "post-item";
  postEl.setAttribute("data-id", postItem.id);
  postListEl.appendChild(postEl);

  const commentsListEl = postEl.querySelector(".comments");
  postItem.comments.forEach(function (comment) {
    renderComments(comment, commentsListEl);
  });
});

postListEl.addEventListener("click", function (e) {
  // prettier-ignore
  if (!e.target.classList.contains("comment-btn") && !e.target.classList.contains("like-btn") && !e.target.classList.contains("write-comment") && !e.target.classList.contains("input-comment") && !e.target.classList.contains("like-icon") && !e.target.closest('.comments')) return;
  let targetEl = e.target.closest(".post-item");
  const commentsListEl = targetEl.querySelector(".comments");

  let targetId = targetEl.dataset.id;
  let target = account.posts.find((post) => post.id === targetId);

  if (e.target.classList.contains("comment-btn")) {
    commentsListEl.classList.toggle("hidden");
  }

  // prettier-ignore
  if (e.target.classList.contains("write-comment") || e.target.classList.contains("input-comment")) {
    const commentForm = targetEl.querySelector(".write-comment");
    const inputComment = targetEl.querySelector(".input-comment");

    commentForm.addEventListener("submit", function (e) {

      e.preventDefault();
      // prettier-ignore
      target.addComment(new Comment(account.name, "/profile.png", inputComment.value));

      inputComment.value = "";
      commentsListEl.innerHTML = "";

      target.comments.forEach(function (comment) {
       renderComments(comment, commentsListEl)
    });
    const commentsNumber = targetEl.querySelector('.number-of-comments');
    commentsNumber.textContent = `${target.getCommentsNumber()} comments`;

    commentsListEl.classList.remove("hidden");
    });
  }

  // prettier-ignore
  if (e.target.classList.contains("like-icon") || e.target.classList.contains("like-btn")) {

    function displayLike(color) {
      const likes = [];
      target.likes.forEach((like) => likes.push(like.person));

      const likedText = targetEl.querySelector(".liked-text");
      likedText.textContent = displayArr(likes);

      const numberOfLikes = targetEl.querySelector(".number-of-likes");
      numberOfLikes.textContent = target.getLikesNumber();

      targetEl.querySelector('.like-icon').style.color = color;
      targetEl.querySelector('.like-btn').style.color = color;
    }

    if (!target.likes.some((like) => like.person === "You")) {
      target.addLikes(new Like("You"));
      displayLike("#7449f5");
    } else {
      target.removeLike(new Like("You"));
      displayLike(" #06061e");
    }
  }

  if (e.target.closest(".comments")) {
    const targetCommentEl = e.target.closest(".item-comment");
    const targetCommentId = e.target.closest(".item-comment").dataset.id;
    // prettier-ignore
    const targetComment = target.comments.find(comment => comment.id === targetCommentId);

    const likesNum = targetCommentEl.querySelector(".likes-num");
    const dislikesNum = targetCommentEl.querySelector(".dislikes-num");

    const likeBtn = targetCommentEl.querySelector(".bx-like");
    const dislikeBtn = targetCommentEl.querySelector(".bx-dislike");

    if (e.target.classList.contains("bx-like")) {
      // targetComment.addLike("Sara");
      // likesNum.textContent = `${targetComment.getLikesNum()}`;

      if (!targetComment.likes.some((like) => like.person === "Sara")) {
        targetComment.addLike(new LikeComment("Sara"));
        likesNum.textContent = targetComment.getLikesNum();
        likeBtn.style.color = "#7449f5";
      } else {
        targetComment.removeLike(new LikeComment("Sara"));
        likesNum.textContent = targetComment.getLikesNum();
        likeBtn.style.color = " #06061e";
      }
    }

    if (e.target.classList.contains("bx-dislike")) {
      // targetComment.addDislike("Sara");
      // dislikesNum.textContent = `${targetComment.getDislikesNum()}`;

      if (!targetComment.dislikes.some((like) => like.person === "Sara")) {
        targetComment.addDislike(new DislikeComment("Sara"));
        dislikesNum.textContent = targetComment.getDislikesNum();
        dislikeBtn.style.color = "#f549bc";
      } else {
        targetComment.removeDislike(new DislikeComment("Sara"));
        dislikesNum.textContent = targetComment.getDislikesNum();
        dislikeBtn.style.color = " #06061e";
      }
    }
  }
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    loader.remove();
  });
});
