(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const k of r.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&u(k)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const $=document.querySelector(".friends-list"),w=document.querySelector(".name"),N=document.querySelector(".friends"),D=document.querySelector(".address"),b=document.querySelector(".post-list"),P=document.querySelector(".form-post"),C=document.querySelector(".input-post-text");class F{constructor(){this.day=new Date().getDate(),this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.date=`${this.day}.${this.month}.${this.year}`}}const M=new F;class H{constructor(){this.name="Sara Ilic",this.address="Nis",this.friends=[],this.posts=[]}addFriend(e){this.friends.push(e)}getFriendsNumber(){return this.friends.length}addPost(e){this.posts.push(e)}}class U{constructor(e,n){this.name=e,this.photo=n}}class q{constructor(e,n){this.name=e,this.postText=n,this.postDate=M.date,this.id=crypto.randomUUID(),this.likes=[],this.comments=[],this.isEditing=!1}addLikes(e){this.likes.unshift(e)}removeLike(e){this.likes=this.likes.filter(n=>n.id!==e)}addComment(e){this.comments.unshift(e)}getLikesNumber(){return this.likes.length}getCommentsNumber(){return this.comments.length}setIsEditing(e){this.isEditing=e}setPostText(e){this.postText=e}}class g{constructor(e){this.person=e,this.id=crypto.randomUUID()}}class v{constructor(e,n,u){this.person=e,this.photo=n,this.commentText=u,this.id=crypto.randomUUID(),this.likes=[],this.dislikes=[],this.isEditing=!1}getLikesNum(){return this.likes.length}getDislikesNum(){return this.dislikes.length}addLike(e){this.likes.unshift(e)}removeLike(e){this.likes=this.likes.filter(n=>n.id!==e)}addDislike(e){this.dislikes.unshift(e)}removeDislike(e){this.dislikes=this.dislikes.filter(n=>n.id!==e)}setIsEditing(e){this.isEditing=e}setCommentText(e){this.commentText=e}}class A{constructor(e){this.person=e,this.id=crypto.randomUUID()}}class O{constructor(e){this.person=e,this.id=crypto.randomUUID()}}const j=[{name:"Angelina Simonovska",photo:"/angelina-simonovska.webp"},{name:"Mark Anderson",photo:"/marc-anderson.webp"},{name:"Carol Hamada",photo:"/carol-hamada.jpeg"},{name:"Jorge Fakhouri",photo:"/jorge-fakhouri.webp"},{name:"Julie Thompson",photo:"/julie-thompson.webp"},{name:"Nina Vuksanovic",photo:"/nina-vuksanovic.jpeg"}],B=[{name:"Sara Ilic",postText:` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
    excepturi molestias ut fuga distinctio?`},{name:"Sara Ilic",postText:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
    natus praesentium magni quia, officia autem adipisci.`}];let S;C.addEventListener("input",function(t){S=t.target.value});const s=new H;w.textContent=s.name;D.textContent=s.address;j.forEach(function(t){s.addFriend(new U(t.name,t.photo)),N.textContent=s.getFriendsNumber()});s.friends.forEach(function(t){const e=document.createElement("li");e.innerHTML=` <img class="img-friend" src=${t.photo} alt="profile" /><p class="friend-name">${t.name}</p>`,e.className="transaction-item",$.appendChild(e)});B.forEach(function(t){let e=new q(t.name,t.postText);s.addPost(e)});s.posts[0].addLikes(new g(s.friends[4].name));s.posts[0].addLikes(new g(s.friends[5].name));s.posts[0].addLikes(new g(s.friends[0].name));s.posts[0].addLikes(new g(s.friends[1].name));s.posts[0].addLikes(new g(s.friends[2].name));s.posts[0].addComment(new v(s.friends[4].name,s.friends[4].photo,`Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Rem ipsum assumenda excepturi hic ex.`));s.posts[0].addComment(new v(s.friends[5].name,s.friends[5].photo,`Temporibus dolores nulla explicabo esse fugit qui velit nostrum iusto
    atque ea. Corrupti corporis ea repudiandae! Nostrum, aut magnam.`));s.posts[1].addComment(new v(s.friends[2].name,s.friends[2].photo,`Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Rem ipsum assumenda excepturi hic ex.`));s.posts[1].addComment(new v(s.friends[1].name,s.friends[1].photo,`Temporibus dolores nulla explicabo esse fugit qui velit nostrum iusto
    atque ea. Corrupti corporis ea repudiandae! Nostrum, aut magnam.`));function y(t){let e="";return t.length===1&&(e=`${t[0].person} like this`),t.length===2&&(e=`${t[0].person} and ${t[1].person}`),t.length>2&&(e=`${t[0].person}, ${t[1].person} and ${t.length-2} others like this`),e.includes(s.name)?e.replace(s.name,"You"):e}function h(t,e){let n=document.createElement("li");n.innerHTML=`
  <img class="comment-img" src=${t.photo} />
  <div class="comment-cont">
  <h3 class="person-commenting">${t.person}</h3>

  <div class="comment-text-cont">
  <p class="persons-comment">
  ${t.commentText}
  </p>
  <div class="edit-comment ${t.person!==s.name?"hidden":""}"><button class="edit-comment-btn">Edit Comment</button></div>
  </div>

  <div class="like-dislike-cont">
  <i class='bx bx-like'></i>
  <span class="likes-num">0</span>
  <i class='bx bx-dislike'></i>
  <span class="dislikes-num">0</span>
  </div>
  </div>
  `,n.className="item-comment",n.setAttribute("data-id",t.id),e.appendChild(n)}function x(t){const e=document.createElement("li");e.innerHTML=`
  <div class="account-posting">
  <img class="img-post" src="/profile.png" alt="profile" />
  <div class="info-post">
  <p class="account">${t.name}</p>
  <p class="days">${t.postDate}</p>
  </div>
  </div>
  
  <div class="post-text-cont">
  <p class="post-text">
  ${t.postText}
  </p>
  <div class="edit-cont"><button class="edit-post-btn">Edit Post</button></div>
  </div>
  
  
  <div class="likes-container">
  <i class='bx bx-like like-icon' id="like-btn"></i>
  
  <p class="like-text">  <span class="number-of-likes">${t.getLikesNumber()}</span>&nbsp; <span class="liked-text">${y(t.likes)}</span>  <span class="number-of-comments">${t.getCommentsNumber()} comments</span></p>
  </div>
  
  <div class="like-and-comment">
  <button class="like-btn" id="like-btn"> <i class='bx bx-like' id="like-btn"></i> Like</button>
  <button class="comment-btn" id="comment-btn"> <i class='bx bx-message-dots' id="comment-btn"></i> Comment</button>
  </div>
  
  <form class="write-comment">
  <img class="comment-img" src="/profile.png" alt="profile" />
  <input type="text" class="input-comment" placeholder="Write a comment" required />
  <button class="hidden"></button>
  </form>
  
  <ul class="comments hidden"></ul>
  
  </li>
  `,e.className="post-item",e.setAttribute("data-id",t.id),b.appendChild(e);const n=e.querySelector(".comments");t.comments.forEach(function(u){h(u,n)}),t.likes.some(u=>u.person===s.name)&&(e.querySelector(".like-btn").style.color="#7449f5",e.querySelector(".like-icon").style.color="#7449f5")}s.posts.forEach(function(t){x(t)});P.addEventListener("submit",function(t){t.preventDefault();let e=new q(s.name,S);s.addPost(e),x(e),C.value=""});b.addEventListener("click",function(t){var E;if(!t.target.id==="comment-btn"&&!t.target.classList.contains("write-comment")&&!t.target.classList.contains("input-comment")&&!t.target.closest(".comments")&&!t.target.classList.contains("edit-post-btn")&&!t.target.id==="like-btn"&&!t.target.classList.contains("edit-comment-btn"))return;let e=t.target.closest(".post-item");const n=e.querySelector(".comments");let u=e.dataset.id,o=s.posts.find(i=>i.id===u);const r=t.target.closest(".item-comment"),k=(E=t.target.closest(".item-comment"))==null?void 0:E.dataset.id,a=o.comments.find(i=>i.id===k);if(t.target.id==="comment-btn"&&n.classList.toggle("hidden"),t.target.classList.contains("write-comment")||t.target.classList.contains("input-comment")){let c=function(l){l.preventDefault(),o.addComment(new v(s.name,"/profile.png",m.value)),m.value="",n.innerHTML="",o.comments.forEach(function(d){h(d,n)});const p=e.querySelector(".number-of-comments");p.textContent=`${o.getCommentsNumber()} comments`,n.classList.remove("hidden"),i.removeEventListener("submit",c)};var J=c;const i=e.querySelector(".write-comment"),m=e.querySelector(".input-comment");i.addEventListener("submit",c)}if(t.target.id==="like-btn"){let m=function(){const c=e.querySelector(".liked-text");c.textContent=y(o.likes);const l=e.querySelector(".number-of-likes");l.textContent=o.getLikesNumber(),i?(e.querySelector(".like-icon").style.color=" #06061e",e.querySelector(".like-btn").style.color=" #06061e"):(e.querySelector(".like-icon").style.color="#7449f5",e.querySelector(".like-btn").style.color="#7449f5")};var R=m;const i=o.likes.find(c=>c.person===s.name);i?(o.removeLike(i.id),m()):(o.addLikes(new g(s.name)),m())}if(t.target.closest(".comments")){const i=r.querySelector(".likes-num"),m=r.querySelector(".dislikes-num"),c=r.querySelector(".bx-like"),l=r.querySelector(".bx-dislike"),p=a.likes.find(f=>f.person===s.name),d=a.dislikes.find(f=>f.person===s.name);t.target.classList.contains("bx-like")&&(a.likes.some(f=>f.person===s.name)?(a.removeLike(p.id),i.textContent=a.getLikesNum(),c.style.color=" #06061e"):(a.addLike(new A(s.name)),i.textContent=a.getLikesNum(),c.style.color="#7449f5")),t.target.classList.contains("bx-dislike")&&(a.dislikes.some(f=>f.person===s.name)?(a.removeDislike(d.id),m.textContent=a.getDislikesNum(),l.style.color=" #06061e"):(a.addDislike(new O(s.name)),m.textContent=a.getDislikesNum(),l.style.color="#f549bc"))}t.target.classList.contains("edit-post-btn")&&(s.posts.forEach(i=>{i.setIsEditing(!1),x(i)}),o.setIsEditing(!0),b.innerHTML="",s.posts.forEach(function(i){if(!i.isEditing)x(i);else{let p=function(d){d.preventDefault();let L=d.target.querySelector(".post-input-text").value;o.setIsEditing(!1),o.setPostText(L),b.innerHTML="",s.posts.forEach(function(T){x(T)}),c.removeEventListener("submit",p)};var m=p;const c=document.createElement("li");c.innerHTML=`
        <div class="account-posting">
        <img class="img-post" src="/profile.png" alt="profile" />
        <div class="info-post">
        <p class="account">${i.name}</p>
        <p class="days">${i.postDate}</p>
        </div>
        </div>
        
         <form class="post-text-form">
         <textarea class="post-input-text">${i.postText} </textarea>
         <div class="edit-cont"><button class="submit-post-btn">Submit Post</button></div>
         </form>
        
        <div class="likes-container">
        <i class='bx bx-like like-icon'></i>
        
        <p class="like-text">  <span class="number-of-likes">${i.getLikesNumber()}</span>&nbsp; <span class="liked-text">${y(i.likes)}</span>  <span class="number-of-comments">${i.getCommentsNumber()} comments</span></p>
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
        `,c.className="post-item-form",c.setAttribute("data-id",i.id),b.appendChild(c);const l=c.querySelector(".comments");i.comments.forEach(function(d){h(d,l)}),i.likes.some(d=>d.person===s.name)&&(c.querySelector(".like-btn").style.color="#7449f5",c.querySelector(".like-icon").style.color="#7449f5"),c.addEventListener("submit",p)}})),t.target.classList.contains("edit-comment-btn")&&(o.comments.forEach(i=>{i.setIsEditing(!1),h(i,n)}),a.setIsEditing(!0),console.log(a),n.innerHTML="",o.comments.forEach(i=>{if(!i.isEditing)h(i,n);else{let l=function(p){p.preventDefault();const f=p.target.querySelector(".input-persons-comment").value;a.setIsEditing(!1),a.setCommentText(f),n.innerHTML="",o.comments.forEach(L=>h(L,n)),c.removeEventListener("submit",l)};var m=l;let c=document.createElement("li");c.innerHTML=`
        <img class="comment-img" src=${i.photo} />
        <div class="comment-cont">
        <h3 class="person-commenting">${i.person}</h3>

        <form class="comment-text-form">
        <textarea class="input-persons-comment">
        ${i.commentText}
        </textarea>
        <div class="edit-comment ${i.person!==s.name?"hidden":""}"><button class="submit-comment-btn">Submit Comment</button></div>
        </form>

        <div class="like-dislike-cont">
        <i class='bx bx-like'></i>
        <span class="likes-num">0</span>
        <i class='bx bx-dislike'></i>
        <span class="dislikes-num">0</span>
        </div>
        </div>
        `,c.className="form-item-comment",c.setAttribute("data-id",i.id),n.appendChild(c),c.addEventListener("submit",l)}}))});setTimeout(()=>{const t=document.querySelector(".loader");t.classList.add("loader-hidden"),t.remove()},"1000");
