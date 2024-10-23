'use client';
import { Formik, Form } from 'formik';
import HeaderTitle from '@/components/HeaderTitle'

export default function RegisterEmployee(){
    return(
        <main>
            <HeaderTitle title='Register Employee' />
            <section className='p-10'>
                <Formik>
                    <Form className='w-full flex flex-col gap-5'>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Username</span>
                            </div>
                            <input type='text' className='input input-bordered w-full' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Email</span>
                            </div>
                            <input type='text' className='input input-bordered w-full' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Salary</span>
                            </div>
                            <input type='text' className='input input-bordered w-full' />
                        </label>
                        <label className='form-control w-full'>
                            <div className='label'>
                                <span className='label-text-alt'>Role</span>
                            </div>
                            <select className='select select-bordered w-full'>
                                <option disabled selected>Choose One</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </label>
                        <button className='btn bg-blue-600 text-white w-full'>
                            Create Employee
                        </button>
                    </Form>
                </Formik>
            </section>
        </main>
    )
}