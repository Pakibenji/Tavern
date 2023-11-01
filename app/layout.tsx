import type { Metadata } from 'next'
import './global.css'
import Header from './components/Header'
import { paragraph } from './fonts'
import { AuthProvider } from './context/AuthContext'
import Footer from './components/Footer'

export const metadata: Metadata = {

  title: 'Tavern, to speak truth',
  description: 'Tavern is a social media platform for people who want to speak truth.',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body style={paragraph.style}>
      <AuthProvider>
      <Header />
      {children}
      </AuthProvider>
      <Footer />
      </body>
      
    </html>
  )
}
