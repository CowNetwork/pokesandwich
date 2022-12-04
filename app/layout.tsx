import FloatingActionButton from '../components/FloatingActionButton/FloatingActionButton';
import Navigation from '../components/Navigation/Navigation';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <Navigation />

        {children}

        <FloatingActionButton fixed />
      </body>
    </html>
  );
}
