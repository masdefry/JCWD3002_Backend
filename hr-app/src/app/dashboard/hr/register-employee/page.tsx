'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import HeaderTitle from '@/components/HeaderTitle'
import {registerEmployeeSchema} from '@/features/hr/register-employee/schemas/registerEmployeeSchema'
import instance from '@/utils/axiosInstance'
import authStore from '@/zustand/authStore'
import {useMutation} from '@tanstack/react-query'

export default function RegisterEmployee(){
    const token = authStore((state) => state.token)

    useMutation({
        mutationFn: async({firstName, lastName, email, salary, role, shiftsId}: any) => {
            return await instance.post('/hr/create-user', {
                firstName, 
                lastName, 
                email, 
                salary, 
                role, 
                shiftsId
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }
    })

    return(
        <main>
            <HeaderTitle title='Register Employee' />
            <section className='p-10'>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '', 
                        salary: null,
                        role: null, 
                        shiftsId: null
                    }}
                    validationSchema={registerEmployeeSchema}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    <Form className='w-full flex flex-col gap-5 overflow-y-auto h-screen'>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Firstname</span>
                            </div>
                            <Field name='firstName' type='text' className='input input-bordered w-full' />
                            <ErrorMessage name='firstName' component={'div'} className='text-red-500 text-sm' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Lastname</span>
                            </div>
                            <Field name='lastName' type='text' className='input input-bordered w-full' />
                            <ErrorMessage name='lastName' component={'div'} className='text-red-500 text-sm' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Email</span>
                            </div>
                            <Field name='email' type='text' className='input input-bordered w-full' />
                            <ErrorMessage name='email' component={'div'} className='text-red-500 text-sm' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Salary</span>
                            </div>
                            <Field name='salary' type='text' className='input input-bordered w-full' />
                            <ErrorMessage name='salary' component={'div'} className='text-red-500 text-sm' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Role</span>
                            </div>
                            <Field as='Select' name='role' className='select select-bordered w-full'>
                                <option disabled selected>Choose One</option>
                                <option value='HR'>HR</option>
                                <option value='MANAGER'>MANAGER</option>
                                <option value='STAFF'>STAFF</option>
                            </Field>
                            <ErrorMessage name='role' component={'div'} className='text-red-500 text-sm' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Shift</span>
                            </div>
                            <Field as='Select' name='shiftsId' className='select select-bordered w-full'>
                                <option disabled selected>Choose One</option>
                                <option value={1}>09:00 - 18:00</option>
                                <option value={2}>13:00 - 22:00</option>
                            </Field>
                            <ErrorMessage name='shiftsId' component={'div'} className='text-red-500 text-sm' />
                        </label>
                        <button type='submit' className='btn bg-blue-600 text-white w-full'>
                            Create Employee
                        </button>
                    </Form>
                </Formik>
            </section>
        </main>
    )
}