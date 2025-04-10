import NextAuth from "next-auth"

export const { handlers, signOut } = NextAuth({
  providers: [],
})  
// TODO: add sign-in and auth