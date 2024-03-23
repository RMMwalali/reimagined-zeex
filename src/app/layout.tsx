import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import type { Metadata } from 'next'
import { extractRouterConfig } from 'uploadthing/server'

import { ourFileRouter } from '@/app/api/uploadthing/core'
import ClientProvider from '@/providers/ClientProvider'

import './globals.css'

export const metadata: Metadata = {
  title: 'Circuit City | Simply the best',
  description: 'Welcome to our laptop emporium, where we have revolutionized the way you shop for your perfect laptop.',
  category: 'laptop ecommerce',
  authors: { name: 'rmmwalali' },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Nairobi laptops',
    'Laptops for sale Nairobi',
    'Buy laptops Nairobi',
    'Laptop shop Nairobi',
    'Laptop store Nairobi',
    'Laptop prices Nairobi',
    'Best laptops Nairobi',
    'Affordable laptops Nairobi',
    'Laptop deals Nairobi',
    'Laptop offers Nairobi',
    'Quality laptops Nairobi',
    'Top laptops Nairobi',
    'Nairobi laptop market',
    'Laptop sellers Nairobi',
    'Laptop suppliers Nairobi',
    'Kenya laptops',
    'Laptops Kenya online',
    'Nairobi computer shop',
    'Laptops and accessories Nairobi',
    'Gaming laptops Nairobi',
    'Laptops',
    'Nairobi',
    'Kenya',
    'Online',
    'Shop',
    'Store',
    'Deals',
    'Offers',
    'Sale',
    'Buy',
    'Best',
    'Affordable',
    'Quality',
    'Top',
    'Gaming',
    'Computers',
    'Tech',
    'Electronics',
    'Accessories',
    'Brand'
  ],
  creator: 'RMMwalali',
  publisher: 'RMMwalali',
  openGraph: {
    title: 'Circuit City',
    description: 'Welcome to our laptop emporium, where we have revolutionized the way you shop for your perfect laptop. Say goodbye to endless scrolling and comparing – we have streamlined the process by categorizing our extensive selection into user groups tailored to your needs.',
    url: 'https://reimagined-zeex.vercel.app/',
    siteName: 'Circuit City',
    images: 'https://res.cloudinary.com/dtnbwgpca/image/upload/v1711175488/quqizdg5pv5ayjadituv.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circuit City',
    description: 'Welcome to our laptop emporium, where we have revolutionized the way you shop for your perfect laptop.',
    images: ['https://res.cloudinary.com/dtnbwgpca/image/upload/v1711175488/quqizdg5pv5ayjadituv.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ClientProvider>
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
