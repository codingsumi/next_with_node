"use client";
import API from '@/utils/api';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/signin', formData);
      if(response.data.status === true && response.data.token !== null) {
        localStorage.setItem('appToken', response.data.token);
        router.push('pages/dashboard')
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  }




  return (
      <div className='vh-100 d-flex align-items-center'>
        <div className="card border-0 shadow m-auto" style={{ width: '400px' }}>
          <div className="card-body">
            <form onSubmit={handleLogin} autoComplete='off'>
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Email: {formData.email}</label>
                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="Enter email" name="email" autoComplete='off' />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password: {formData.password}</label>
                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} placeholder="Enter password" name="password" />
              </div>
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <div className='mt-2 d-flex justify-content-between'>
                <Link href={'/register'}><small>Create an Account!</small></Link>
                <Link href={'forgot-password'}><small>Forgot Password?</small></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;