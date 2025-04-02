"use strict";
import "./style.css";
// prettier-ignore
import { friendsListEl, nameEl, numberOfFriendsEl, addressEl, postListEl, postForm, inputPostTextEl } from "./helpers";
import { PublishedDate, Account, Friend } from "./classes";

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

class Post {
  constructor(name, postText) {
    this.name = name;
    this.postText = postText;
    this.postDate = date.date;
    this.id = crypto.randomUUID();
    this.likes = [];
    this.comments = [];
    this.isEditing = false;
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

  setIsEditing(value) {
    this.isEditing = value;
  }

  setPostText(text) {
    this.postText = text;
  }
}

class Like {
  constructor(person) {
    this.person = person;
  }
}

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

let inputPostText;
inputPostTextEl.addEventListener("input", function (e) {
  inputPostText = e.target.value;
});

const date = new PublishedDate();

const account = new Account();
nameEl.textContent = account.name;
addressEl.textContent = account.address;

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

posts.forEach(function (postItem) {
  let post = new Post(postItem.name, postItem.postText);
  account.addPost(post);
});

account.posts[0].addLikes(new Like(account.friends[4].name));
account.posts[0].addLikes(new Like(account.friends[5].name));
account.posts[0].addLikes(new Like(account.friends[0].name));
account.posts[0].addLikes(new Like(account.friends[1].name));
account.posts[0].addLikes(new Like(account.friends[2].name));

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

function displayLikesText(arr) {
  let text;
  if (arr.length === 0) {
    text = "";
  }
  if (arr.length === 1) {
    text = `${arr[0].person} like this`;
  }
  if (arr.length === 2) {
    text = `${arr[0].person} and ${arr[1].person}`;
  }
  if (arr.length > 2) {
    // prettier-ignore
    text = `${arr[0].person}, ${arr[1].person} and ${arr.length -2} others like this`
  }

  if (text.includes(account.name)) {
    return text.replace(account.name, "You");
  } else {
    return text;
  }
}

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

function renderPosts(postItem) {
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
  
  <div class="post-text-cont">
  <p class="post-text">
  ${postItem.postText}
  </p>
  <div class="edit-cont"><button class="edit-post-btn">Edit Post</button></div>
  </div>
  
  
  <div class="likes-container">
  <i class='bx bx-like like-icon'></i>
  
  <p class="like-text">  <span class="number-of-likes">${postItem.getLikesNumber()}</span>&nbsp; <span class="liked-text">${displayLikesText(postItem.likes)}</span>  <span class="number-of-comments">${postItem.getCommentsNumber()} comments</span></p>
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
  
  <ul class="comments hidden"></ul>
  
  </li>
  `;
  postEl.className = "post-item";
  postEl.setAttribute("data-id", postItem.id);
  postListEl.appendChild(postEl);

  const commentsListEl = postEl.querySelector(".comments");
  postItem.comments.forEach(function (comment) {
    renderComments(comment, commentsListEl);
  });
}

account.posts.forEach(function (postItem) {
  renderPosts(postItem);
});

postForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let post = new Post(account.name, inputPostText);
  account.addPost(post);
  renderPosts(post);
  inputPostTextEl.value = "";
});

postListEl.addEventListener("click", function (e) {
  // prettier-ignore
  if (!e.target.classList.contains("comment-btn") && !e.target.classList.contains("like-btn") && !e.target.classList.contains("write-comment") && !e.target.classList.contains("input-comment") && !e.target.classList.contains("like-icon") && !e.target.closest(".comments") && !e.target.classList.contains("edit-post-btn")) return;
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
    
    function handleComment (e) {
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
      
      commentForm.removeEventListener('submit', handleComment);
    }
    commentForm.addEventListener("submit", handleComment );
  }

  // prettier-ignore
  if (e.target.classList.contains("like-icon") || e.target.classList.contains("like-btn")) {
    
    function displayLike(color) {
      const likedText = targetEl.querySelector(".liked-text");
      likedText.textContent = displayLikesText(target.likes);
      
      const numberOfLikes = targetEl.querySelector(".number-of-likes");
      numberOfLikes.textContent = target.getLikesNumber();
      
      targetEl.querySelector('.like-icon').style.color = color;
      targetEl.querySelector('.like-btn').style.color = color;
    }
    
    if (!target.likes.some((like) => like.person === account.name)) {
      target.addLikes(new Like(account.name));
      displayLike("#7449f5");
    } else {
      target.removeLike(new Like(account.name));
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
      if (!targetComment.likes.some((like) => like.person === account.name)) {
        targetComment.addLike(new LikeComment(account.name));
        likesNum.textContent = targetComment.getLikesNum();
        likeBtn.style.color = "#7449f5";
      } else {
        targetComment.removeLike(new LikeComment(account.name));
        likesNum.textContent = targetComment.getLikesNum();
        likeBtn.style.color = " #06061e";
      }
    }

    if (e.target.classList.contains("bx-dislike")) {
      // prettier-ignore
      if (!targetComment.dislikes.some((like) => like.person === account.name)) {
        targetComment.addDislike(new DislikeComment(account.name));
        dislikesNum.textContent = targetComment.getDislikesNum();
        dislikeBtn.style.color = "#f549bc";
      } else {
        targetComment.removeDislike(new DislikeComment(account.name));
        dislikesNum.textContent = targetComment.getDislikesNum();
        dislikeBtn.style.color = " #06061e";
      }
    }
  }

  if (e.target.classList.contains("edit-post-btn")) {
    account.posts.forEach((postItem) => {
      postItem.setIsEditing(false);
      renderPosts(postItem);
    });

    target.setIsEditing(true);
    console.log(target);

    postListEl.innerHTML = "";

    account.posts.forEach(function (postItem) {
      if (!postItem.isEditing) {
        renderPosts(postItem);
      } else {
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
        
         <form class="post-text-form">
         <input class="post-input-text" value="${postItem.postText}" required />
         <div class="edit-cont"><button class="submit-post-btn">Submit Post</button></div>
         </form>
        
        
        <div class="likes-container">
        <i class='bx bx-like like-icon'></i>
        
        <p class="like-text">  <span class="number-of-likes">${postItem.getLikesNumber()}</span>&nbsp; <span class="liked-text">${displayLikesText(postItem.likes)}</span>  <span class="number-of-comments">${postItem.getCommentsNumber()} comments</span></p>
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
        
        <ul class="comments hidden"></ul>
        
        </li>
        `;
        postEl.className = "post-item-form";
        postEl.setAttribute("data-id", postItem.id);
        postListEl.appendChild(postEl);

        const commentsListEl = postEl.querySelector(".comments");
        postItem.comments.forEach(function (comment) {
          renderComments(comment, commentsListEl);
        });

        function handleEdit(e) {
          e.preventDefault();

          const targetForm = e.target;
          let postText = targetForm.querySelector(".post-input-text").value;

          target.setIsEditing(false);
          target.setPostText(postText);

          postListEl.innerHTML = "";
          account.posts.forEach(function (postItem) {
            renderPosts(postItem);
          });
          postEl.removeEventListener("submit", handleEdit);
        }

        postEl.addEventListener("submit", handleEdit);
      }
    });
  }
});

setTimeout(() => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  // loader.remove();
}, "1000");
