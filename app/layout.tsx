import React from 'react';
import 'styles/globals.css';
import { Metadata } from 'next';
import 'styles/vs-code-dark-plus.css';
import MainLayout from 'components/Layout/MainLayout';

export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-700">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
