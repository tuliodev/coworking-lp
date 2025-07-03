import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Espaço Nave Coworking | Varginha - MG',
  description: 'Muito mais que um coworking! Ambientes modernos, aconchegantes e inspiradores para quem quer trabalhar, criar, crescer e se conectar em Varginha - MG.',
  keywords: ['coworking', 'varginha', 'escritorio', 'trabalho', 'espaconave', 'minas gerais'],
  authors: [{ name: 'Litany Andrade' }],
  openGraph: {
    title: 'Espaço Nave Coworking | Varginha - MG',
    description: 'Muito mais que um coworking! Ambientes modernos e inspiradores em Varginha - MG.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
