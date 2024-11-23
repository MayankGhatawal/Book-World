# 🌟 **Book World**  
A full-featured book review and management application built using the **MERN stack**.  


<img src="https://private-user-images.githubusercontent.com/67575976/342090561-f1c41565-9ad9-47d5-86b3-60e95f4f9215.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzIyNjE0ODEsIm5iZiI6MTczMjI2MTE4MSwicGF0aCI6Ii82NzU3NTk3Ni8zNDIwOTA1NjEtZjFjNDE1NjUtOWFkOS00N2Q1LTg2YjMtNjBlOTVmNGY5MjE1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTIyVDA3Mzk0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRiMTA0NzgzZWQ0ZjcyZTkwMWVhMzIyM2NlY2MxODExODAwMmNjNTUzMTdmZDUzMjhmNWRiMjMzMTE2YzdhNjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.P9mrEjbAvKMMVva_M_UgGzTdNBXrP1ZU5Ix6kACBKTQ"></img>

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
