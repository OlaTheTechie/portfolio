# Oladimeji Balogun - Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13.5.4-000000?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

A modern, responsive, and performant portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS. This project showcases my professional experience, projects, skills, and blog posts in a clean, accessible, and interactive way.

##  Features

- **Modern Stack**: Built with Next.js 13+ App Router and React 19
- **Type Safety**: Full TypeScript support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Built-in theme switching
- **Performance Optimized**: Code splitting, lazy loading, and image optimization
- **Accessible**: WCAG 2.1 compliant components
- **Analytics**: Integrated with Vercel Analytics
- **Contact Form**: Email functionality with EmailJS

##  Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OlaTheTechie/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

##  Project Structure

```
src/
├── app/                    # App Router
│   ├── api/                 # API routes
│   ├── articles/            # Articles page
│   ├── books/               # Books page
│   ├── contact/             # Contact page
│   ├── education/           # Education page
│   ├── projects/            # Projects page
│   ├── resume/              # Resume download page
│   └── skills/              # Skills page
├── components/              # Reusable components
│   ├── ui/                  # Shadcn/ui components
│   ├── analytics.tsx        # Analytics component
│   ├── book-card.tsx        # Book card component
│   ├── contact.tsx          # Contact form
│   ├── hero.tsx             # Hero section
│   ├── loading.tsx          # Loading component
│   ├── navbar.tsx           # Navigation bar
│   ├── projects.tsx         # Projects component
│   ├── skills.tsx           # Skills component
│   └── theme-toggle.tsx     # Theme switcher
├── lib/                     # Utility functions
│   ├── config.ts            # App configuration
│   └── data.ts              # Data fetching utilities
└── styles/                  # Global styles
```

##  Built With

- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev/) - Icons
- [Vercel Analytics](https://vercel.com/analytics) - Analytics
- [EmailJS](https://www.emailjs.com/) - Email Service

##  Data Management

### Content Sources
- **Projects**: Fetched from a GitHub Gist
- **Articles**: Fetched from a headless CMS or API
- **Books**: Managed through a JSON file or API

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# GitHub Gist IDs
NEXT_PUBLIC_GIST_SKILLS_ID=5d698ad98c427d228615f5a7cfa9fa2f
NEXT_PUBLIC_GIST_PROJECTS_ID=6aab12717eb09597f2559a3ba32fa5fe
NEXT_PUBLIC_GIST_EDUCATION_ID=68e9927fb02bd6ed9aa771654e71bc07
NEXT_PUBLIC_GIST_BOOKS_ID=e7a6490e7437425ba6ddaa308069191c
NEXT_PUBLIC_GIST_ARTICLES_ID=8cc2eab4a2ab1cf1d306341a764fb9e1
```

##  Testing

Run the test suite:

```bash
npm test
# or
yarn test
# or
pnpm test
```

##  Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fportfolio&project-name=portfolio&repository-name=portfolio)

1. Push your code to a GitHub repository
2. Import the repository to Vercel
3. Add your environment variables
4. Deploy!

### Other Platforms

You can also deploy to other platforms that support Next.js:
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)
- [Docker](https://www.docker.com/)

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

<div align="center">
  Made with ❤️ by Oladimeji Balogun
</div>
