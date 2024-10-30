'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {resetPasswordSchema} from '@/features/reset-password/schemas/resetPasswordSchema'
import {useMutation} from '@tanstack/react-query'
import instance from '@/utils/axiosInstance';
import {toast} from 'react-toastify'

export default function ResetPasswordPage({params}: any){

    const {mutate: mutateResetPassword} = useMutation({
        mutationFn: async({password}: any) => {
            return instance.patch('/auth/reset-password', {
                password
            },
            {
                headers: {
                    'Authorization': `Bearer ${params?.slug}`
                }
            })
        }, 

        onSuccess: (res) => {
            toast.success('Reset Password Success')
        },

        onError: (err) => {
            toast.error('Link Sudah Tidak Berlaku')
        }
    })

    return(
        <main>
            <Formik
                initialValues={{
                    password: '', 
                    confirmPassword: ''
                }}
                validationSchema={resetPasswordSchema}
                onSubmit={(values) => {
                    mutateResetPassword({password: values.password})
                }}
            >
                <Form className='w-full py-10 flex flex-col gap-5'>
                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text-alt'>Password</span>
                        </div>
                        <Field name='password' type='password' className='input input-bordered w-full' />
                        <ErrorMessage name='password' component={'div'} className='text-red-500 text-sm' />
                    </label>
                    <label className='form-control w-full'>
                        <div className='label'>
                            <span className='label-text-alt'>Confirm Password</span>
                        </div>
                        <Field name='confirmPassword' type='password' className='input input-bordered w-full' />
                        <ErrorMessage name='confirmPassword' component={'div'} className='text-red-500 text-sm' />
                    </label>
                    <button className='btn bg-red-500 text-white w-full'>
                        Submit
                    </button>
                </Form>
            </Formik>
        </main>
    )
}