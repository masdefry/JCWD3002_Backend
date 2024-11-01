'use client';
import HeaderTitle from '@/components/HeaderTitle'
import Image from 'next/image';';
import { useMutation, useQuery } from '@tanstack/react-query';
import instance from '@/utils/axiosInstance';
import {toast} from 'react-toastify'
import DisplayProfile from '@/features/profile/components/DisplayProfile';
import FormProfile from '@/features/profile/components/FormProfile';

export default function ProfilePage(){

    const {mutate: mutateCreateProfile} = useMutation({
        mutationFn: async(fd: FormData) => {
            return await instance.post('/users', fd)
        },

        onSuccess: (res) => {
            toast.success('Create Profile Success')
        },

        onError: (err) => {
            console.log(err)
        }
    })

    const {data: dataUserProfile} = useQuery({
        queryKey: ['getProfile'],
        queryFn: async() => {
            const res = await instance.get('/users')
            return res.data.data
        }
    })

    return(
        <main>
            <HeaderTitle title='Account Profile' />
            <DisplayProfile
                birthDate={dataUserProfile?.birthDate}
                phoneNumber={dataUserProfile?.phoneNumber}
                address={dataUserProfile?.address}
            />
            <FormProfile
            />
        </main>
    )
}