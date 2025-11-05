'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { storage } from '../lib/auth'

export default function ProtectedClient({
  children,
  requireConfig = false
}: {
  children: React.ReactNode
  requireConfig?: boolean
}) {
  const router = useRouter()

  React.useEffect(() => {
    const token = storage.getAuthToken()
    if (!token) {
      router.push('/')
      return
    }
    if (requireConfig) {
      const key = storage.getConfigKey()
      if (!key) router.push('/config')
    }
  }, [router, requireConfig])

  return <>{children}</>
}
