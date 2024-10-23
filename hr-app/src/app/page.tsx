'use client';
import { Formik, Form } from 'formik';

export default function HomePage() {
  return (
    <main>
      <section className='p-10'>
        <h1 className='text-4xl font-bold'>
          Selamat Datang
        </h1>
        <h1 className='text-md font-light'>
          Masukan username dan password untuk masuk
        </h1>
        <Formik>
          <Form className='w-full py-10 flex flex-col gap-5'>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Username or Email</span>
              </div>
              <input type='text' className='input input-bordered w-full' />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Password</span>
              </div>
              <input type='password' className='input input-bordered w-full' />
            </label>
            <button className='btn bg-red-500 text-white w-full'>
              Sign In
            </button>
          </Form>
        </Formik>
      </section>
    </main>
  );
}
