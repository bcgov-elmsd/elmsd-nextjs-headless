import { withAuth } from "next-auth/middleware"

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }:any) {
      // `/admin` requires admin role
      if (req.nextUrl.pathname === "/member") {
        return token?.client_roles?.includes("member")
      }
    },
  },
})

export const config = { matcher: ["/member"] }