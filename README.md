# ShopDotCo

Welcome to **ShopDotCo**, a modern e-commerce web application built with **React** and **TypeScript**. The application allows users to browse and purchase dresses, providing a clean and intuitive UI. The project leverages **Redux** for state management, **Vite** for fast development, and **MUI** for an attractive material design system.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Scripts](#scripts)
- [Linting and Formatting](#linting-and-formatting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Listing**: Browse dresses with filtering options.
- **Product Details**: View detailed information about each dress.
- **Shopping Cart**: Add and remove items from your shopping cart.
- **Checkout**: Proceed with checkout and simulate payments.
- **Responsive Design**: Fully responsive UI built with **MUI** and **styled-components**.

## Project Structure

```plaintext
.
├── public/             # Public assets (e.g., index.html, images)
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components (Home, Product, Cart, etc.)
│   ├── redux/          # Redux slices and store configuration
│   ├── hooks/          # Custom React hooks
│   ├── styles/         # Global and component-specific styles
│   ├── App.tsx         # Main app component
│   └── index.tsx       # Entry point of the application
├── package.json        # Project metadata and dependencies
└── tsconfig.json       # TypeScript configuration
```

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Redux**: For managing the application state.
- **MUI (Material-UI)**: For styling and UI components.
- **Vite**: A next-generation front-end tool for development and build.
- **Styled-Components**: For writing CSS in JS.
- **Axios**: For making HTTP requests.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- Node.js v16+ (https://nodejs.org/)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/shopdotco.git
cd shopdotco
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:3000.

## Build for Production

To build the application for production:

```bash
npm run build
```

## Scripts

- `npm run dev`: Start the Vite development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run format:write`: Format the code using Prettier.
- `npm run tsc:compile`: Compile TypeScript files.

## Linting and Formatting

This project uses ESLint and Prettier to maintain code quality and consistency.

- To lint your code:

```bash
npm run lint
```

- To automatically fix and format your code:

```bash
npm run format:write
```

We also use Husky and Lint-Staged to ensure code quality before committing. Code is automatically linted and formatted before each commit.

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Open a Pull Request.
