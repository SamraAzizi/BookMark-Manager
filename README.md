# BookMark Manager 📚

A modern, full-stack bookmark management application built with Next.js, Clerk for authentication, and Prisma as the ORM.

## 🌟 Features

- **🔐 Secure Authentication** - Powered by Clerk for seamless user management
- **📖 Bookmark Management** - Add, edit, delete, and organize your bookmarks
- **🏷️ Tagging System** - Categorize bookmarks with custom tags
- **🎨 Modern UI** - Clean and responsive design built with Tailwind CSS
- **🚀 Full-Stack** - Next.js App Router with API routes
- **💾 Database** - Prisma ORM with SQLite/PostgreSQL support
- **📱 Responsive** - Works perfectly on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Database**: Prisma ORM
- **Validation**: Zod
- **Deployment**: Vercel (ready)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Clerk account (for authentication)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SamraAzizi/BookMark-Manager.git
cd BookMark-Manager

```
2. **Install dependencies**
```bash
npm install
# or
yarn install
```
3. **Set up environment variables**
Create a `.env` file in the root directory:
```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database (SQLite by default)
DATABASE_URL="file:./dev.db"

# Next.js
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

4. **Set up the database**

```bash
# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Optional: Seed with sample data
npx prisma db seed
```
5. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.

## Project Structure
```bash
BookMark-Manager/
├── prisma/                 # Database schema and migrations
│   └── schema.prisma      # Prisma data model
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── (auth)/       # Authentication routes
│   │   ├── (dashboard)/  # Protected dashboard routes
│   │   └── globals.css   # Global styles
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── forms/        # Form components
│   ├── lib/              # Utility libraries
│   │   ├── auth.ts       # Authentication utilities
│   │   ├── db.ts         # Database connection
│   │   └── utils.ts      # Helper functions
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```
