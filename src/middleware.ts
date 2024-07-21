import { TOKEN_NAME } from "@utils/constants";
import routes from "@utils/routes";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(TOKEN_NAME);
  const isTokenValid = token && token.value !== "undefined";

  if (req.nextUrl.pathname.startsWith("/saved")) {
    if (isTokenValid) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `${routes.login.url}?redirectTo=${req.nextUrl.pathname}`,
          req.url,
        ),
      );
    }
  }

  if (req.nextUrl.pathname.startsWith("/stores")) {
    if (isTokenValid) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `${routes.login.url}?redirectTo=${req.nextUrl.pathname}`,
          req.url,
        ),
      );
    }
  }

  if ([routes.login.url, routes.signup.url].includes(req.nextUrl.pathname)) {
    if (isTokenValid) {
      return NextResponse.redirect(new URL(routes.home.url, req.url));
    } else {
      return NextResponse.next();
    }
  }
}
