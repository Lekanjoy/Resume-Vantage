'use server'
import { cookies } from 'next/headers'

export async function login(token: string) {
  cookies().set('token', token, { 
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'development',
    sameSite: 'strict',
    maxAge: 3600, // 1 hour
    path: '/'
  });
}

export async function logout() {
  cookies().set('token', '', { 
    httpOnly: true, 
    expires: new Date(0),
    path: '/'
  });
}