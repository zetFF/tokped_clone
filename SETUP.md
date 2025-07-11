# Setup Instructions

## Clerk Configuration

Untuk menjalankan aplikasi ini, Anda perlu mengkonfigurasi Clerk authentication:

### 1. Buat file `.env.local` di root project dengan konfigurasi berikut:

```env
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 2. Dapatkan API Keys dari Clerk:

1. Kunjungi [clerk.com](https://clerk.com)
2. Buat akun atau login
3. Buat aplikasi baru
4. Salin `Publishable Key` dan `Secret Key`
5. Ganti `your_publishable_key_here` dan `your_secret_key_here` dengan keys yang sebenarnya

### 3. Jalankan aplikasi:

```bash
npm run dev
```

## Struktur Halaman

- `/` - Landing page (redirect ke dashboard jika sudah login)
- `/sign-in` - Halaman login
- `/sign-up` - Halaman register
- `/dashboard` - Halaman dashboard (protected, hanya untuk user yang sudah login)

## Fitur

- ✅ Authentication dengan Clerk
- ✅ Protected routes
- ✅ Responsive design dengan Tailwind CSS
- ✅ TypeScript support
- ✅ Modern UI/UX
