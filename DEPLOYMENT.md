# Netlify Deployment Guide

## 🚀 Deploy to Netlify

### Method 1: Drag & Drop (Easiest)
1. Run `npm run build` locally
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Your site will be live instantly!

### Method 2: Git Integration (Recommended)
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Use these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18

### Method 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

## ⚙️ Build Settings for Netlify

### Build Command:
```bash
npm run build
```

### Publish Directory:
```
dist
```

### Environment Variables (if needed):
- `NODE_VERSION`: 18
- `VITE_GEMINI_API_KEY`: Your Gemini API key (for AI features)

## 🔧 Troubleshooting

### Common Issues:
1. **Build fails**: Check if all dependencies are in `package.json`
2. **Image not loading**: Ensure images are in `src/assets/` folder
3. **404 errors**: The `netlify.toml` file handles SPA routing

### If build still fails:
1. Check Netlify build logs for specific errors
2. Ensure Node.js version is 18 or higher
3. Verify all imports are correct
4. Check for any missing dependencies

## 📁 Project Structure
```
project/
├── dist/           ← Build output (publish directory)
├── src/
│   ├── assets/     ← Images and static files
│   ├── components/ ← React components
│   └── ...
├── netlify.toml    ← Netlify configuration
└── package.json    ← Dependencies and scripts
```

## ✅ Success Checklist
- [ ] `npm run build` works locally
- [ ] `dist` folder is created
- [ ] All images are in `src/assets/`
- [ ] No TypeScript errors
- [ ] All dependencies are in `package.json` 