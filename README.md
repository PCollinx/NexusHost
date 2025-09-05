# NexusHost - Modern Web Hosting Platform

![NexusHost](https://via.placeholder.com/1200x630/2563eb/FFFFFF?text=NexusHost)

NexusHost is a modern, responsive web hosting platform built with Next.js 15, Tailwind CSS, and Framer Motion. This project showcases a comprehensive web hosting solution with interactive UI components, animations, and a complete user journey from marketing pages to customer dashboard.

## Features

- **Modern UI/UX Design**: Clean, professional interface with smooth animations
- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Internationalization**: Multi-language support (English/Spanish)
- **Interactive Particles Background**: Dynamic particle effects using tsparticles
- **User Authentication**: Complete login/signup flow
- **Customer Dashboard**: Comprehensive dashboard with hosting management tools, resource monitoring, and service status visualization
- **Marketing Pages**: Home, About, Hosting, Blog, and Contact pages
- **Performance Optimized**: Built with Next.js 15 and Tailwind CSS for optimal performance

## Tech Stack

- **Frontend Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Particle Effects**: tsparticles
- **Form Handling**: React Hook Form + Zod validation
- **Internationalization**: next-intl
- **Theming**: next-themes

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/PCollinx/nexushost.git
cd nexushost
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js app directory containing all pages and layouts
  - `components/` - React components for each page section
  - `dashboard/` - Customer dashboard interface and components
  - `globals.css` - Global styles
- `components/ui/` - Reusable UI components
- `lib/` - Utility functions and configurations
- `messages/` - Internationalization files
- `public/` - Static assets

## Dashboard

The NexusHost dashboard provides a feature-rich client portal that allows users to:

- Monitor service status and resource usage in real-time
- Manage hosting services, domains, and databases
- Access support tickets and knowledge base
- View billing information and usage statistics

For more details about the dashboard implementation, see [DASHBOARD.md](./DASHBOARD.md).

## Deployment

This project is configured for easy deployment on Vercel:

```bash
npm run build
```

## Portfolio Use

This project was created as a portfolio piece to demonstrate front-end development skills, UI/UX design capabilities, and proficiency with modern React and Next.js patterns.

## License

MIT
