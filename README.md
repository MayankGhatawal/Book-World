# 🌟 **Book World**  
A full-featured book review and management application built using the **MERN stack**.  


<img src="https://github.com/MayankGhatawal/Book-World/blob/master/Screenshot%202024-11-22%20130046.png?raw=true"></img>

Users can explore books, leave reviews with star ratings, and manage their favorites. Admins enjoy extended features to manage books, users, and access controls.  

---

## ✨ **Features**  

### 🔒 **User Authentication**  
- Secure user registration and login.  
- **JWT** for token-based authorization.  
- **Bcrypt** for password hashing.  

### 📚 **Book Listing with Reviews**  
- Browse and search for books effortlessly.  
- Leave detailed reviews with star ratings.  
- Gain insights through community feedback.  

### 👤 **User Profiles**  
- Personalized dashboards to track activity.  
- Curate and manage a list of favorite books.  

### 💬 **Advanced Nested Commenting**  
- Efficient comment deletion using **DFS** within review threads.  

### ⚡ **Admin Features**  
- Role-based access control.  
- Manage books: Add, edit, or delete listings.  
- Oversee user data and roles (excluding a master admin).  

---

## 🛠 **Technologies Used**  

### Frontend  
- **React.js**  
- **Recoil** for state management  
- **Tailwind CSS** for styling  
- **ShadCN UI** for elegant components  
- **React Hook Form** for form handling  
- **TanStack Tables** for data display  
- **Lucide-React** for icons  

### Backend  
- **Node.js** + **Express.js**  
- **MongoDB** with **Mongoose**  
- **JWT** for authentication  
- **Multer** for file uploads  
- **CORS** for API accessibility  
- **Bcrypt** for secure password storage  

### Additional Dependencies  
- **Axios** for HTTP requests  
- **Zod** for schema validation  
- **React Router DOM** for routing  
- **Cloudinary** (optional) for image uploads  

---

## ⚙️ **Installation Guide**  

### Prerequisites  
- **Node.js**  
- **MongoDB** (local or **Mongo Atlas URL**)  

### 🔑 **Environment Variables**  
1. Rename `.env.example` to `.env` in both `backend` and `frontend` directories.  
2. Add the following keys:  
   - `MONGO_URL`  
   - `JWT_SECRET`  
   - `CLOUD_NAME`  
   - `CLOUD_API_KEY`  
   - `CLOUD_API_SECRET`  
   - `PORT`  

> **Note:** If not using Cloudinary, update `/backend/middleware/upload.js` to use `diskStorage`.  

---

### 🚀 **Steps to Run the Project**  

#### 1️⃣ Clone the Repository  
```bash  
git clone https://github.com/MayankGhatawal/Book-World.git  
cd book-world  
```  

#### 2️⃣ Install Dependencies  
```bash
# Backend  
cd backend  
npm install  

# Frontend  
cd ../frontend  
npm install  
```  

#### 3️⃣ Start the Application  
```bash  
# Frontend (from frontend directory)  
npm run dev

# Backend (from backend directory)  
node index.js
```  

#### 4️⃣ Access the Application  
- Open your browser and visit: **[localhost:5173](http://localhost:5173)**  

---

## 🙌 **Contributing**  
Contributions are welcome! Here's how you can get involved:  
1. Fork the repository.  
2. Create a new branch.  
3. Make your changes and commit them.  
4. Submit a pull request.  

---

## 📧 **Contact**  
For questions or support, feel free to reach out!  
- **GitHub:** [MayankGhatawal](https://github.com/MayankGhatawal)  

--- 

Make sure to enhance this further with real screenshots or visuals for added appeal.
