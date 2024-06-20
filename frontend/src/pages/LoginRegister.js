// src/pages/LoginRegister.js
import React, { useState } from "react";
import { FaUser, FaKey, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './LoginRegister.css';
import './login.css'

const LoginRegister = () => {
  const [aksi, setAksi] = useState('');
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [registerDetails, setRegisterDetails] = useState({ username: '', email: '', password: '', gender: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const navigate = useNavigate(); 

  const registerLink = () => {
    setAksi('active');
  };

  const loginLink = () => {
    setAksi('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = users.find(user => user.email === loginDetails.email && user.password === loginDetails.password);
    if (user) {
      alert('Login berhasil');
      navigate('/adminPage'); 
    } else {
      alert('Email atau password salah');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerDetails.email && registerDetails.password && registerDetails.gender) {
      setUsers([...users, registerDetails]);
      alert('Registrasi berhasil');
      setRegisterDetails({ username: '', email: '', password: '', gender: '' });
      loginLink();
    } else {
      alert('Harap isi semua kolom yang diperlukan');
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRegisterPasswordVisibility = () => {
    setShowRegisterPassword(!showRegisterPassword);
  };

  return (
    <div className={`wrapper ${aksi}`}>
      <div className="form-box login">
        <form onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" name="email" placeholder='Email' value={loginDetails.email} onChange={handleLoginChange} required />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type={showPassword ? "text" : "password"} name="password" placeholder='Password' value={loginDetails.password} onChange={handleLoginChange} required />
            <FaKey className="icon" />
            <div className="password-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Ingat saya
            </label>
            <a href="#">Lupa Password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Belum punya akun?<a href="#" onClick={registerLink}> Daftar</a></p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form onSubmit={handleRegisterSubmit}>
          <h1>Registrasi</h1>
          <div className="input-box">
            <input type="text" name="username" placeholder='Username' value={registerDetails.username} onChange={handleRegisterChange} required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="text" name="email" placeholder='Email' value={registerDetails.email} onChange={handleRegisterChange} required />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type={showRegisterPassword ? "text" : "password"} name="password" placeholder='Password' value={registerDetails.password} onChange={handleRegisterChange} required />
            <FaKey className="icon" />
            <div className="password-icon" onClick={toggleRegisterPasswordVisibility}>
              {showRegisterPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="input-box">
            <select name="gender" value={registerDetails.gender} onChange={handleRegisterChange} required>
              <option value="" disabled hidden>Jenis Kelamin</option>
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
              <option value="other">Lainnya</option>
            </select>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" required /> Saya Setuju dengan ketentuan
            </label>
          </div>

          <button type="submit">Daftar</button>

          <div className="register-link">
            <p>Sudah punya akun?<a href="#" onClick={loginLink}> Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
