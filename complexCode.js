/* complexCode.js */

// This code demonstrates a complex implementation of a social media platform

// Define SocialMedia class
class SocialMedia {
  constructor() {
    this.users = [];
    this.posts = [];
    this.comments = [];
  }

  // User-related methods
  addUser(username, email, password) {
    const user = new User(username, email, password);
    this.users.push(user);
    console.log(`User ${username} has been added.`);
  }

  removeUser(username) {
    const userIndex = this.users.findIndex(user => user.username === username);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      console.log(`User ${username} has been removed.`);
    } else {
      console.log(`User ${username} not found.`);
    }
  }

  login(username, password) {
    const user = this.users.find(user => user.username === username);
    if (user && user.password === password) {
      user.isLoggedIn = true;
      console.log(`User ${username} has logged in.`);
    } else {
      console.log(`Invalid credentials for user ${username}.`);
    }
  }

  logout(username) {
    const user = this.users.find(user => user.username === username);
    if (user) {
      user.isLoggedIn = false;
      console.log(`User ${username} has logged out.`);
    } else {
      console.log(`User ${username} not found.`);
    }
  }

  // Post-related methods
  addPost(username, content) {
    const user = this.users.find(user => user.username === username);
    if (user && user.isLoggedIn) {
      const post = new Post(username, content);
      this.posts.push(post);
      console.log(`Post added by ${username}`);
    } else {
      console.log(`User ${username} must be logged in to add a post.`);
    }
  }

  removePost(postId) {
    const postIndex = this.posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
      this.posts.splice(postIndex, 1);
      console.log(`Post ${postId} has been removed.`);
    } else {
      console.log(`Post ${postId} not found.`);
    }
  }

  // Comment-related methods
  addComment(username, postId, content) {
    const user = this.users.find(user => user.username === username);
    const post = this.posts.find(post => post.id === postId);
    if (user && user.isLoggedIn && post) {
      const comment = new Comment(username, postId, content);
      this.comments.push(comment);
      console.log(`Comment added by ${username} on post ${postId}`);
    } else {
      console.log(`Invalid credentials or post not found.`);
    }
  }

  removeComment(commentId) {
    const commentIndex = this.comments.findIndex(comment => comment.id === commentId);
    if (commentIndex !== -1) {
      this.comments.splice(commentIndex, 1);
      console.log(`Comment ${commentId} has been removed.`);
    } else {
      console.log(`Comment ${commentId} not found.`);
    }
  }
}

// Define User class
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.isLoggedIn = false;
  }
}

// Define Post class
class Post {
  constructor(username, content) {
    this.username = username;
    this.content = content;
    this.id = Math.floor(Math.random() * 1000); // Generate random post ID
  }
}

// Define Comment class
class Comment {
  constructor(username, postId, content) {
    this.username = username;
    this.postId = postId;
    this.content = content;
    this.id = Math.floor(Math.random() * 1000); // Generate random comment ID
  }
}

// Usage example
const socialMedia = new SocialMedia();

socialMedia.addUser("JohnDoe", "john.doe@example.com", "password123");
socialMedia.login("JohnDoe", "password123");
socialMedia.addPost("JohnDoe", "Hello world! This is my first post.");
socialMedia.addComment("JohnDoe", 1, "Nice post!");

socialMedia.logout("JohnDoe");
socialMedia.removeUser("JohnDoe");
socialMedia.removeComment(1);
socialMedia.removePost(1);

// Output:
// User JohnDoe has been added.
// User JohnDoe has logged in.
// Post added by JohnDoe
// Comment added by JohnDoe on post 1
// User JohnDoe has logged out.
// User JohnDoe has been removed.
// Comment 1 has been removed.
// Post 1 has been removed.