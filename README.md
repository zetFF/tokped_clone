# NextApp - Modern Authentication with Clerk

A modern Next.js application with Clerk authentication, featuring a clean and responsive design.

## Features

- 🔐 **Clerk Authentication** - Secure user authentication and management
- 🎨 **Modern UI/UX** - Beautiful design with Tailwind CSS
- 📱 **Responsive Design** - Works perfectly on all devices
- 🛡️ **Protected Routes** - Secure dashboard access
- ⚡ **TypeScript** - Full type safety
- 🚀 **Next.js 15** - Latest features and performance

## Pages

- **Landing Page (`/`)** - Welcome page with sign-in/sign-up options
- **Sign In (`/sign-in`)** - User authentication page
- **Sign Up (`/sign-up`)** - User registration page
- **Dashboard (`/dashboard`)** - Protected user dashboard

## Tech Stack

- **Framework**: Next.js 15
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Clerk account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd next-structure
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

   - Create `.env.local` file in the root directory
   - Add your Clerk configuration (see SETUP.md for details)

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Protected dashboard page
│   ├── sign-in/
│   │   └── [[...sign-in]]/
│   │       └── page.tsx      # Sign in page
│   ├── sign-up/
│   │   └── [[...sign-up]]/
│   │       └── page.tsx      # Sign up page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/
│   ├── ErrorMessage.tsx      # Error message component
│   ├── LoadingSpinner.tsx    # Loading spinner component
│   └── SuccessMessage.tsx    # Success message component
└── middleware.ts             # Clerk middleware
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
