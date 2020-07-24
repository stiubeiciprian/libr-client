import React from 'react'
import Banner from '../../resources/svgs/bibliophile.svg'

function Login() {
    return (
        <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="w-full pr-40 rounded">
                    <h3 className="pt-4 title-font sm:text-5xl text-3xl font-semibold text-gray-900"><span className="text-teal-500">Welcome</span> Back!</h3>
                    <form className="pt-6 pb-8 mb-4  rounded">
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" for="username">Username</label>
                            <input className="bg-white focus:outline-none border border-gray-400 rounded-lg py-2 px-4 block w-full leading-normal" id="username" type="text"/>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" for="password">Password</label>
                            <input className="bg-white focus:outline-none border border-gray-400 rounded-lg py-2 px-4 block w-full leading-normal" id="password" type="password"/>
                        </div>

                        <div className="mb-4">
                            <input className="mr-2 leading-tight bg-teal-500" type="checkbox" id="checkbox_id" />
                            <label className="text-sm" for="checkbox_id">Remember Me</label>
                        </div>

                        <div className="mb-6 text-center">
                            <button className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700 focus:outline-none focus:shadow-outline" type="button">Log In</button>
                        </div>
                        
                        <hr className="mb-6 border-t" />

                        <div className="text-center">
                            <a className="inline-block text-sm text-teal-600 align-baseline hover:text-teal-800" href="/register">Create an Account!</a>
                        </div>
                    </form>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="Book" src={Banner}/>
                </div>
            </div>
        </section>
    )
}

export default Login
