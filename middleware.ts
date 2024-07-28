import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  const { pathname } = request.nextUrl

  const publicPaths = ['^/$', '^/auth/login$', '^/auth/sign-up$', '^/auth/forgot-password$']
  const isPublicPath = publicPaths.some(path => new RegExp(path).test(pathname))

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/dashboard/:path*'
  ]
}