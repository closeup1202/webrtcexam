import './globals.css'
import { font } from '@/utils/font/font'
import Image from 'next/image'
// import mainbg from "@/public/images/mainbg.jpg"

export const metadata = {
  title: 'WEE! MEET',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font}>
      <body className='box-border'>
        {/* <Image className='-z-50' src={mainbg} alt="img" fill/> */}
        {children}
      </body>
    </html>
  )
}
