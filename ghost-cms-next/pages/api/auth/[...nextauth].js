import NextAuth from "next-auth"
import KeycloakProvider from 'next-auth/providers/keycloak'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID,
      clientSecret: process.env.KEYCLOAK_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    })
  ],
  callbacks: {
    async jwt({ token, profile }) {
      // Persist the OAuth access_token to the token right after signin
      if (profile) {
        token.client_roles = profile.client_roles
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.client_roles = token.client_roles
      return session
    }
  }
})