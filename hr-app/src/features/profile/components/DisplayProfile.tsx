import {IDisplayProfileProps} from './types'

export default function DisplayProfile({
    birthDate,
    phoneNumber, 
    address
}: IDisplayProfileProps){
    return(
        <section className='p-10'>
            <section className='flex flex-col gap-3'>
                <div className='bg-gray-100 rounded-md p-3 flex items-center justify-between'>
                    <div className='bg-gray-300 w-[100px] h-[100px] rounded-full'>

                    </div>
                    <h1 className='text-xl font-bold'>
                        Muhammad Defryan
                    </h1>
                </div>
                <label className='form-control w-full'>
                    <div className='label'>
                        <span className='label-text-alt text-md'>Birthdate</span>
                    </div>
                    <h1 className='text-xl font-bold'>
                        {birthDate.split('T')[0]}
                    </h1>
                </label>
                <label className='form-control w-full'>
                    <div className='label'>
                        <span className='label-text-alt text-md'>Phone Number</span>
                    </div>
                    <h1 className='text-xl font-bold'>
                        {phoneNumber}
                    </h1>
                </label>
                <label className='form-control w-full'>
                    <div className='label'>
                        <span className='label-text-alt text-md'>Address</span>
                    </div>
                    <h1 className='text-xl font-bold'>
                        {address}
                    </h1>
                </label>
                <button className='btn bg-red-500 text-white w-full'>
                    Edit Profile
                </button>
            </section>
        </section>
    )
}