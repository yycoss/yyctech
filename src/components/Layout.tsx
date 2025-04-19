import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({
  children,
  session,
}: {
  children: React.ReactNode
  session: any
}) {
  return (
    <>
      <div className="flex w-full flex-col">
        <Header session={session} />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
