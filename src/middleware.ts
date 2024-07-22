import { TOKEN_NAME } from "@utils/constants";
import routes from "@utils/routes";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(TOKEN_NAME);
  const isTokenValid = token && token.value !== "undefined";

  const redirectToLogin = () => {
    return NextResponse.redirect(
      new URL(
        `${routes.login.url}?redirectTo=${req.nextUrl.pathname}`,
        req.url,
      ),
    );
  };

  const allowAccess = () => {
    return NextResponse.next();
  };

  const protectedRoutes = ["/saved", "/product", "/stores"];
  const authRoutes = [routes.login.url, routes.signup.url];

  if (protectedRoutes.some((path) => req.nextUrl.pathname.startsWith(path))) {
    return isTokenValid ? allowAccess() : redirectToLogin();
  }

  if (authRoutes.includes(req.nextUrl.pathname)) {
    return isTokenValid
      ? NextResponse.redirect(new URL(routes.home.url, req.url))
      : allowAccess();
  }

  return allowAccess();
}
