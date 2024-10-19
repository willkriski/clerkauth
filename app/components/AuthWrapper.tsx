'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && userId) {
      router.push('/dashboard');
    }
  }, [isLoaded, userId, router]);

  return <>{children}</>;
}
