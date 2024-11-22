# Book World

A full-featured book review and management application built with the MERN stack (`MongoDB`, `Express`, `React`, `Node.js`). Users can browse books, leave reviews with star ratings, and manage their favorites. Admins have extended capabilities for adding, editing, and deleting books, as well as managing user data and access.

## Features

- **User Authentication:**
  - Secure user registration and login system.
  - JWT for authorization.
  - Bcrypt for password hashing.

- **Book Listing with Reviews & Ratings:**
  - Browse and search for books.
  - Leave comprehensive reviews with star ratings.
  - Read and gain insights from community reviews.

- **User Profile Pages:**
  - Personalized profiles to track activity.
  - Manage and curate a list of favorite books.

- **Advanced Feature:**
  - Unique nested commenting system using Depth-First Search (DFS) for efficient comment deletion within the review tree structure.

- **User Roles & Permissions:**
  - Differentiation between user and admin roles.
  - Admin capabilities to add, update, and delete book listings.
  - Manage user data and user roles (excluding a master admin).


## Technologies Used

- **Frontend:**
  - React.js
  - Recoil for State Management
  - Tailwind CSS
  - Shadcn UI library
  - React Hook Form
  - Tanstack Tables
  - Lucide-React for icons


- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose for MongoDB object modeling
  - Multer for handling `multipart/form-data`
  - CORS for Cross-Origin Resource Sharing
  - JWT for token-based authentication
  - Bcrypt for secure password storage


- **Other Dependencies:**
  - Axios   
  - Zod for schema validation
  - React Router DOM for routing
  - Cloudinary for image uploads (optional)

## Installation Guide

### Requirements

- Node.js
- MongoDB
  
You can use use Mongo Atlas URL instead of local MongoDB

### Configure Environment Variables

Rename .env.example to .env in both backend and frontend directories.

Add your `MONGO_URL`, `JWT_SECRET`, `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET`, and `PORT` to the backend .env files.

If you don't have Cloudinary, you can replace `cloudStorage` with `diskStorage` in `/backend/middleware/upload.js`.

### Installation

#### Clone the Repository

```shell
git clone https://github.com/MayankGhatawal/Book-World.git
cd book-world
```

#### Install packages

```shell
cd backend
npm install
cd ..
cd frontend
npm install
```

#### Start Frontend

Make sure you are in `frontend` directory

```shell
npm run dev
```

#### Start Backend

Make sure you are in `backend` directory

```shell
node index.js
```

Now open `localhost:5173` on your browser
