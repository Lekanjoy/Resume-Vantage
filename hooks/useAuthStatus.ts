'use client'
import { useState, useEffect } from 'react'
import { isUserLoggedIn } from '@/app/actions/auth'

export function useAuthStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const result = await isUserLoggedIn()
        setIsLoggedIn(result.success)
      } catch (error) {
        console.error('Error checking login status:', error)
        setIsLoggedIn(false)
      } finally {
        setLoading(false)
      }
    }

    checkLoginStatus()
  }, [])

  return { isLoggedIn, loading }
}