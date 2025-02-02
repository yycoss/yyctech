import { type Metadata } from 'next'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import Script from 'next/script'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'yyctech',
    default: "YYCTech - Calgary's Tech Community",
  },
  description: "YYCTech - Calgary's Tech Community",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EKLW7TN0S3"
      ></Script>
      <Script id="gtm">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EKLW7TN0S3');`}
      </Script>
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-900">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
