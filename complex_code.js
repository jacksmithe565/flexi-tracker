/* filename: complex_code.js */
// This code demonstrates a complex and sophisticated implementation of a blogging platform

// Sample data for blog posts
const posts = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    content: "JavaScript is a versatile programming language...",
    author: "John Doe",
    likes: 456,
    comments: [
      { author: "Jane Smith", comment: "Great post!" },
      { author: "Bob Johnson", comment: "Awesome!" }
    ]
  },
  {
    id: 2,
    title: "Advanced React Concepts",
    content: "In this article, we'll delve into advanced React...",
    author: "Jane Smith",
    likes: 789,
    comments: [
      { author: "John Doe", comment: "Well explained!" },
      { author: "Alice Brown", comment: "Very helpful. Thanks!" }
    ]
  },
  // More sample posts...
];

// Class representing a blog post
class BlogPost {
  constructor(id, title, content, author, likes, comments) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.likes = likes;
    this.comments = comments;
  }

  getFormattedPostedDate() {
    const now = new Date();
    const diff = Math.abs(now - this.postedDate) / 1000;
    const days = Math.floor(diff / 86400);
    return `${days} days ago`;
  }

  addComment(author, comment) {
    this.comments.push({ author, comment });
  }

  getComments() {
    return this.comments.map(comment => comment.comment);
  }

  getLikes() {
    return this.likes;
  }

  incrementLikes() {
    this.likes++;
  }
}

// Create blog post objects using the sample data
const blogPosts = posts.map(post => new BlogPost(
  post.id,
  post.title,
  post.content,
  post.author,
  post.likes,
  post.comments
));

// Function to sort blog posts based on number of likes
function sortPostsByLikes() {
  return blogPosts.sort((a, b) => b.likes - a.likes);
}

// Function to find blog post by title
function findPostByTitle(title) {
  return blogPosts.find(post => post.title.toLowerCase() === title.toLowerCase());
}

// Function to find blog posts by author
function findPostsByAuthor(author) {
  return blogPosts.filter(post => post.author.toLowerCase() === author.toLowerCase());
}

// Example usage of the above functions
const sortedPosts = sortPostsByLikes();
console.log("Sorted Posts:", sortedPosts);

const postWithTitle = findPostByTitle("Advanced React Concepts");
console.log("Post with Title:", postWithTitle);

const postsByAuthor = findPostsByAuthor("John Doe");
console.log("Posts by Author:", postsByAuthor);

// ... More complex and sophisticated code ...
// This code could include additional components, routing, API integration, etc.
// However, due to character limitations, only the above portion is provided.