import './globals.css'

export const metadata = {
  title: 'Francesco Action — Vidéos IA qui vendent',
  description: 'Génère des vidéos publicitaires ultra-réalistes en quelques minutes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
