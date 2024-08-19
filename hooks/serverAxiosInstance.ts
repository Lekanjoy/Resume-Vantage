'use server'
import axios from 'axios'
import { cookies } from 'next/headers'

 const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

export async function getServerAxiosInstance() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value

  const instance = axios.create({
    baseURL,
    withCredentials: true,
  })

  instance.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  return instance
}

