# Dr. S.T. Pushpa Clinic - React Website

A modern, responsive React application for Dr. S.T. Pushpa's pediatric clinic, built with Vite, React, and styled-components.

## 🚀 Features

- **Modern Tech Stack**: Vite + React 18 + React Router
- **Styled Components**: Component-scoped styling for better maintainability
- **Responsive Design**: Mobile-first approach with breakpoints
- **Interactive Components**: Swipeable galleries, smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Development**: Hot module replacement with Vite

## 🛠️ Technologies Used

- **Frontend**: React 18, React Router DOM
- **Styling**: Styled-components
- **Build Tool**: Vite
- **Fonts**: Google Fonts (Inter, Poppins)
- **Icons**: Emoji and SVG icons

## 📦 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx       # Site header with doctor info
│   ├── Navigation.jsx   # Main navigation menu
│   ├── Footer.jsx       # Site footer
│   ├── WhatsAppButton.jsx # Floating WhatsApp booking button
│   ├── SwipeableSection.jsx # Interactive gallery component
│   ├── AgeGroupsSection.jsx # Age-specific care cards
│   └── CTASection.jsx   # Call-to-action section
├── pages/               # Page components
│   ├── Home.jsx         # Homepage with all sections
│   ├── About.jsx        # About Dr. Pushpa
│   ├── Services.jsx     # Services overview
│   ├── Blog.jsx         # Blog posts listing
│   └── Contact.jsx      # Contact form and info
├── styles/              # Global styles
│   └── GlobalStyles.js  # Global CSS-in-JS styles
├── App.jsx              # Main app component with routing
└── main.jsx             # Application entry point
```

## 🎨 Styling Approach

The application uses **styled-components** for:
- Component-scoped styling
- Dynamic styling based on props
- Better maintainability than traditional CSS
- Automatic vendor prefixing
- Theme support (can be added later)

## 🔄 Routing

React Router handles client-side routing:
- `/` - Home page
- `/about` - About Dr. S.T. Pushpa
- `/services` - Services overview
- `/blog` - Blog posts
- `/contact` - Contact information and form

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Desktop**: Full layout with all features
- **Tablet**: Adjusted spacing and navigation
- **Mobile**: Stacked layout, simplified navigation

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Set up redirects if needed

### Deploy to Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy
3. Configure custom domain if needed

### Deploy to Static Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your hosting provider
3. Ensure server supports SPA routing (fallback to index.html)

## 🔧 Customization

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

### Modifying Styles
- Edit component-specific styles in each component file
- Modify global styles in `src/styles/GlobalStyles.js`
- Colors and spacing are defined as styled-components constants

### Adding New Sections
1. Create new component in `src/components/`
2. Import and use in appropriate page
3. Follow existing component patterns

## 📈 Performance

- **Bundle Size**: Optimized with Vite's tree-shaking
- **Loading**: Code splitting with React Router
- **Images**: Lazy loading can be added for better performance
- **Caching**: Proper cache headers for static assets

## 🐛 Troubleshooting

### Common Issues
1. **Images not loading**: Ensure images are in `public/` folder
2. **Styles not applying**: Check styled-components import
3. **Routing not working**: Verify React Router setup

### Development Tips
- Use React DevTools for debugging
- Check browser console for errors
- Use Vite's HMR for fast development

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and test thoroughly
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Create pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For any questions or issues, please contact the development team.
