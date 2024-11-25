'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

const BasicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    const { firstName, lastName, email } = data

    fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data)
        alert('Success! You are now on the waiting list.')
      })
      .catch((error) => {
        console.error('Error:', error)
        alert('An error occurred. Please try again.')
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-zinc-600 dark:text-zinc-200 flex h-[400px] w-1/4 flex-col justify-center rounded-xl border border-red-500 dark:border-zinc-400 p-14"    >
      <h1 className="mb-10 text-center text-xl">
        Join our newsletter waiting list
      </h1>
      <div style={{ marginBottom: '1rem' }}>
        {/* <label htmlFor="firstName">First Name</label> */}
        <input
          id="firstName"
          {...register('firstName', { required: 'First name is required' })}
          type="text"
          placeholder="First name"
          className="w-full rounded-lg border border-zinc-400 p-2"
        />
        {errors.firstName?.message && (
          <p style={{ color: 'red' }}>
            {errors.firstName?.message?.toString()}
          </p>
        )}
      </div>
      <div style={{ marginBottom: '1rem' }}>
        {/* <label htmlFor="lastName">Last Name</label> */}
        <input
          id="lastName"
          {...register('lastName', { required: 'Last name is required' })}
          type="text"
          placeholder="Last name"
          className="w-full rounded-lg border border-zinc-400 p-2"
        />
        {errors.lastName && (
          <p style={{ color: 'red' }}>{errors.lastName?.message?.toString()}</p>
        )}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        {/* <label htmlFor="email">Email</label> */}
        <input
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Email address',
            },
          })}
          type="email"
          placeholder="Email address"
          className="w-full rounded-lg border border-zinc-400 p-2"
        />
        {errors.email?.message && (
          <p style={{ color: 'red' }}>{errors.email.message.toString()}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-white p-3 font-semibold shadow-sm transition-all duration-300 hover:bg-red-500 hover:tracking-widest hover:text-white lg:mt-4 dark:border dark:bg-transparent dark:hover:bg-white dark:hover:font-semibold dark:hover:text-red-500"
      >
        Submit
      </button>
    </form>
  )
}

export default BasicForm;
