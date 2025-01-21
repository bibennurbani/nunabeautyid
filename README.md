# Nunabeauty - Modern E-commerce Website

Nunabeauty is a modern, minimalistic, and professional e-commerce website for a modest fashion brand specializing in activewear, hijabs, and designer wear for Muslim women.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design for seamless experience on all devices
- Dynamic product catalog with category filtering
- User authentication and account management
- Wishlist functionality
- Shopping cart and secure checkout process
- Blog section for style guides and articles
- Newsletter subscription for updates and promotions
- Multi-language support (English, Bahasa Indonesia)

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/nunabeauty.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`
   cd nunabeauty
   \`\`\`

3. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

4. Create a \`.env.local\` file in the root directory and add any necessary environment variables:
   \`\`\`
   NEXT_PUBLIC_API_URL=your_api_url_here
   \`\`\`

5. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
nunabeauty/
├── app/
│ ├── components/
│ │ ├── header.tsx
│ │ └── footer.tsx
│ ├── layout.tsx
│ └── page.tsx
├── public/
├── styles/
│ └── globals.css
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
\`\`\`

## Development

To start the development server, run:

\`\`\`
npm run dev
\`\`\`

This will start the Next.js development server on [http://localhost:3000](http://localhost:3000).

## Deployment

To build the project for production, run:

\`\`\`
npm run build
\`\`\`

To start the production server, run:

\`\`\`
npm start
\`\`\`

For deployment, we recommend using [Vercel](https://vercel.com/), the platform built by the creators of Next.js. It provides an optimal deployment solution for Next.js applications.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Adding component

pnpm dlx shadcn@latest add needed-component
