import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddAdmin.css'

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors,reset } = useForm();
    const [success, setSuccess] = useState(false)
    const onSubmit = (data) => {
        fetch("https://enigmatic-garden-34025.herokuapp.com/users/admin", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then(data => {
            if(data.modifiedCount){
              console.log(data)
              setSuccess(true)
            }
          } );
          reset()
       
      };

    return (
        <div className='admin-main'>
      <h1>make admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        
        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="make as Admin"
        />
      </form>
        {success && <Alert severity="success">Add admin successfully</Alert>
}
    </div>
    );
};

export default AddAdmin;