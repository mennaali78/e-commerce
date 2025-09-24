import { NextAuthOptions } from "next-auth";
import { jwtDecode } from "jwt-decode";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        const payload = await response.json();
     

        if (payload.message === "success") {
          const decodedToken:{id:string} = jwtDecode(payload.token);
        

          return {
            id: decodedToken.id ,
            user: payload.user, // name, email, role
            token: payload.token,
          };
        } else {
          throw new Error(payload.message || "wrong credentials");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // ✅ save id
        token.user = user.user; // name, email, role
        token.token = user.token; // JWT
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user; // name, email, role
      session.user.id = token.id; // ✅ add id
    
      return session;
    },
  },
};

// 