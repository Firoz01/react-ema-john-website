
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {user} = useAuth();
  
    return (
        <div>
             <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={user.displayName} {...register("name")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
                {errors.email && <span className="error">Email is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone" defaultValue="" {...register("phone")} />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;