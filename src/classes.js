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
