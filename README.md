# HallLagbe Backend

**Purpose**

This repository contains the backend codebase for the HallLagbe project, a robust and scalable server built using **TypeScript**, **Node.js**, and **Express.js**. It follows modern engineering practices to ensure maintainability, clarity, and performance.

**Key principles followed**

- **Modularity:** Code is logically separated into self-contained modules for easier maintenance and development.
- **Scalability:** The architecture is designed to grow with the project, handling increasing complexity with minimal refactoring.
- **Best Practices:** Adherence to established Node.js and Express conventions for a familiar development experience.
- **Documentation:** Emphasis on thorough explanations within each folder to promote understanding.

**Project Structure Overview**

- **root directory**
  - **.husky/** - GitHub pre commit hook to check for linting, and write prettier scripts for better code maintainability.
  - **src/** - The core source code of the application. [src.md](/src/src.md) - Detailed instructions and documentation for using the source code.
  - **assets/** - Contains assets like core features, ERD.
  - **config/** - The configuration file for handling environtment variables and other secrects
  - **.eslintignore:** Indicates files and directories that should be excluded from ESLint's code quality checks.
  - **.eslint.config.ts:** The core configuration file for ESLint. It defines the JavaScript linting rules and stylistic preferences enforced in the project.
  - **.gitignore:** Lists files and patterns to prevent accidental committing of development artifacts, sensitive data, or large generated files to version control.
  - **.prettierrc:** Configures the Prettier code formatter with preferred formatting rules (semicolons, spacing, quotes, etc.). This promotes code style homogeneity within the project.
  - **LICENSE:** The license governing the use and distribution of the project.
  - **README.md:** Overview of the project, its structure, and key files.
  - **package.json:** Metadata and dependencies for the Node.js project.
  - **package-lock.json:** Lock file automatically generated for any operations where npm modifies either the `node_modules` tree or `package.json`.

**Getting Started**

1. Clone this repository.
2. Install dependencies (`npm install`)
3. Review and customize configuration files as needed.
4. Refer to the documentation within each folder for guidance on how to build out your application.

**Project core features**

[Link to see details.](/assets/HallLagbe%20core%20features.pdf)

1. Authentication
2. User Dashboard
3. Admin Dashboard
4. Hall Booking
5. Payment (Stripe)
6. Hall Owner Dashboard
7. Email/Sms notification
8. Search & Filter
9. Review & Ratings

[Link to see ERD of project.](/assets/HallLagbe%20ERD.pdf)

## API endpoints

#### AUTH

```http
  POST /api/v1/auth/register
  POST /api/v1/auth/login
  POST /api/v1/auth/logout
  POST /api/v1/auth/reset-password
```

| Route            | Param                    | Authorization |
| :--------------- | :----------------------- | :------------ |
| `/auth/register` | `email,password ...more` | All           |
| `/auth/login`    | `email, password`        | All           |

#### User

```http
  GET    /api/v1/user
  GET    /api/v1/user/profile/:id
  PATCH  /api/v1/user/update/:id
```

| Route               | Param    | Authorization |
| :------------------ | :------- | :------------ |
| `/user/profile/:id` | `userId` | User, Admin   |
| `/user/update/:id`  | `userId` | User          |

#### Halls

```http
  GET     /api/v1/halls/
  GET     /api/v1/halls/:id
  POST    /api/v1/halls
  PATCH   /api/v1/halls/:id
  DELETE  /api/v1/halls/:id
```

| Route                 | Param       | Authorization     |
| :-------------------- | :---------- | :---------------- |
| `/halls (GET)`        |             | All               |
| `/halls/:id (GET)`    | `hallId`    | All               |
| `/halls (POST)`       | `hall data` | Hall owner only   |
| `/halls/:id (PATCH)`  | `hall data` | Hall owner only   |
| `/halls/:id (DELETE)` | `hall data` | Hall owner, Admin |

#### Bookings

```http
  POST   /api/v1/bookings
  GET    /api/v1/bookings
  GET    /api/v1/bookings/:id
  PATCH  /api/v1/bookings/:id/cancel
```

| Route                          | Param           | Authorization           |
| :----------------------------- | :-------------- | :---------------------- |
| `/bookings (POST)`             | `bookings data` | User                    |
| `/bookings (GET)`              |                 | User, Admin, Hall owner |
| `/bookings/:id (GET)`          | `bookingsId`    | User, Admin, Hall owner |
| `/bookings/:id/cancel (PATCH)` | `bookingsData`  | User, Admin, Hall owner |

#### Reviews

```http
  POST   /api/v1/reviews
  GET    /api/v1/halls/:hallId/reviews
```

| Route                    | Param         | Authorization |
| :----------------------- | :------------ | :------------ |
| `/reviews`               | `reviewsData` | User          |
| `/halls/:hallId/reviews` | `reviewsId`   | User          |
