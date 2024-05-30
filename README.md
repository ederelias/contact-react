
# My Contacts App

A responsive contacts application that allows users to browse, search, sort, and view detailed information about their contacts.

# [Demo View](https://react.contact.eder.au)



## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Using Makefile](#using-makefile)
- [Project Structure](#project-structure)
- [API](#api)
- [Testing](#testing)
- [Contributing](#contributing)

## Features

- **Browse Contacts:** View a list of contacts with their names, emails, and phone numbers.
- **Search Contacts:** Filter contacts by name using a search bar.
- **Sort Contacts:** Order contacts by name (ascending/descending) or email (ascending/descending).
- **View Contact Details:** Click on a contact card to see more details about the contact (address, company information, etc.).
- **Responsive Design:** The application adapts to different screen sizes, providing a seamless experience on desktop and mobile devices.

## Technologies

- **Frontend:**
  - React with TypeScript
  - React Router for navigation
  - Material UI for UI components
  - Axios for API requests
- **API:**
  - JSONPlaceholder (https://jsonplaceholder.typicode.com/) for mock contact data

## Installation


1. **Install Dependencies:**
   ```bash
   cd contact-list
   npm install
   ```

## Usage

1. **Start the Development Server:**
   ```bash
   npm start
   ```
2. **Open in Browser:** Navigate to [http://localhost:3000](http://localhost:3000) to access the app.

## Using Makefile

For convenience, you can also use a Makefile to manage common tasks.

1. **Install Dependencies:**
   ```bash
   make install
   ```

2. **Start the Development Server:**
   ```bash
   make start
   ```

3. **Build the Project:**
   ```bash
   make build
   ```

4. **Run Tests:**
   ```bash
   make test
   ```

5. **Clean the Project:**
   ```bash
   make clean
   ```

### Using Docker with Makefile

1. **Build Docker Image:**
   ```bash
   make docker-build
   ```

2. **Run Docker Container:**
   ```bash
   make docker-run
   ```

3. **Run Development Server in Docker:**
   ```bash
   make docker-dev
   ```

4. **Stop Docker Container:**
   ```bash
   make docker-stop
   ```

5. **Clean Docker Images and Containers:**
   ```bash
   make docker-clean
   ```

## Project Structure

```txt
my-contacts-app/
├── src/
│   ├── components/
│   │   ├── contact/
│   │   │   ├── ContactCard.tsx
│   │   │   ├── ContactDetails.tsx
│   │   │   └── ContactList.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   ├── data/
│   │   └── api.ts
│   ├── types/
│   │   └── types.ts
│   ├── App.tsx
│   ├── index.tsx
└── package.json
└── test/
    ├── ContactCard.test.tsx
    ├── ContactDetails.test.tsx
    └── ContactList.test.tsx
```

**components/contact/:** Contains the React components for displaying and interacting with contact data.

**layout/:** Contains the React components for the layout of the application.

**data/:** Contains modules for fetching and managing data.

**types/:** Contains TypeScript interfaces that define the shape of data structures used in the app.

**test/:** Contains Jest test files for the components.

## API

The application uses the JSONPlaceholder API to fetch mock contact data. The API endpoint is [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).

## Testing

This project uses Jest and React Testing Library for testing components. Run tests using:

```bash
npm test
```

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.
