import '../globals.css'
import { Space_Grotesk } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getBlog, getBlogs } from '@/sanity/sanity-utils'

const sg = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Louis | Space',
  description: 'A digital creative from Dubai, UAE.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const blog = await getBlogs();

  return (
    <html lang="en">
      <body className={` ${sg.className} max-w-7xl m-auto bg-[#FEFEF0] bg-none px-10 text-[#141414]`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
