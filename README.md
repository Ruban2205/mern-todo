# MERN To-Do Application

## Overview
The **MERN To-Do Application** is a simple yet robust task management app built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. This application allows users to efficiently manage their tasks, providing essential features such as task creation, updating, deletion, and status tracking.

## Features
- **Add Tasks**: Create new tasks with ease.
- **Update Tasks**: Edit existing tasks to reflect changes.
- **Delete Tasks**: Remove completed or unwanted tasks.
- **Task Status Management**: Mark tasks as completed or pending.
- **Responsive Design**: User-friendly interface accessible on desktop and mobile devices.

## Tech Stack
### Frontend
- **React.js**: For building a dynamic and responsive user interface.
- **CSS/Bootstrap**: For styling the application.

### Backend
- **Node.js**: For handling server-side logic.
- **Express.js**: For creating a robust RESTful API.

### Database
- **MongoDB**: For storing task-related data.

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16.x or later)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Installation and Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Ruban2205/mern-todo.git
   cd mern-todo
   ```

2. **Install Dependencies**
   - Navigate to the `frontend` and `backend` directories and install dependencies for both parts.
     ```bash
     cd frontend
     npm install

     cd ../backend
     npm install
     ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the `backend` directory and add the following variables:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```

4. **Start the Application**
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm start
     ```

5. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`.

## Folder Structure
```
mern-todo
├── backend
│   ├── models       # Mongoose schemas
│   ├── routes       # API routes
│   ├── server.js    # Main entry point for the backend
│   └── .env         # Environment variables
├── frontend
│   ├── src
│   │   ├── components  # React components
│   │   ├── App.js      # Main React component
│   │   ├── index.js    # Entry point for React
│   └── public
├── README.md         # Project documentation
└── package.json      # Dependency manager files
```

## API Endpoints
| Endpoint          | Method | Description           |
|-------------------|--------|-----------------------|
| `/api/tasks`      | GET    | Fetch all tasks       |
| `/api/tasks`      | POST   | Create a new task     |
| `/api/tasks/:id`  | PUT    | Update an existing task |
| `/api/tasks/:id`  | DELETE | Delete a task         |

## Future Enhancements
- User authentication for personalized task management.
- Due date and priority management.
- Integration with external calendar services.
- Dark mode for enhanced usability.

## Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author
**Ruban Gino Singh**
- [GitHub](https://github.com/Ruban2205)
- [LinkedIn](https://linkedin.com/in/ruban2205)

---
Thank you for checking out this project! Feel free to raise issues or suggest features.
