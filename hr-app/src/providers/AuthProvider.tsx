'use client';
import {ReactNode, useEffect, useState} from 'react';
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
    const [isKeepAuth, setIsKeepAuth] = useState(false)

    const token = authStore((state) => state.token)
    const setKeepAuth = authStore((state) =>  state.setKeepAuth)

    const fetchKeepAuth = async () => {
        try {
            const auth = await instance.get('/auth');
            setKeepAuth({firstName: auth?.data?.data?.firstName, role: auth?.data?.data?.role});
        } catch (err) {
            console.log(err);
        } finally {
            setIsKeepAuth(true)
        }
    };
    
    useEffect(() => {
        if(token){
            fetchKeepAuth();
        }else{
            setIsKeepAuth(true)
        }
    }, [token]);

    useEffect(() => {
        // Proteksi Apabila Sudah Login, Maka Tidak Boleh Mengakses Halaman Login nya
        if(pathname === '/' && token){
            router.push('/dashboard')
        }   
        console.log(isKeepAuth)

        if(isKeepAuth === true){
            // Proteksi Apabila Tidak Punya Token, Maka Tidak Bisa Mengakses Halaman Dashboard nya
            if(!token && pathname.split('/')[1] !== 'reset-password'){
                router.push('/')
            } 
        }
    }, [isKeepAuth, pathname])

    if(isKeepAuth === false) return(
        <main className='flex justify-center'>
            <span className="loading loading-dots loading-lg"></span>
        </main>
    )

    return(
        <>
            {children}
        </>
    )
}