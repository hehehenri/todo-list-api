# Todo list API

I created this project to feel what it's like to create something with node.js

## Steps to run it

 - Install dependencies
 - Rename `src/config/database.example.js` file to `database.js`
 - Set up the database running the following command:
   - `$./node_modules/.bin/sequelize db:migrate`

## Endpoints

| Method   | Route       | Description                        |
|----------|-------------|------------------------------------|
| GET      | /todos/     | List all todos from database       |
| GET      | /todos/{id} | List a specific todo from database |
| POST     | /todos/     | Create a todo                      |
| PUT      | /todos/{id} | Update a specific todo             |
| DELETE   | /todos/{id} | Update a specific todo             |
