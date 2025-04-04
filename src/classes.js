export class PublishedDate {
  constructor() {
    this.day = new Date().getDate();
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
    this.date = `${this.day}.${this.month}.${this.year}`;
  }
}
export const date = new PublishedDate();

export class Account {
  constructor() {
    this.name = "Sara Ilic";
    this.address = "Nis";
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

export class Friend {
  constructor(name, photo) {
    this.name = name;
    this.photo = photo;
  }
}

export class Post {
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

  removeLike(id) {
    this.likes = this.likes.filter((like) => like.id !== id);
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

export class Like {
  constructor(person) {
    this.person = person;
    this.id = crypto.randomUUID();
  }
}

export class Comment {
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

  removeLike(id) {
    this.likes = this.likes.filter((like) => like.id !== id);
  }

  addDislike(person) {
    this.dislikes.unshift(person);
  }

  removeDislike(id) {
    this.dislikes = this.dislikes.filter((like) => like.id !== id);
  }
}

export class LikeComment {
  constructor(person) {
    this.person = person;
    this.id = crypto.randomUUID();
  }
}

export class DislikeComment {
  constructor(person) {
    this.person = person;
    this.id = crypto.randomUUID();
  }
}
