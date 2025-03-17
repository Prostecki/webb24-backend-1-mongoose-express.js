# Mongoose CRUD Application

This project is a simple **Express.js** application using **Mongoose** to interact with **MongoDB**. It implements basic CRUD (Create, Read, Update, Delete) operations for managing blog posts in a MongoDB database.

## Features

- **Create**: Allows the creation of new blog posts.
- **Read**: Retrieve and display posts from the database.
- **Update**: Edit and update existing posts.
- **Delete**: Remove posts from the database.
- **Environment Configuration**: Sensitive data like the database credentials are stored securely in the `.env` file.

## Installation

1. Clone the repository:
```bash
 git clone https://github.com/yourusername/mongoose-on-my-own.git
```
2.	Navigate to the project directory:
 ```bash
 cd mongoose-on-my-own
```
3.	Install dependencies:
   ```bash
  npm install
```
4. Create a .env file in the root directory and add your MongoDB credentials:
  ```bash
  DB_USER=yourusername
  DB_PASSWORD=yourpassword
  ```
5. Start the server:
   ```bash
   npm run dev
   ```
## API Endpoints

You can access the API to manage posts:

- **GET** `/api/posts` - Fetch all posts.
- **POST** `/api/posts` - Create a new post. *(coming soon)*
- **GET** `/api/posts/:id` - Get a specific post by ID.
- **PUT** `/api/posts/:id` - Update a post by ID. *(coming soon)*
- **DELETE** `/api/posts/:id` - Delete a post by ID. *(coming soon)*

The server will be running at [http://localhost:3000](http://localhost:3000).
