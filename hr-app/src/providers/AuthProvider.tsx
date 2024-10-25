'use client';
import {ReactNode, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query'
import instance from '@/utils/axiosInstance'
import authStore from '@/zustand/authStore'
import { usePathname, useRouter } from 'next/navigation'

interface IAuthProviderProps {
    children: ReactNode;
}

export default function AuthProvider({children}: IAuthProviderProps){
    const router = useRouter()
    const pathname = usePathname()

    const token = authStore((state) => state.token)
    const setKeepAuth = authStore((state) =>  state.setKeepAuth)

    const {data: auth} = useQuery({
        queryKey: ['keepAuth'],
        queryFn: async() => {
            return instance.get('/auth', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }
    })
    
    useEffect(() => {
        setKeepAuth({firstName: auth?.data?.data?.firstName, role: auth?.data?.data?.role})
    }, [auth])

    useEffect(() => {
        console.log(token)
        if(pathname === '/' && token) router.push('/dashboard')
    }, [])

    return(
        <>
            {children}
        </>
    )
}