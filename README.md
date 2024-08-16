# MohamedAmer.tech

<div style="text-align: center;">
  <img src="https://utfs.io/f/d02497bf-e108-4785-8615-e467f9cf1d93-iiudtj.jpg" alt="demo image">
</div>

## 🌎 Live Demo

Explore the live Website on: [MohamedAmer.tech](https://mohamedamer.tech/)

## 📝 Description

This is my personal website, where I share my experience, and hopefully coming out soon will start writing technical articles and share them on it as well. The website is a full-stack application built with Next.JS 14, React.JS, TypeScript, tRPC. For styling, It uses TailwindCSS and ShadCn component library. It uses PostgreSQL with Drizzle as ORM and the DB is hosted on Supabase. For rate limiting, it's using Upstash. Finally, the website is hosted on serverless architecture using Vercel.

[![Technologies Used](https://skillicons.dev/icons?i=ts,nextjs,react,tailwind,postgres,vercel)](https://skillicons.dev)

## 💡 Features

These are some features that are implemented in the website:

- [x] 🎁 Responsive on all devices and screen sizes.
- [x] 🚪 Rate limiting with Upstash using Redis.
- [x] 🧙‍♂️ Full-Stack type safety with TypeScript and tRPC.
- [x] 🧙‍♂️ Type-Safe Database queries with Drizzle.
- [x] 🧙‍♂️ Type-Safe environment variables with @t3-oss.
- [x] 🎨 Frontend using Next.JS, React.JS, TailwindCSS, and ShadCn component library.
- [x] 🔧 Backend using Next.JS App router.
- [x] 💬 Contact-Me form with checking Email validity and sending a confirmation email.
- [x] ✏️ User Interactive Forms with React-Hook-Form, Zod, and React-Query.
- [x] ☎️ SMTP and IMAP integration for sending and receiving emails.
- [x] 👓 Glass-looking Navbar, that hides on scroll down and shows on scroll up.
- [x] 🎉 Marquee of moving Technologies Icons.
- [x] 📢 Accessible user Notifications with Sonner.
- [x] 📦 Postgres DB hosted on Supabase.
- [x] 🌎 Hosting using serverless architecture with Vercel.

## 🔧 Make It Your Own

This project is open-source and you can use it as a template for your own personal website. Here are the steps to make it your own:

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/MohamedTahaAmer/personal-website.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
This will have Hot Module Reloading enabled, so you can see your changes in real-time.

## 🔒 Environment Variables

Environment variables[^10] can be used for configuration. They must be set before running the app.

**The Website** uses [Supabase](https://supabase.com), [Upstash](https://upstash.com/) as external services. You need to create an account on each of these services along with an email account in order to run the app.

Create a `.env` file in the root directory of the project and fill in the following environment variables:

```env
DATABASE_URL=""
DATABASE_PREFIX=""
NEXT_PUBLIC_CV_LINK=""

UPSTASH_REDIS_REST_TOKEN=""
UPSTASH_REDIS_REST_URL=""

SMTP_GMAIL=""
GMAIL_APP_PASSWORD=""
MY_PERSONAL_GMAIL=""
DELAY_BETWEEN_SMTP_AND_IMAP=""
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com).

## 💎 Acknowledgements

- [Liron Abutbul](https://github.com/ladunjexa/nextjs13-threads?tab=readme-ov-file#readme-top) : For the inspiration design of the README.md file.
- [Lachlan Seward](https://gist.github.com/roachhd/1f029bd4b50b8a524f3c) : For the Icons used in the README.md file.
