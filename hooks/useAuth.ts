// hooks/useAuth.ts
'use client'

import { useRouter } from 'next/navigation';
import { login as loginAction, logout as logoutAction } from '@/app/actions/auth';

export function useAuth() {
  const router = useRouter();

  const login = async (token: string) => {
    try {
      await loginAction(token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutAction();
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return { login, logout };
}