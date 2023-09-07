import './globals.scss';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'FlexBle',
  description: 'Reveal And Discover Remarkable UIs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
