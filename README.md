# Portfolio Frontend

A modern, responsive portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Beautiful UI with Shadcn UI components
- 📱 **Responsive**: Mobile-first design approach
- 🌙 **Dark Mode**: Built-in theme switching
- ⚡ **Fast**: Vite for lightning-fast development
- 🔥 **TypeScript**: Full TypeScript support
- 📧 **Contact Form**: Integrated with backend API for email functionality
- 🎯 **Sections**: Hero, About, Skills, Experience, Projects, Education, Contact

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router DOM

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your backend URL
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:3001

# For Production (replace with your actual Render URL)
# VITE_BACKEND_URL=https://your-backend-name.onrender.com
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # Shadcn UI components
│   ├── About.tsx
│   ├── Contact.tsx  # Contact form with API integration
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── hooks/
├── lib/
├── pages/
├── assets/
├── App.tsx
├── main.tsx
└── index.css
```

## Contact Form Integration

The contact form is now connected to a backend API for email functionality:

### Features:
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Rate limiting protection
- ✅ Automatic form reset on success
- ✅ Confirmation emails to users

### API Integration:
- Endpoint: `POST /api/contact`
- Response: JSON with success/error status
- Error handling for network issues

## Customization

### Adding New Sections:
1. Create component in `src/components/`
2. Import and add to `App.tsx`
3. Add navigation link in `Navbar.tsx`

### Theming:
- Edit `tailwind.config.ts` for colors
- Modify `src/index.css` for custom styles
- Update theme in `src/components/ThemeProvider.tsx`

### Contact Information:
Update contact details in `src/components/Contact.tsx`:

```typescript
const contactInfo = [
  {
    icon: Mail,
    label: "Email Me",
    value: "your-email@gmail.com",
    link: "mailto:your-email@gmail.com",
  },
  // ... other contact info
];
```

## Deployment (Vercel)

1. **Connect to Vercel:**
   ```bash
   npx vercel
   ```

2. **Set Environment Variables:**
   - `VITE_BACKEND_URL`: Your deployed backend URL

3. **Deploy:**
   ```bash
   npx vercel --prod
   ```

## Performance Optimization

- ✅ Lazy loading for images
- ✅ Code splitting with React Router
- ✅ Optimized bundle size
- ✅ Preloading for critical resources
- ✅ Responsive images

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License