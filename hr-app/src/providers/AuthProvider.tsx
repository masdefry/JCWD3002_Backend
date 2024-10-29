'use client';
import {ReactNode, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query'
import instance from '@/utils/axiosInstance'
import authStore from '@/zustand/authStore'
import { usePathname, useRouter } from 'next/navigation'
import {toast} from 'react-toastify'

interface IAuthProviderProps {
    children: ReactNode;
}

export default function AuthProvider({children}: IAuthProviderProps){
    const router = useRouter()
    const pathname = usePathname()

    const token = authStore((state) => state.token)
    
    const setKeepAuth = authStore((state) =>  state.setKeepAuth)

    // const {data: auth} = useQuery({
    //     queryKey: ['keepAuth'],
    //     queryFn: async() => {
    //         console.log('useQuery')
    //         return instance.get('/auth')
    //     }
    // })
    
    useEffect(() => {
        const fetchAuthData = async () => {
            try {
                const auth = await instance.get('/auth');
                setKeepAuth({firstName: auth?.data?.data?.firstName, role: auth?.data?.data?.role});
            } catch (err) {
                console.log(err);
            }
        };
    
        fetchAuthData();
    }, []);

    useEffect(() => {
        console.log(token)
        console.log('BYE')
        // Proteksi Apabila Sudah Login, Maka Tidak Boleh Mengakses Halaman Login nya
        if(pathname === '/' && token) router.push('/dashboard')
        // Proteksi Apabila Tidak Punya Token, Maka Tidak Bisa Mengakses Halaman Dashboard nya
        if(!token){
            console.log('BYE')
            router.push('/')
            toast.error('You Not Authenticate! Please Login First!')
        }
    }, [])

    return(
        <>
            {console.log('RENDER')}
            {children}
        </>
    )
}