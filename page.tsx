'use client'
import React from 'react'
import { storage } from '../../lib/auth'
import { useRouter } from 'next/navigation'
import ProtectedClient from '../../components/ProtectedClient'


export default function Dashboard(){
const router = useRouter()
function logout(){ storage.removeAuthToken(); storage.removeConfigKey(); router.push('/') }


return (
<ProtectedClient requireConfig>
<div className="container">
<h1>Dashboard Page</h1>
<p>You are authenticated and have provided a valid configuration key.</p>
<button onClick={logout}>Sign out</button>
</div>
</ProtectedClient>
)
}