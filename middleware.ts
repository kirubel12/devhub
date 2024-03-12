import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ['/', '/login'],

  afterAuth(auth, req, evt){
    if (!auth.userId && !auth.isPublicRoute){
      return redirectToSignIn({ returnBackUrl: req.url });
    }

 

  }

  

 
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};