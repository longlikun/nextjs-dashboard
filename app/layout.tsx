import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Providers from './providers';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang='en'>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </Providers>
  );
}
