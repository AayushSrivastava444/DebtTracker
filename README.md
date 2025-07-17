# DebtTracker

A simple MERN stack application to track money you owe or money owed to you.  
Manage debts by adding, viewing, and deleting entries with an easy and clean interface.

---

## Features

- Add new debts with Name, Amount, and Type (Owed to you / You owe)  
- View all debts in a list  
- Delete debts once settled  
- Backend powered by Node.js, Express, MongoDB  
- Frontend built with React and Axios  
- CORS enabled for smooth API communication

---

## Tech Stack

- Frontend: React, Axios, React Router  
- Backend: Node.js, Express, MongoDB, Mongoose  
- Styling: CSS Modules

---

## Getting Started

### Prerequisites

- Node.js installed ([Download here](https://nodejs.org/))  
- MongoDB installed and running locally or use MongoDB Atlas  
- Git installed ([Download here](https://git-scm.com/))

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/AayushSrivastava444/DebtTracker.git
   cd DebtTracker
````

2. Install backend dependencies and start backend server:

   ```bash
   cd Backend
   npm install
   npm start
   ```

3. In a new terminal, install frontend dependencies and start frontend server:

   ```bash
   cd ../client
   npm install
   npm start
   ```

4. By default, the app runs on http://localhost:3000.
If port 3000 is busy, it may prompt to run on another port like 3001.
In that case, open the port shown in your terminal (e.g., http://localhost:3001).

---

## Environment Variables

Create a `.env` file inside the `Backend` folder and add your MongoDB URI:

```env
MONGO_URI=your_mongodb_connection_string
```

---

## Folder Structure

```
DebtTracker/
├── Backend/           # Backend Express server
│   ├── Models/        # Mongoose schemas
│   ├── Routes/        # API routes
│   ├── Server.js      # Entry point for backend
│   └── .env           # Environment variables (ignored by git)
├── client/            # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── Pages/
│   │   ├── AddDebt.jsx
│   │   ├── DebtList.jsx
│   │   ├── App.js
│   │   └── ...
│   └── package.json
└── .gitignore
````

---

## Contributing

Feel free to open issues or submit pull requests if you'd like to improve the project!

---

## License

This project is open-source and available under the MIT License.

---

## Author

**Aayush Srivastava**
GitHub: [AayushSrivastava444](https://github.com/AayushSrivastava444)
Email: AayushSrivastava444

---
