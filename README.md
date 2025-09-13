# Alumni Tracker

A stunning, responsive alumni networking platform built with React, TypeScript, Vite, TailwindCSS, and Framer Motion. Connect with your university community, discover opportunities, and build lasting professional relationships.

![Alumni Tracker](https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop)

## ✨ Features

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Beautiful glass-effect cards and components
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Responsive Design**: Optimized for all screen sizes and devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Accessible Components**: Built with Headless UI for accessibility

### 📱 Core Pages
- **Landing Page**: Hero section with stats, features, and testimonials
- **Alumni Directory**: Searchable and filterable alumni database
- **Individual Profiles**: Detailed alumni profiles with achievements and contact info
- **Wall of Fame**: Celebrating outstanding alumni achievements
- **Events & Networking**: Event listings with registration and filtering
- **Mentorship Program**: Connect mentors and mentees
- **Admin Dashboard**: CRUD operations for managing content

### 🔧 Technical Features
- **TypeScript**: Full type safety and better developer experience
- **Vite**: Lightning-fast development and build tooling
- **TailwindCSS**: Utility-first CSS framework with custom design system
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing
- **Headless UI**: Accessible component primitives
- **Mock Data**: Comprehensive sample data for all features

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alumni-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Theme Customization

The app supports both light and dark themes. You can customize the theme colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
        50: '#eff6ff',
        100: '#dbeafe',
        // ... more shades
      }
    }
  }
}
```

### Component Styling

All components use TailwindCSS classes and can be easily customized:

- **Buttons**: Modify button styles in `src/components/ui/Button.tsx`
- **Cards**: Update card appearance in `src/components/ui/Card.tsx`
- **Modals**: Customize modal behavior in `src/components/ui/Modal.tsx`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

### Mock Data

Update the mock data in `src/data/mockData.ts` to customize:
- Alumni profiles
- Events
- Wall of Fame entries
- Mentorship requests

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Card, Modal, etc.)
│   └── layout/         # Layout components (Header, Footer)
├── contexts/           # React contexts (Theme)
├── data/              # Mock data and API simulation
├── pages/             # Page components
├── types/             # TypeScript type definitions
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles and TailwindCSS
```

## 🎯 Key Components

### UI Components
- **Button**: Animated button with multiple variants
- **Card**: Glassmorphism card with hover effects
- **Modal**: Accessible modal with animations
- **SearchBar**: Search input with clear functionality
- **ThemeToggle**: Dark/light theme switcher

### Layout Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Site footer with links and contact info

### Pages
- **Landing**: Hero section with features and testimonials
- **AlumniDirectory**: Searchable alumni grid with filters
- **Profile**: Detailed alumni profile view
- **WallOfFame**: Achievement showcase with categories
- **Events**: Event listings with registration
- **Mentorship**: Mentor/mentee matching system
- **Admin**: Content management dashboard

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses:
- **ESLint** for code linting
- **TypeScript** for type checking
- **Prettier** for code formatting (recommended)

### Adding Dependencies

```bash
npm install <package-name>
# or
yarn add <package-name>
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3b82f6 to #1e40af)
- **Secondary**: Purple gradient (#8b5cf6 to #7c3aed)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Headings**: Inter font family
- **Body**: System font stack
- **Sizes**: Responsive typography scale

### Spacing
- **Base unit**: 4px (0.25rem)
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms
The app is a standard Vite React app and can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for beautiful placeholder images
- **Heroicons** for the icon library
- **TailwindCSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Headless UI** for accessible components

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

**Built with ❤️ for the alumni community**
