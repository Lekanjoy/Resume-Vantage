'use server'
import axios from 'axios'
import { cookies } from 'next/headers'

export async function loginUser(email: string, password: string) {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
     email, password }
    )

    if (res.status !== 200) {
      throw new Error('Login failed')
    }

    // Set the cookie
    cookies().set('token', res.data.payload.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
      path: '/',
    })

    return { success: true, data: res.data.payload }
  } catch (error) {
    console.error('Login error:', error)
    return { success: false, error: 'Login failed'}
  }
}