'use client';
import authStore from '@/zustand/authStore';
import {useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';

export default function Free({children}){
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()
    const role = authStore((state) => state.role)

    useEffect(() => {
        console.log(role)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        if(role && role !== 'HR') router.push('/')
    }, [role])

    if(isLoading === true){
        return(
            <>
                <main className='flex justify-center'>
                    <span className="loading loading-dots loading-lg"></span>
                </main>
            </>
        )
    }

    return(
        <>
            {children}
        </>
    )
}