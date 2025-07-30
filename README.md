# MERN Auth Posts API

A simple Node.js/Express REST API for user authentication and post management, built with MongoDB and JWT.  
Supports user signup/signin, email verification, password reset, and CRUD operations for posts.

## Features

- User registration & login with JWT authentication
- Email verification and password reset via email (Nodemailer)
- Create, read, update, and delete posts (only by the owner)
- Input validation with Joi
- Secure cookies for authentication

## Tech Stack

- Node.js & Express
- MongoDB & Mongoose
- JWT for authentication
- Nodemailer for emails
- Joi for validation

## Getting Started

1. **Clone the repo**
    ```bash
    git clone https://github.com/yourusername/mern-auth-posts-api.git
    cd mern-auth-posts-api
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up your `.env` file**
    ```
    PORT=5050
    MONGO_URI=your_mongo_connection_string
    TOKEN_SECRET=your_jwt_secret
    SENDING_EMAIL_ADDRESS=your_email@gmail.com
    SENDING_EMAIL_PASSWORD=your_email_app_password
    HMAC_VERIFICATION_CODE_SECRET=your_hmac_secret
    ```

4. **Run the server**
    ```bash
    npm start
    ```

## API Endpoints

- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/signin` — Login
- `POST /api/auth/send-verification-code` — Send email verification code
- `POST /api/auth/verify-code` — Verify email code
- `POST /api/auth/send-forgot-password-code` — Send password reset code
- `PATCH /api/auth/verify-forgot-password-code` — Reset password

- `GET /api/posts` — Get all posts (paginated)
- `GET /api/posts/single?_id=POST_ID` — Get a single post
- `POST /api/posts` — Create a post
- `PATCH /api/posts?_id=POST_ID` — Update a post
- `DELETE /api/posts?_id=POST_ID` — Delete a post

##
