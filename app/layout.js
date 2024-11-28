import localFont from "next/font/local";
import "./globals.css";
import { Rakkas } from 'next/font/google'

const rakkas = Rakkas({
  subsets: ['latin'],
  weight: '400', // or specify other weights if needed
  style: 'normal', // or specify 'italic'
})



export const metadata = {
  title: "Learn Api ",
  description: "Tested by Kerlos Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
