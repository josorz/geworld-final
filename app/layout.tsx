import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GEWORLD Final Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body>
    <div className="min-h-screen flex flex-col bg-gray-100">
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 shadow-sm">
  <div className="container mx-auto flex flex-row justify-between items-center px-4">
    {/* Logo and Title */}
    <Link href='/'>
      <div>
        <h1 className="text-3xl font-semibold">Fake News Is Easy</h1>
        <p className="text-sm font-light">GEWORLD Final Project</p>
      </div>
    </Link>

    {/* Navigation Links */}
    <nav className="flex items-center space-x-4">
      <a
        href="/engagement-calc"
        className="text-xl hover:text-blue-200 transition-colors"
      >
        Engagecal
      </a>
      <a
        href="/spinbot"
        className="text-xl hover:text-blue-200 transition-colors"
      >
        Spinbot
      </a>
    </nav>
  </div>
</header>

      <div className="flex flex-1">
        {/* Main content area */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-2xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>

    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>2024 | <a href='https://github.com/josorz/geworld-final'>github.com/josorz</a></p>
      </div>
    </footer>
    </div>
    </body>
    </html>
  );
}
