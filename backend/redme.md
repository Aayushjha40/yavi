# Yavi Project Backend

This is the backend for the Yavi Project, a travel booking application. The backend is built using Node.js, Express, and MongoDB. It provides APIs for user authentication, booking management, and other functionalities required by the frontend.

## Project Structure

backend/ │ ├── .env ├── .gitignore ├── index.js ├── package.json ├── server.js ├── config/ │ └── db.js ├── controllers/ │ └── user.controller.js ├── middlewares/ │ └── auth.middlewares.js ├── models/ │ ├── blacklistToken.model.js │ ├── Card.js │ └── user.model.js ├── routes/ │ └── user.routes.js └── services/ └── user.service.js

### Configuration

- **.env**: Contains environment variables such as `MONGO_URI`, `PORT`, and `JWT_SECRET`.

### Main Files

- **index.js**: Entry point of the application. Sets up the Express server and connects to the MongoDB database.
- **server.js**: Configures and starts the Express server.

### Folders

- **config/**: Contains configuration files.
  - **db.js**: Connects to the MongoDB database using Mongoose.

- **controllers/**: Contains controller files that handle the logic for different routes.
  - **user.controller.js**: Handles user-related operations such as registration, login, profile retrieval, and logout.

- **middlewares/**: Contains middleware files.
  - **auth.middlewares.js**: Middleware for authenticating users using JWT tokens.

- **models/**: Contains Mongoose models.
  - **blacklistToken.model.js**: Model for storing blacklisted JWT tokens.
  - **Card.js**: Model for managing travel packages, destinations, itineraries, and bookings.
  - **user.model.js**: Model for managing user data.

- **routes/**: Contains route files.
  - **user.routes.js**: Defines routes for user-related operations such as registration, login, profile retrieval, and logout.

- **services/**: Contains service files that encapsulate business logic.
  - **user.service.js**: Service for creating users.

### API Endpoints

- **POST /api/users/register**: Registers a new user.
- **POST /api/users/login**: Logs in a user.
- **GET /api/users/profile**: Retrieves the profile of the logged-in user.
- **GET /api/users/logout**: Logs out the user and blacklists the JWT token.

### Running the Project

1. **Install dependencies**:
   ```sh
   npm install
