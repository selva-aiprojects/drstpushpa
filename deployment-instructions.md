# Deployment Instructions

## 🚀 Quick Deploy Options

### 1. Netlify (Recommended)
```bash
# Build the project
npm run build

# Deploy to Netlify
# Option 1: Drag and drop the 'dist' folder to Netlify
# Option 2: Use Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### 2. Vercel (Easiest)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 3. GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "homepage": "https://yourusername.github.io/repository-name",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🔧 Configuration Files

### Netlify (_redirects file)
Create `public/_redirects`:
```
/*    /index.html   200
```

### Vercel (vercel.json)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 📦 Build Optimization

### For Production
```bash
# Use production config
npm run build

# Analyze bundle size
npm install --save-dev rollup-plugin-visualizer
# Add to vite.config.js if needed
```

### Environment Variables
1. Copy `.env.example` to `.env`
2. Update with your values
3. Variables must start with `VITE_` to be accessible in frontend

## 🌐 Domain Setup

### Custom Domain on Netlify
1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records as instructed

### Custom Domain on Vercel
1. Go to project settings → Domains
2. Add your custom domain
3. Follow DNS instructions

## 🔒 HTTPS/SSL
- Netlify: Automatic SSL certificates
- Vercel: Automatic SSL certificates
- Custom hosting: Configure SSL certificates

## 📊 Performance Monitoring
Consider adding:
- Google Analytics
- Vercel Analytics (if using Vercel)
- Netlify Analytics (if using Netlify)

## 🐛 Production Debugging
1. Check browser console for errors
2. Verify all assets are loading correctly
3. Test all navigation and forms
4. Check mobile responsiveness

## 🔄 CI/CD Setup

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Netlify
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📱 PWA (Optional)
To make it a Progressive Web App:
1. Install PWA plugin
2. Create manifest.json
3. Add service worker
4. Configure offline support
