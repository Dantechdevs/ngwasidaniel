# Daniel Ngwasi — Portfolio

A modern, dark-themed developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + fonts
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Hero / landing section
│   ├── About.tsx         # About me section
│   ├── Career.tsx        # Career timeline
│   ├── Skills.tsx        # Skills grid with filter tabs
│   ├── Education.tsx     # Education + Certifications
│   ├── Projects.tsx      # Featured projects
│   ├── Blog.tsx          # Blog posts
│   ├── Testimonials.tsx  # Client testimonials carousel
│   ├── Contact.tsx       # Contact form (basic)
│   ├── ContactWithEmail.tsx  # Contact form with EmailJS
│   ├── Newsletter.tsx    # Newsletter + portfolio rating
│   └── Footer.tsx        # Footer
└── data/
    └── siteData.ts       # ✅ ALL YOUR CONTENT — edit this file
```

---

## ✏️ Customizing Your Content

**All content lives in one file:** `src/data/siteData.ts`

Edit it to update:
- Your name, bio, email, location, social links
- Skills list
- Career timeline entries
- Education & certifications
- Projects (title, description, tags, links)
- Blog posts
- Testimonials

---

## 📧 Setting Up the Contact Form (EmailJS)

1. Go to [emailjs.com](https://www.emailjs.com) and create a free account (200 emails/month free)
2. Add an **Email Service** (connect your Gmail)
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
4. In `src/components/ContactWithEmail.tsx`, replace:
   ```ts
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
5. Install the EmailJS package:
   ```bash
   npm install @emailjs/browser
   ```
6. In `src/app/page.tsx`, replace `Contact` with `ContactWithEmail`:
   ```tsx
   import Contact from '@/components/ContactWithEmail'
   ```

---

## 🌐 Deploying to Vercel (Free)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"New Project"** → import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live in ~1 minute! 🎉

---

## 📸 Adding Your Photo

Replace the avatar placeholder in `src/components/About.tsx`:

```tsx
// Replace the avatar div with:
<Image
  src="/your-photo.jpg"
  alt="Daniel Ngwasi"
  fill
  className="object-cover"
/>
```

Place your photo in the `public/` folder and add `import Image from 'next/image'` at the top.

---

## 📄 Adding Your CV

Place your CV file as `public/cv.pdf`. The "Download CV" button in the About section already links to `/cv.pdf`.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Sora | Body font |
| Space Mono | Monospace / accent font |
| EmailJS | Contact form emails |
| Vercel | Deployment |

---

Built by Daniel Ngwasi · Software Developer · Nairobi, Kenya
