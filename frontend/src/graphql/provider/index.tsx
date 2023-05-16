"use client"
import { ApolloProvider } from "@apollo/client"
import React, { ReactNode } from "react"
import { client } from "../apollo-client"

type Props = {
  children: ReactNode
}

export default function Provider({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
