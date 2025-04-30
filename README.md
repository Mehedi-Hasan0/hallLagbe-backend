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
  - **src/** - The core source code of the application. [src.md](/src/src.md) - Detailed instructions and documentation for using the source code.
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

[Link to see details.](/HallLagbe%20core%20features.pdf)

1. Authentication
2. User Dashboard
3. Admin Dashboard
4. Hall Booking
5. Payment (Stripe)
6. Hall Owner Dashboard
7. Email/Sms notification
8. Search & Filter
9. Review & Ratings
