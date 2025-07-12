# Mentorship Matching Platform — Backend

## 🧠 About the Project

This is the backend service for the **Mentorship Matching Platform**, a web application designed to connect mentors and mentees within accelerator or incubator programs. The backend is built with **Node.js** and **Express**, and provides a robust RESTful API to manage core functionalities such as:

- User registration & authentication
- Profile creation and management
- Mentor discovery via filters/search
- Session scheduling and management
- Feedback collection and tracking

---

## 🚀 Features

- 🔐 JWT-based Authentication and Role Authorization (Mentor, Mentee, Admin)
- 📋 Full CRUD for user profiles and mentor information
- 🔎 Mentor search with filtering (e.g., industry, experience)
- 📅 Session booking, rescheduling, and cancellation
- 📝 Session feedback and review tracking
- 🛠️ Scalable and modular architecture

---

## 🛠️ Tech Stack

- **Backend Framework:** Node.js + Express.js
- **Database:** MongoDB + Mongoose ODM
- **Authentication:** JWT + Bcrypt
- **Validation:** Express Validator / Joi
- **Environment:** Dotenv for environment variables
- **Testing:** Jest / Supertest (optional)
- **API Format:** REST (JSON)

---

## 📁 Folder Structure

├── controllers/ # API logic (user, session, feedback)
├── models/ # Mongoose schemas
├── routes/ # Express routes
├── middleware/ # Auth, error handling
├── config/ # Database config, etc.
├── utils/ # Helper functions
├── .env # Environment variables
├── app.js # Main Express app
└── server.js # Entry point

---

## 📌 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/mentorship-matching-backend.git
cd mentorship-matching-backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Run the server:

bash
Copy
Edit
npm run dev
Server will start on http://localhost:5000.

📬 API Endpoints Overview
Endpoint	Method	Description
/api/auth/register	POST	Register a new user
/api/auth/login	POST	Login and retrieve JWT token
/api/users/me	GET	Get current user profile
/api/users/:id	PUT	Update user profile
/api/mentors	GET	Discover mentors (with filters)
/api/sessions	POST	Schedule a session
/api/sessions/:id	PATCH	Reschedule or cancel a session
/api/feedback	POST	Submit feedback for a session

🧪 Future Improvements
Email notifications for session reminders

Admin dashboard and reporting

Rate limiting and security hardening

Swagger API documentation

🤝 Contributing
Feel free to fork this project and submit a pull request. Contributions are welcome!

📝 License
This project is open source and available under the MIT License.

✨ Author
Built with ❤️ by John Paul Abraham
