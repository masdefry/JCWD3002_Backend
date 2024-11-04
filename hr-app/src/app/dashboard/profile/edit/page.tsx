'use client';
import {queryGetProfileHook} from '@/features/profile/hooks/queryGetProfileHook'
import FormProfile from '@/features/profile/components/FormProfile'

export default function EditProfilePage(){

    const {dataUserProfile} = queryGetProfileHook()

    if(!dataUserProfile?.birthDate && !dataUserProfile?.address && !dataUserProfile?.phoneNumber) return(
        <></>
    )

    return(
        <main>
            <FormProfile 
                birthDate={dataUserProfile?.birthDate}
                address={dataUserProfile?.address}
                phoneNumber={dataUserProfile?.phoneNumber}
            />
        </main>
    )
}