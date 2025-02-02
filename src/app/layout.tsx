import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/app/globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { uspert } from "@/backend/database/user/upsert"
import newrelic from "newrelic"
import Script from "next/script"
import { Nav } from "@/components/Nav"
import { Container } from "@/components/common/Container"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Innovote",
  description: "Easy voting for everyone.",
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default async function RootLayout({ children }: RootLayoutProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nr = newrelic as any

  if (nr.agent.collector.isConnected() === false) {
    await new Promise((resolve) => {
      nr.agent.on("connected", resolve)
    })
  }

  const browserTimingHeader = newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
    allowTransactionlessInjection: true,
  })

  // check if the user is signed in, if they are
  // lets upsert them into the database, this way
  // we can keep track of the users in our database
  const user = await currentUser()
  if (user !== null) {
    await uspert(user.id)
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <Script
          id="nr-browser-agent"
          dangerouslySetInnerHTML={{ __html: browserTimingHeader }}
        />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Nav />
          <Container>{children}</Container>
        </body>
      </html>
    </ClerkProvider>
  )
}
