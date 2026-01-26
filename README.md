# Portfolio

Modern, responsive portfolio website built with [Angular 19](https://angular.dev/) featuring a terminal aesthetic and rich interactive experiences.

## Features

- **Modern Tech Stack**: Angular 19, TypeScript 5.6, RxJS 7.8
- **Dark Theme**: Clean dark theme with smooth CSS variables
- **Terminal Aesthetic**: Consistent code/terminal styling throughout the site
- **Contact Form**: Functional form with EmailJS integration and validation
- **Blog Section**: Markdown-powered blog with syntax highlighting
- **GSAP Animations**: Smooth entrance animations and particle effects in hero section
- **Scroll Animations**: Intersection Observer-based animations for content sections
- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern Icons**: FontAwesome icons throughout
- **SEO Optimized**: Open Graph tags, meta descriptions, and semantic HTML
- **Lazy Loading**: Images load on-demand for better performance
- **Original Logo Colors**: Logos and icons maintain their original vibrant colors

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Production Build

```bash
npm run build:prod
```

### Deploy

```bash
npm run deploy:prod
```

This builds the project and deploys to Firebase Hosting.

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for development
- `npm run build:prod` - Build for production
- `npm run deploy:prod` - Build and deploy to Firebase
- `npm test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Code Quality

- **ESLint**: Code linting with Angular-specific rules
- **Prettier**: Code formatting for consistent style
- **TypeScript Strict**: Type-safe development

## Project Structure

```
src/
├── app/
│   ├── components/        # Angular components
│   ├── services/           # Angular services (Blog, Contact)
│   ├── shared/             # Shared interfaces and constants
│   ├── app.config.ts       # Angular app configuration
│   ├── app.routes.ts       # Route definitions
│   └── app.component.ts    # Root component
├── assets/                # Static assets (images, fonts)
├── styles.scss            # Global styles and CSS variables
└── index.html             # Entry HTML with SEO meta tags
```

## Key Technologies

- **Frontend**: Angular 19, Angular Material, Bootstrap 5
- **State Management**: Angular Signals
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: FontAwesome 6
- **Forms**: Angular Reactive Forms
- **Markdown**: Marked (Markdown parsing)
- **Email**: EmailJS (contact form)
- **Hosting**: Firebase Hosting
- **Build Tool**: Angular CLI

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Open browser to `http://localhost:4200`

## Configuration

### EmailJS Setup

To enable the contact form, update the following in `src/environments/environment.ts`:

```typescript
emailJS: {
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID'
}
```

Get your credentials at [EmailJS.com](https://www.emailjs.com/).

### Blog Content

Add blog posts by updating the `blogPosts` array in `src/app/services/blog/blog.service.ts`. Each post includes:

- `id`: Unique identifier
- `slug`: URL-friendly identifier
- `title`: Post title
- `date`: Publication date (YYYY-MM-DD format)
- `excerpt`: Brief description for listing
- `content`: Full markdown content
- `tags`: Array of topic tags
- `readTime`: Estimated reading time in minutes

## Future Enhancements

- [ ] Add unit tests for new components
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Optimize images (WebP/AVIF formats)
- [ ] Add resume download section
- [ ] Implement PWA features
- [ ] Add analytics integration

## License

Copyright © 2025 Nick Vitulli. All rights reserved.
