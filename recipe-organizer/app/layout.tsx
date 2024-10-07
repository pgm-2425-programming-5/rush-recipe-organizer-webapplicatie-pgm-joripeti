// app/layout.tsx
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import '@/app/globals.css';  // Vergeet niet de globale CSS te importeren

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
