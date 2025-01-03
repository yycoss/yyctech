'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const notify = () => toast.success('Thanks for joining out waiting list!')
const notifyError = () => toast.error('An error occurred. Please try again.')
const BasicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSubmit = (data: any) => {
    const { firstName, lastName, email } = data
    setLoading(true)

    fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email }),
    })
      .then((res) => res.json())
      .then(async () => {
        setLoading(false)
        notify()
        reset()
        await new Promise((resolve) => setTimeout(resolve, 1500))
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        notifyError()
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-[400px] flex-col justify-center p-14 text-zinc-600 xl:w-1/3 dark:border-zinc-400 dark:text-zinc-200"
    >
      <h1 className="mb-10 text-center text-xl xl:text-3xl">
        Would you like to receive updates on Calgary tech events? 📬
      </h1>
      <h2 className="md:text-md mb-10 text-center text-sm xl:text-lg">
        Sign up for our newsletter waiting list below 🔥
        <br />
        We wont share your email with anyone.
      </h2>
      <div style={{ marginBottom: '1rem' }}>
        {/* <label htmlFor="firstName">First Name</label> */}
        <input
          id="firstName"
          {...register('firstName', { required: 'First name is required' })}
          type="text"
          placeholder="First name"
          className="w-full rounded-xl border border-zinc-200 p-4"
        />
        {errors.firstName?.message && (
          <p className="md:text-md pl-4 text-xs">
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
          className="w-full rounded-xl border border-zinc-200 p-4"
        />
        {errors.lastName && (
          <p className="md:text-md pl-4 text-xs">
            {errors.lastName?.message?.toString()}
          </p>
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
          className="w-full rounded-xl border border-zinc-200 p-4"
        />
        {errors.email?.message && (
          <p className="md:text-md pl-4 text-xs">
            {errors.email.message.toString()}
          </p>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className="dark:hover:white mt-2 w-full rounded-xl bg-red-500 p-4 font-semibold text-white shadow-sm transition-all duration-300 hover:border hover:bg-white hover:tracking-widest hover:text-white hover:text-zinc-600 lg:mt-4 dark:border dark:bg-transparent dark:hover:bg-red-500 dark:hover:font-semibold dark:hover:text-white"
      >
        {loading ? 'Sending...' : 'Submit'}
      </button>
      <Toaster />
    </form>
  )
}

export default BasicForm
