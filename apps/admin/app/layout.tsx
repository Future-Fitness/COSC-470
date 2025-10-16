import './globals.css';

export const metadata = {
  title: 'Knebel Knotes Admin',
  description: 'Admin panel for Knebel Knotes medical reference system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
