# CRUD API with Node.js

## Introduction

This project implements a simple CRUD API using Node.js and an in-memory database. The API allows users to perform CRUD operations on a collection of users, including creating, reading, updating, and deleting user records.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/crud-api-node.git
   ```
2. Install dependencies

   ```
   npm install
   ```

3. Rename .env.example to .env or create a .env file in the root directory and define the environment variables: `PORT=4000`

## Usage

#### Running the Application

To run the application, you can use the following npm scripts:

Development mode (with nodemon): `npm run start:dev`
Production mode (with ts-node): `npm run start:prod`
Multi-instance mode (with Node.js Cluster API): `npm run start:multi`

### API Endpoints

#### GET /api/users

- Description: Get all users
- Response: Array of user objects

#### GET /api/users/{userId}

- Description: Get user by ID
- Parameters:
- `{userId}`: The unique identifier of the user
- Response:
- Status 200: User object
- Status 400: If the ID is invalid
- Status 404: If user with the specified ID does not exist

#### POST /api/users

- Description: Create a new user
- Request Body: User object (with username, age, and hobbies)
- Response:
- Status 201: Newly created user object
- Status 400: If request body is missing required fields

#### PUT /api/users/{userId}

- Description: Update an existing user
- Parameters:
- `{userId}`: The unique identifier of the user
- Request Body: User object (with username, age, and hobbies)
- Response:
- Status 200: Updated user object
- Status 400: If the ID is invalid or request body is missing required fields
- Status 404: If user with the specified ID does not exist

#### DELETE /api/users/{userId}

- Description: Delete an existing user
- Parameters:
- `{userId}`: The unique identifier of the user
- Response:
- Status 204: If the user is successfully deleted
- Status 400: If the ID is invalid
- Status 404: If user with the specified ID does not exist
