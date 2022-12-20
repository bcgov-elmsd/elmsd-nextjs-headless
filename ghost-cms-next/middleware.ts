import { withAuth } from "next-auth/middleware"

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
  callbacks: {
    authorized({ req, token }:any) {
      // `/admin` requires admin role
      return token?.client_roles?.includes("member")

    },
  },
})

export const config = { matcher: ["/member","/member/:path*"] }