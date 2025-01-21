Here's a draft for your repository's README:

# Notes App Back-End

This repository contains the back-end component of a simple notes application, developed as part of a Dicoding class project. The application is built using Node.js and the Hapi.js framework, providing a RESTful API for managing notes.

## Features

- **Create Notes**: Add new notes with a title, tags, and content.
- **Retrieve Notes**: Fetch all notes or a specific note by its ID.
- **Update Notes**: Modify existing notes' details.
- **Delete Notes**: Remove notes from the system.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Faruuuqqq/notes-app-back-end.git
   cd notes-app-back-end
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000` by default.

## API Endpoints

- **POST `/notes`**: Create a new note.
  - **Request Body**:

    ```json
    {
      "title": "Note Title",
      "tags": ["tag1", "tag2"],
      "body": "Content of the note."
    }
    ```

  - **Response**:
    - **Success (201)**:

      ```json
      {
        "status": "success",
        "message": "Catatan berhasil ditambahkan",
        "data": {
          "noteId": "noteId"
        }
      }
      ```

    - **Failure (500)**:

      ```json
      {
        "status": "error",
        "message": "Catatan gagal untuk ditambahkan"
      }
      ```

- **GET `/notes`**: Retrieve all notes.
  - **Response**:

    ```json
    {
      "status": "success",
      "data": {
        "notes": [
          {
            "id": "noteId",
            "title": "Note Title",
            "createdAt": "2025-01-21T16:22:13.000Z",
            "updatedAt": "2025-01-21T16:22:13.000Z",
            "tags": ["tag1", "tag2"],
            "body": "Content of the note."
          }
        ]
      }
    }
    ```

- **GET `/notes/{id}`**: Retrieve a specific note by ID.
  - **Response**:
    - **Success (200)**:

      ```json
      {
        "status": "success",
        "data": {
          "note": {
            "id": "noteId",
            "title": "Note Title",
            "createdAt": "2025-01-21T16:22:13.000Z",
            "updatedAt": "2025-01-21T16:22:13.000Z",
            "tags": ["tag1", "tag2"],
            "body": "Content of the note."
          }
        }
      }
      ```

    - **Failure (404)**:

      ```json
      {
        "status": "fail",
        "message": "Catatan tidak ditemukan"
      }
      ```

- **PUT `/notes/{id}`**: Update an existing note by ID.
  - **Request Body**:

    ```json
    {
      "title": "Updated Note Title",
      "tags": ["tag1", "tag2"],
      "body": "Updated content of the note."
    }
    ```

  - **Response**:
    - **Success (200)**:

      ```json
      {
        "status": "success",
        "message": "Catatan berhasil diperbarui"
      }
      ```

    - **Failure (404)**:

      ```json
      {
        "status": "fail",
        "message": "Gagal memperbarui catatan. Id catatan tidak ditemukan"
      }
      ```

- **DELETE `/notes/{id}`**: Delete a note by ID.
  - **Response**:
    - **Success (200)**:

      ```json
      {
        "status": "success",
        "message": "Catatan berhasil dihapus"
      }
      ```

    - **Failure (404)**:

      ```json
      {
        "status": "fail",
        "message": "Catatan gagal dihapus. Id catatan tidak ditemukan"
      }
      ```

## Project Structure

- `server.js`: Configures and runs the HTTP server using Hapi.js.
- `routes.js`: Defines the server routing configuration.
- `handler.js`: Contains handler functions used in routes.
- `notes.js`: Stores notes data in an object array.

## Dependencies

- **`@hapi/hapi`**: Web framework for building the server.
- **`nanoid`**: Generates unique IDs for notes.
- **`eslint`**: Linter for identifying and reporting on patterns in JavaScript.

## Development

For development purposes, you can use the following script to start the server with automatic restarts on code changes:

```bash
npm run start-dev
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Hapi.js Documentation](https://hapi.dev/)
- [Dicoding Indonesia](https://www.dicoding.com/)

Feel free to customize this README further to suit your project's specific details. 
