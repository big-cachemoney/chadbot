# ChadBot API

A Flask REST API for the ChadBot fitness application, providing endpoints for user management, workout tracking, and activity management.

## Features

- **User Authentication**: JWT-based authentication with registration and login
- **User Management**: Profile management, password changes, and user CRUD operations
- **Activity Tracking**: Create, update, and track personal workout activities
- **Database Integration**: SQLAlchemy ORM with support for SQLite, PostgreSQL, and MySQL
- **API Documentation**: RESTful API with comprehensive error handling
- **Security**: Password hashing, JWT tokens, and input validation

## Project Structure

```
chadbot-api/
├── app.py                 # Main Flask application
├── config.py             # Configuration settings
├── requirements.txt      # Python dependencies
├── env.example          # Environment variables template
├── .gitignore           # Git ignore file
├── README.md            # This file
├── models/              # Database models
│   ├── __init__.py
│   ├── user.py
│   └── activity.py
├── routes/              # API routes
│   ├── __init__.py
│   ├── auth.py
│   ├── users.py
│   └── activities.py
├── middleware/          # Custom middleware
│   ├── __init__.py
│   └── auth.py
└── utils/               # Utility functions
    ├── __init__.py
    ├── validators.py
    └── helpers.py
```

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd chadbot/chadbot-api
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

5. **Initialize the database**:
   ```bash
   python app.py
   # This will create the database and tables
   ```

## Configuration

### Environment Variables

Create a `.env` file based on `env.example`:

```env
# Flask Configuration
SECRET_KEY=your-secret-key-here
FLASK_ENV=development
FLASK_DEBUG=True

# Database Configuration
DATABASE_URL=sqlite:///chadbot.db
# For PostgreSQL: postgresql://username:password@localhost/chadbot_db
# For MySQL: mysql://username:password@localhost/chadbot_db

# JWT Configuration
JWT_SECRET_KEY=your-jwt-secret-key-here

# CORS Configuration
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

### Database Setup

The API supports multiple database backends:

- **SQLite** (default): `sqlite:///chadbot.db`
- **PostgreSQL**: `postgresql://username:password@localhost/chadbot_db`
- **MySQL**: `mysql://username:password@localhost/chadbot_db`

## Running the Application

### Development Mode

```bash
python app.py
```

The API will be available at `http://localhost:5000`

### Production Mode

```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/refresh` - Refresh access token

### Users

- `GET /api/users/` - Get all users (admin)
- `GET /api/users/<id>` - Get user by ID
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update current user profile
- `PUT /api/users/change-password` - Change password
- `DELETE /api/users/<id>` - Delete user (admin)

### Activities

- `GET /api/activities/` - Get user's activities
- `GET /api/activities/<id>` - Get specific activity
- `POST /api/activities/` - Create new activity
- `PUT /api/activities/<id>` - Update activity
- `DELETE /api/activities/<id>` - Delete activity

### Health Check

- `GET /api/health` - API health check
- `GET /` - API information

## API Usage Examples

### Register a User

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "password": "SecurePass123!",
    "height": 175.0,
    "weight": 70.0,
    "age": 25,
    "gender": "male",
    "goal": "Build muscle and strength",
    "activity_level": "intermediate"
  }'
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "password": "SecurePass123!"
  }'
```

### Create an Activity

```bash
curl -X POST http://localhost:5000/api/activities/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Push-ups",
    "sets": 3,
    "reps": 15,
    "notes": "Morning workout routine"
  }'
```

## Database Models

### User
- User authentication with username and password
- Password hashing and verification
- Personal details: height, weight, age, gender, goal, personality, activity_level
- Relationship with activities (one-to-many)

### Activity
- User's personal workout activities
- Exercise details: name, sets, reps, weight, duration, notes
- Belongs to a specific user
- Direct relationship with User model

## Security Features

- **Password Hashing**: Uses Werkzeug's secure password hashing
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Comprehensive validation for all inputs
- **CORS Support**: Configurable cross-origin resource sharing
- **Error Handling**: Standardized error responses

## Development

### Adding New Endpoints

1. Create route functions in the appropriate file in `routes/`
2. Register the blueprint in `app.py`
3. Add validation and error handling
4. Update this README with endpoint documentation

### Database Migrations

For production use, consider using Flask-Migrate for database schema changes:

```bash
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

## Testing

Run tests (when implemented):

```bash
python -m pytest
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is part of the ChadBot fitness application.
