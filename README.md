# QPICK

# Installation

- Clone the repository: git clone https://github.com/your-username/project-name.git

# Navigate to the project directory:

- cd project name

# Install dependencies:

- npm install
- npm install react-router-dom

# Usage: npm run dev

- The app will be available at port: http://localhost:5173.

# File Structures

src/
├── components/ # Reusable React components
│ └── Button.tsx # Example button component
├── pages/ # Application pages
│ └── index.tsx # Entry point for the app
├── index.css/ _ Tailwind CSS configuration
|\_\_ store _ to collect local datas
|\_\_ shared \* images and general ideas
├── App.tsx # Root component
├── main.tsx # Application entry file
└── tsconfig.json # TypeScript configuration

# Example Component

interface ButtonProps {
title: string;
onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => (
<button
      className="bg-blue-500 text-white px-4 py-2 rounded shadow" 
      onClick={onClick}
    >
{title}
</button>
);

export default Button;

# Contributing

- Fork the repository
- Create a new branch: git checkout -b feature-name
- Commit your changes: git commit -m "Add new feature"
- Push to the branch: git push origin feature-name
- Submit a pull request
