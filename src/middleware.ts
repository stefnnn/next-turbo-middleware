import type { NextRequest } from "next/server";
import * as Sentry from "@sentry/nextjs";

export function middleware(request: NextRequest) {
  Sentry.logger.info("Middleware is running");
}

export const config = {
  matcher: "/",
};
