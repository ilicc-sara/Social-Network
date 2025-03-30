export class PublishedDate {
  constructor() {
    this.day = new Date().getDate();
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
    this.date = `${this.day}.${this.month}.${this.year}`;
  }
}

export class Account {
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

export class Like {
  constructor(person) {
    this.person = person;
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

export class LikeComment {
  constructor(person) {
    this.person = person;
  }
}

export class DislikeComment {
  constructor(person) {
    this.person = person;
  }
}
