import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

export default function Login() {
    const { usersignin } = useContext(AuthContext)
    const hendleform = e => {

        e.preventDefault()
        const shotr = e.target
        const email = shotr.email.value
        const password = shotr.password.value
        const objinfo = { email, password }
        console.log(objinfo)

        usersignin(email, password)
            .then(result => {
                console.log(result)
                alert('login successfully   ')
            })
            .catch(error => {
                console.log(error)
            });
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={hendleform}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
