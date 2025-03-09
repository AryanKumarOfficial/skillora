# School Website Template - Skillora (v2)

![GitHub last commit](https://img.shields.io/github/last-commit/dev-iqnaut/school-website-template-skillora/v2)
![GitHub license](https://img.shields.io/github/license/dev-iqnaut/school-website-template-skillora)
![GitHub issues](https://img.shields.io/github/issues/dev-iqnaut/school-website-template-skillora)
![GitHub pull requests](https://img.shields.io/github/issues-pr/dev-iqnaut/school-website-template-skillora)
![GitHub forks](https://img.shields.io/github/forks/dev-iqnaut/school-website-template-skillora)
![GitHub stars](https://img.shields.io/github/stars/dev-iqnaut/school-website-template-skillora)

## Overview

Skillora is a sophisticated, modern educational platform template built with Next.js 14 and the Ascent theme. This
template provides a comprehensive foundation for creating professional education websites with advanced features,
responsive design, and optimal performance.

## 🚀 Technology Stack

- **Frontend Framework**: Next.js 14 with React 18
- **Backend Services**: Firebase (Authentication, Storage, Functions)
- **Styling**: Tailwind CSS with custom configuration
- **Animation**: Framer Motion for fluid transitions
- **UI Components**: Radix UI for accessible, composable interface elements
- **State Management**: React Context API with custom hooks
- **Deployment**: Vercel integration with CI/CD pipeline

## ✨ Key Features

- **Enhanced Performance**
    - Server-Side Rendering (SSR) for improved SEO and initial load times
    - Optimized asset delivery and code splitting
    - Incremental Static Regeneration for dynamic content

- **Comprehensive UI Components**
    - Accessible navigation system with mobile responsiveness
    - Interactive elements built on Radix UI primitives
    - Customizable color schemes and typography

- **Advanced Functionality**
    - Seamless Firebase integration for authentication and data management
    - PDF generation and display capabilities for educational materials
    - Video integration with modal viewing experience
    - Form handling with validation and submission management

- **Animation & Interaction**
    - Page transitions using Framer Motion
    - Scroll-triggered animations for engaging user experience
    - Countup animations for statistics and achievements
    - Interactive accordion components for content organization

- **Educational Tools**
    - Course catalog with filtering and search capabilities
    - Student portal integration options
    - Event calendar implementation
    - Resource library framework

## 📋 Installation Guide

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later (or yarn/pnpm)
- Firebase project (for backend functionality)

### Setup Process

1. Clone the repository:
   ```bash
   git clone https://github.com/aryanKumarOfficial/skillora.git
   cd skillora
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   
   # Optional Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_analytics_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🔧 Available Commands

| Command           | Description                           |
|-------------------|---------------------------------------|
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Creates an optimized production build |
| `npm start`       | Runs the production server            |
| `npm run lint`    | Runs ESLint for code quality checks   |
| `npm run format`  | Formats code with Prettier            |
| `npm run deploy`  | Deploys to Firebase hosting           |
| `npm run analyze` | Analyzes bundle size                  |

## 📦 Project Structure

```
skillora/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Shared components
│   │   ├── layout/        # Layout components
│   │   └── sections/      # Page-specific sections
│   ├── contexts/          # React context definitions
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   │   ├── firebase/      # Firebase integration
│   │   └── helpers/       # Helper functions
│   ├── pages/             # Next.js pages
│   ├── styles/            # Global styles and Tailwind configuration
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔍 Core Dependencies

### UI and Styling

- `tailwindcss`: Utility-first CSS framework
- `@radix-ui/react-*`: Accessible UI primitives
- `framer-motion`: Animation library
- `class-variance-authority`: Component variant management

### Functionality

- `firebase`: Backend services integration
- `react-pdf`: PDF rendering capabilities
- `jspdf` & `html2canvas`: PDF generation from HTML
- `react-modal-video`: Video modal implementation
- `swiper`: Touch-enabled slider implementation

### Development Tools

- `eslint`: Code linting
- `prettier`: Code formatting
- `typescript`: Static type checking
- `husky`: Git hooks for code quality
- `next-seo`: SEO management for Next.js

## 🤝 Contributing Guidelines

We welcome contributions to improve the Skillora template! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes following conventional commits specification (`git commit -m 'feat: add amazing feature'`)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request with a detailed description of changes

### Code Style Guidelines

- Follow the established project patterns for components and file structure
- Ensure all components have proper TypeScript typing
- Write meaningful comments for complex logic
- Include JSDoc documentation for utility functions
- Maintain accessibility standards (WCAG 2.1 AA)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- The Next.js team for their exceptional framework
- Radix UI for accessible component primitives
- Firebase platform for backend functionality
- The Ascent theme creators for design inspiration
- All contributors who have helped improve this template

## 📞 Support and Contact

- Created and maintained by [@AryanKumarOfficial](https://github.com/AryanKumarOfficial)
- For issues and feature requests, please use
  the [GitHub Issues](https://github.com/dev-iqnaut/school-website-template-skillora/issues)
- For urgent matters, contact our support team at [support@iqnaut.com](mailto:support@iqnaut.com)

---

<p align="center">
  <sub>Last updated: March 10, 2025</sub><br>
  <sub>Made with ❤️ for educational excellence</sub>
</p>