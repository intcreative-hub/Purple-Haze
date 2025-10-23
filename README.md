# Purple Haze Smoke Shop - Landing Page

Modern, production-ready landing page for Purple Haze Smoke Shop in Brunswick, Ohio. Features a dark theme with emerald and purple accents, interactive 3D hero animation, and smooth scroll animations.

## 🎨 Features

- **Modern Dark Theme** - Emerald (#10b981) and Purple (#a855f7) accent colors
- **3D Hero Animation** - Interactive rotating cube built with React Three Fiber
- **Smooth Animations** - Framer Motion scroll animations throughout
- **Fully Responsive** - Mobile-first design (375px+, 768px+, 1024px+)
- **SEO Optimized** - Meta tags, structured data, semantic HTML
- **Production Ready** - Docker deployment with multi-stage builds
- **Accessible** - WCAG 2.1 compliant, keyboard navigation

## 📋 Sections

1. **Header** - Sticky navigation with mobile hamburger menu
2. **Hero** - 3D rotating cube + headline + CTAs
3. **What We Offer** - 3 product category cards
4. **Why Choose Us** - 4 value proposition cards
5. **Hours & Location** - Google Maps embed + business hours
6. **Social Proof** - Customer testimonials with star ratings
7. **FAQ** - Accordion-style frequently asked questions
8. **Footer** - Contact info + social media links

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ (LTS)
- npm or yarn
- Docker (for deployment)

### Local Development

1. **Clone and install dependencies:**

```bash
cd purple-haze-smoke-shop
npm install
```

2. **Create .env file:**

```bash
cp .env.example .env
```

Edit `.env` with your actual values (phone, address, etc.)

3. **Run development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**

```bash
npm run build
npm start
```

## 🐳 Docker Deployment (Primary Method)

### Option 1: Docker Compose (Recommended)

```bash
# Build and start
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

The site will be available at `http://localhost:3000`

### Option 2: Docker Standalone

```bash
# Build image
docker build -t purple-haze-web .

# Run container
docker run -d -p 3000:3000 --name purple-haze purple-haze-web

# View logs
docker logs -f purple-haze

# Stop
docker stop purple-haze
docker rm purple-haze
```

### Deploy to VPS

1. **Copy files to server:**

```bash
scp -r . user@your-server:/opt/purple-haze
```

2. **SSH to server and deploy:**

```bash
ssh user@your-server
cd /opt/purple-haze
docker-compose up -d --build
```

3. **Set up reverse proxy** (nginx example):

```nginx
server {
    listen 80;
    server_name purplehazesmokeshop.com www.purplehazesmokeshop.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## ☁️ Vercel Deployment (Alternative)

1. **Install Vercel CLI:**

```bash
npm i -g vercel
```

2. **Deploy:**

```bash
vercel --prod
```

3. **Set environment variables** in Vercel dashboard:
   - Go to Settings → Environment Variables
   - Add variables from `.env.example`

## 📝 Content Updates

Before going live, update these files with actual client information:

### 1. Contact Information (`lib/constants.ts`)

```typescript
export const SITE_CONFIG = {
  name: "Purple Haze Smoke Shop",
  tagline: "Premium tobacco, vapes & accessories in Brunswick, Ohio",
  phone: "(216) 555-HAZE", // UPDATE THIS
  email: "info@purplehazesmokeshop.com", // UPDATE THIS
  address: "123 Main St, Brunswick, OH 44212", // UPDATE THIS
  mapsEmbedUrl: "...", // UPDATE THIS (see Google Maps section)
  googleMapsLink: "...", // UPDATE THIS
};
```

### 2. Business Hours (`lib/constants.ts`)

```typescript
export const BUSINESS_HOURS = {
  weekday: {
    days: "Monday - Saturday",
    hours: "10:00 AM - 9:00 PM", // UPDATE IF DIFFERENT
  },
  weekend: {
    days: "Sunday",
    hours: "12:00 PM - 7:00 PM", // UPDATE IF DIFFERENT
  },
};
```

### 3. Social Media Links (`lib/constants.ts`)

```typescript
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/purplehazesmokeshop", // UPDATE
  facebook: "https://facebook.com/purplehazesmokeshop", // UPDATE
  tiktok: "https://tiktok.com/@purplehazesmokeshop", // UPDATE
};
```

### 4. Testimonials (`lib/constants.ts`)

Replace placeholder testimonials with real customer reviews:

```typescript
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mike R.", // REPLACE WITH REAL CUSTOMER
    rating: 5,
    text: "Best smoke shop...", // REPLACE WITH REAL REVIEW
  },
  // Add more testimonials...
];
```

### 5. Logo (`public/logo-placeholder.svg`)

Replace with actual logo:
- **Format**: PNG or SVG
- **Size**: 40x40px for header, 120x120px for larger usage
- **File**: `public/logo.png` or `public/logo.svg`
- **Update**: Edit `components/Header.tsx` to use new logo path

### 6. Favicon (`app/favicon.ico`)

Replace with actual favicon:
- **Size**: 32x32px or 64x64px
- **Format**: ICO or PNG
- **File**: `app/favicon.ico`

### 7. Google Maps Embed

To get the correct embed URL:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address: "Purple Haze Smoke Shop, Brunswick, OH"
3. Click **Share** → **Embed a map**
4. Copy the `src` URL from the iframe code
5. Update `mapsEmbedUrl` in `lib/constants.ts`

Example:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...
```

### 8. Meta Tags & SEO (`app/layout.tsx`)

Update metadata:
- Website URL (currently placeholder)
- Google verification code (line 48)
- OpenGraph image (create `public/og-image.jpg` - 1200x630px)

## 🧪 Testing Checklist

Before deploying to production:

- [ ] All placeholder content updated
- [ ] Logo and favicon replaced
- [ ] Google Maps showing correct location
- [ ] Phone number works (click-to-call)
- [ ] All social media links correct
- [ ] Testimonials are real customer reviews
- [ ] Business hours are accurate
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1024px+ width)
- [ ] All buttons clickable and styled
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Build succeeds: `npm run build`
- [ ] Docker image builds: `docker-compose up --build`

## 📱 Responsive Breakpoints

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 18)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Docker + Docker Compose

## 📂 Project Structure

```
purple-haze-smoke-shop/
├── app/
│   ├── layout.tsx           # Root layout + metadata + SEO
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles + Tailwind
├── components/
│   ├── Header.tsx           # Sticky navigation
│   ├── Hero.tsx             # Hero section with 3D
│   ├── Scene3D.tsx          # Three.js canvas wrapper
│   ├── RotatingCube.tsx     # 3D cube primitive
│   ├── WhatWeOffer.tsx      # Product categories
│   ├── WhyChooseUs.tsx      # Value propositions
│   ├── HoursLocation.tsx    # Hours + Map
│   ├── SocialProof.tsx      # Testimonials
│   ├── FAQ.tsx              # Accordion FAQ
│   └── Footer.tsx           # Footer with links
├── lib/
│   └── constants.ts         # All content + config
├── public/
│   ├── logo-placeholder.svg
│   └── favicon.ico
├── Dockerfile               # Production Docker build
├── docker-compose.yml       # Docker Compose config
├── .env.example             # Environment variables template
└── README.md                # This file
```

## 🐛 Troubleshooting

### Issue: 3D scene not loading

**Solution**: Disable SSR for Scene3D (already implemented in `Hero.tsx`)

### Issue: Build fails with "Can't resolve 'three'"

**Solution**: Ensure `transpilePackages: ['three']` is in `next.config.ts`

### Issue: Animations not working on mobile

**Solution**: Check `prefers-reduced-motion` setting in `globals.css`

### Issue: Docker image too large

**Solution**: Multi-stage build is already optimized (~150MB). Check `.dockerignore`.

## 📈 Performance Targets

- **Lighthouse Performance**: > 90
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Bundle Size**: < 200KB (gzipped, excl. 3D libs)

## 🔒 Security

- Non-root Docker user
- Environment variables for sensitive data
- Health checks enabled
- HTTPS recommended (use reverse proxy)

## 📞 Support

Built by [INT Creative](https://intcreative.co)

For support or questions:
- Email: support@intcreative.co
- GitHub Issues: [Report a bug](https://github.com/intcreative-hub/Purple-Haze/issues)

## 📄 License

© 2025 Purple Haze Smoke Shop. All rights reserved.

---

**Ready to deploy?** Follow the Docker deployment steps above. Remember to update all placeholder content before going live!
