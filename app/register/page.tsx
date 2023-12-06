"use client";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react';
import API from '@/utils/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('auth/signup', formData);
      console.log(response);
      if (response.data.status === true) {
        const message = response.data.message
        const token = response.data.token
        toast.success(message);
        router.push('/')
      }
    } catch (err) {
      console.log(err);
      toast.error(`Something went wrong`)
    }
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className='vh-100 d-flex align-items-center'>
        <div className="m-auto" style={{ width: '400px' }}>

          <div className="card border-0 shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} autoComplete='off'>
                <div className="mb-3 mt-3">
                  <label htmlFor="name" className="form-label">name:</label>
                  <input type="name" className="form-control" id="name" value={formData.name} onChange={handleChange} placeholder="Enter name" name="name" autoComplete='off' />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="Enter email" name="email" autoComplete='off' />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd" className="form-label">Password:</label>
                  <input type="password" className="form-control" id="pwd" value={formData.password} onChange={handleChange} placeholder="Enter password" name="password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="cpwd" className="form-label">Confirm Password:</label>
                  <input type="password" className="form-control" id="cpwd" value={formData.confirmPassword} onChange={handleChange} placeholder="Please confirm password" name="confirmPassword" />
                </div>
                <div className="form-check mb-3">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div className='mt-2 d-flex justify-content-between'>
                  <Link href="/"><small>Login</small></Link>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;