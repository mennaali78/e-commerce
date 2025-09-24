/* eslint-disable */
import { JWT } from "next-auth/jwt"
import NextAuth,{User} from "next-auth"

declare module "next-auth" {
    interface User {
       user:{
         name:string;
        email:string;
        role:string;
        id:string;
       };
       token:string;
    }
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User['user'];
     
  }
}


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends User {
    /** OpenID ID Token */
    idToken?: string
  }
}