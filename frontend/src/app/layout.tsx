import ApolloProvider from "@/graphql/provider"
import "../styles/globals.css"
import TailwindProvider from "../styles/provider"
import NextAuthProvider from "./auth/provider"
// import { client } from "@/graphql/apollo-client"

export const metadata = {
  title: "haamed",
  description: "haamed app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          <NextAuthProvider>
            <TailwindProvider>{children}</TailwindProvider>
          </NextAuthProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}
