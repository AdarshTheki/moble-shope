import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Inputs from './Inputs';
import { useCart } from '../context/Cart_Context';

export default function AddressForm({ setToggle }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { changeAddress } = useCart();

  const submitHandler = async (data) => {
    changeAddress(data)
    toast.success('Your Address successfully change')
    setToggle(false)
  };

  return (
    <form className='grid grid-cols-2 gap-3 items-start' onSubmit={handleSubmit(submitHandler)}>
      <div>
        <Inputs
          label='Full Name'
          placeholder='Enter your full name'
          {...register('name', { required: true, pattern: /^[A-Za-z ]+$/i })}
        />
        {errors.lastName && (
          <span className='text-red-600 text-xs capitalize'>Invalid full name</span>
        )}
      </div>
      <div>
        <Inputs
          label='Address'
          placeholder='Enter your address'
          {...register('address', { required: true, pattern: /^[a-zA-Z0-9\s,.'-]+$/i })}
        />
        {errors.address && (
          <span className='text-red-600 text-xs capitalize'>Invalid your address</span>
        )}
      </div>
      <Inputs label='City' placeholder='Enter your city' {...register('city')} />
      <Inputs label='Country' placeholder='Enter your country' {...register('country')} />
      <div>
        <Inputs
          label='Postal Code'
          placeholder='Enter your postal code'
          {...register('postal_code', {
            required: true,
            pattern: /^[1-9][0-9]{5}$/i,
          })}
        />
        {errors.postal_code && (
          <span className='text-red-600 text-xs capitalize'>Invalid your postal code</span>
        )}
      </div>
      <div>
        <Inputs
          label='Phone'
          placeholder='Enter your phone number'
          {...register('phone', { required: true, pattern: /^\+?[0-9\s.-]+$/i })}
        />
        {errors.phone_no && (
          <span className='text-red-600 text-xs capitalize'>Invalid your phone no</span>
        )}
      </div>
      <Inputs
        type='submit'
        value='Submit Address →'
        className='bg-green-600 cursor-pointer hover:opacity-90 text-white font-medium '
      />
    </form>
  );
}
