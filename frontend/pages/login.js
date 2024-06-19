import React, { useEffect, useState } from "react";
import Head from "next/head";
import classNames from 'classnames';
import style from '@/styles/loginregister.module.scss';

const Login = () => {
    const [aksi, setAksi] = useState('login');
    const [users, setUsers] = useState([]);
    const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
    const [registerDetails, setRegisterDetails] = useState({ username: '', email: '', password: '', gender: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            const handleScroll = () => {
                window.scrollY >= 80
                    ? header.classList.add(style["scroll-header"])
                    : header.classList.remove(style["scroll-header"]);
            };

            window.addEventListener('scroll', handleScroll);
            
            // Cleanup event listener on component unmount
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const registerLink = () => {
        setAksi('register');
    };

    const loginLink = () => {
        setAksi('login');
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const user = users.find(user => user.email === loginDetails.email && user.password === loginDetails.password);
        if (user) {
            alert('Login berhasil');
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
        <div>
            <Head>
                <title>Login & Register</title>
                <meta name="description" content="Login and registration page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={style.wrapper}>
                <div className={classNames(style.formBox, style.login, { [style.active]: aksi === 'login' })}>
                    <form onSubmit={handleLoginSubmit}>
                        <h1>Login</h1>
                        <div className={style.inputBox}>
                            <input type="text" name="email" placeholder='Email' value={loginDetails.email} onChange={handleLoginChange} required />
                        </div>
                        <div className={style.inputBox}>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder='Password' value={loginDetails.password} onChange={handleLoginChange} required />
                            <div className={style.passwordIcon} onClick={togglePasswordVisibility}>
                                👁️
                            </div>
                        </div>

                        <div className={style.rememberForgot}>
                            <label>
                                <input type="checkbox" /> Ingat saya
                            </label>
                            <a href="#">Lupa Password?</a>
                        </div>

                        <button type="submit">Login</button>

                        <div className={style.registerLink}>
                            <p>Belum punya akun?<a href="#" onClick={registerLink}> Daftar</a></p>
                        </div>
                    </form>
                </div>

                <div className={classNames(style.formBox, style.register, { [style.active]: aksi === 'register' })}>
                    <form onSubmit={handleRegisterSubmit}>
                        <h1>Registrasi</h1>
                        <div className={style.inputBox}>
                            <input type="text" name="username" placeholder='Username' value={registerDetails.username} onChange={handleRegisterChange} required />
                        </div>
                        <div className={style.inputBox}>
                            <input type="text" name="email" placeholder='Email' value={registerDetails.email} onChange={handleRegisterChange} required />
                        </div>
                        <div className={style.inputBox}>
                            <input type={showRegisterPassword ? "text" : "password"} name="password" placeholder='Password' value={registerDetails.password} onChange={handleRegisterChange} required />
                            <div className={style.passwordIcon} onClick={toggleRegisterPasswordVisibility}>
                                👁️
                            </div>
                        </div>
                        <div className={style.inputBox}>
                            <select name="gender" value={registerDetails.gender} onChange={handleRegisterChange} required>
                                <option value="" disabled hidden>Jenis Kelamin</option>
                                <option value="male">Laki-laki</option>
                                <option value="female">Perempuan</option>
                                <option value="other">Lainnya</option>
                            </select>
                        </div>

                        <div className={style.rememberForgot}>
                            <label>
                                <input type="checkbox" required /> Saya Setuju dengan ketentuan
                            </label>
                        </div>

                        <button type="submit">Daftar</button>

                        <div className={style.registerLink}>
                            <p>Sudah punya akun?<a href="#" onClick={loginLink}> Login</a></p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;