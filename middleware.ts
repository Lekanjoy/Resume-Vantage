import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname, searchParams } = request.nextUrl

  const publicPaths = ['^/templates$','^/auth/login$', '^/auth/sign-up$', '^/auth/forgot-password$']
  const isPublicPath = publicPaths.some(path => new RegExp(path).test(pathname))

  // Allow access to the home page
  if (pathname === '/') {
    return NextResponse.next()
  }

  // Allow access to dashboard if there's a payload in the URL
  if (pathname === '/dashboard' && searchParams.has('payload')) {
    return NextResponse.next()
  }

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  // Only redirect to dashboard if user is on a public path other than home
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