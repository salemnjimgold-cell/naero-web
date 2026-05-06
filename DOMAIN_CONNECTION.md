# Naero Web Platform - Deployment & Domain Connection Guide

This guide will walk you through deploying your professional Naero web platform to Vercel, Netlify, or Firebase Hosting, and connecting your custom purchased domain.

## 1. Preparing for Deployment

Your platform is built using Vite + React. To build the production files, run:
```bash
npm run build
```
This will generate a `dist` folder containing the optimized, production-ready website.

## 2. Choosing a Hosting Provider

### Option A: Vercel (Recommended)
Vercel is highly recommended for Vite/React apps due to its speed, global CDN, and seamless GitHub integration.
1. Create an account at [Vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project folder.
4. Answer the prompts (defaults are usually fine). Vercel will automatically detect the Vite setup and deploy your app.

### Option B: Netlify
1. Create an account at [Netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder directly onto the Netlify dashboard, or connect your GitHub repository for continuous deployment.
3. If connecting GitHub, set the build command to `npm run build` and publish directory to `dist`.

### Option C: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase login` and `firebase init hosting`
3. Set the public directory to `dist`
4. Configure as a single-page app (rewrite all urls to `/index.html`: Yes)
5. Run `firebase deploy`

## 3. Connecting Your Custom Domain

Once your app is deployed on your chosen provider, you can connect your purchased custom domain (e.g., `naero.app` or `naero.com`).

### Vercel Domain Connection:
1. Go to your project dashboard on Vercel.
2. Click **Settings** > **Domains**.
3. Enter your custom domain and click **Add**.
4. Vercel will provide you with DNS records (typically an `A` record and a `CNAME`).
5. Log into your domain registrar (GoDaddy, Namecheap, Google Domains, etc.).
6. Navigate to DNS Settings and add the records provided by Vercel.
7. Vercel will automatically provision a free SSL certificate.

### Netlify Domain Connection:
1. Go to **Domain management** > **Domains** in your Netlify dashboard.
2. Click **Add custom domain**.
3. Follow the instructions to point your DNS records (A record to `104.198.14.52` or configure Netlify DNS).
4. SSL will be handled automatically.

### General DNS Settings Required (Example)
- **Type:** `A` 
- **Name/Host:** `@`
- **Value:** `[IP Address Provided by Host]`

- **Type:** `CNAME`
- **Name/Host:** `www`
- **Value:** `[Your Hosting URL e.g., naero-platform.vercel.app]`

## 4. Next Steps
- Verify SEO: Your meta tags and Open Graph tags (social sharing images) are already configured in `index.html`.
- Monitor Performance: The app is optimized for fast loading and mobile responsiveness.

Welcome to Naero!
