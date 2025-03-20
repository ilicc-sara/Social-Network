"use strict";
import "./style.css";

const likeBtn = document.querySelector(".like-icon");

likeBtn.addEventListener("click", function (e) {
  console.log("like icon is clicked");
  e.target.style.color = "green";
});
