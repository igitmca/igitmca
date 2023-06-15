import Navbar from '@/components/navbar'
import './globals.css'
import { Inter, Roboto } from 'next/font/google';
import { Providers } from './provider';
const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({ weight: '400', subsets: ['cyrillic'] })
export const metadata = {
  title: 'IGIT MCA',
  description: 'IGIT MCA OFFICIAL WEBSITE',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={roboto.className} suppressHydrationWarning={true} >
        <Providers>
            <Navbar />
            {children}
        </Providers>
      </body>
    </html>
  )
}
