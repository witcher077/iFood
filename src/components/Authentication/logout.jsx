import React, { useEffect, useContext } from "react";
import ThemeContext from "../../Context/themeContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios"
import { useNavigate } from "react-router-dom";



const SignUp = () => {

  const nevigate =useNavigate()
  const { theme } = useContext(ThemeContext);
  const element = document.documentElement;
  useEffect(() => {
    theme === "moon" ? element.classList.add("dark") : element.classList.remove("dark");

  }, [theme])

  const [username, setUsername] = useState("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const FormSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/resister/", {
      fullname,
      username,
      email,
      password
    }).then((response) => {
      console.log(response);
      if(response.data.status){
        nevigate("/login")
      }
    }).catch((e) => {
      console.log(e);
    })
  }

  return (
    <div class="h-screen md:flex duration-1000  dark:bg-gray-800 bg-slate-1000 dark:text-white">
      <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <div>
            <h1 class="text-white font-bold text-4xl font-sans">Welcome to iFood</h1>
            <p class="text-white mt-1">Are You feeling hungry 🥧</p>
          </div>
          <div className="mt-10">
            <p class="text-gray-100 font-bold mt-1">Already have an account ?</p>
            <button type="submit" class="block w-28 duration-1000 dark:bg-gray-800 bg-gray-100 dark:text-white mt-4 py-2 rounded-2xl font-bold mb-2 "><Link to="/login">Login</Link></button></div>
        </div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center">
        <form onSubmit={FormSubmit} class="">
          <h1 class=" font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal  mb-7">Welcome Back</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 dark:bg-white duration-1000">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd" />
            </svg>
            <input class="pl-2 outline-none border-none" onChange={(e) => { setFullname(e.target.value) }} type="text" name="fullname" id="" value={fullname} placeholder="Full name" />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 dark:bg-white duration-1000">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
            <input class="pl-2 outline-none border-none " onChange={(e) => { setUsername(e.target.value) }} type="text" name="username" value={username} id="" placeholder="Username" />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 dark:bg-white duration-1000">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input class="pl-2 outline-none border-none" onChange={(e) => { setEmail(e.target.value) }} type="text" name="email" id="" value={email} placeholder="Email Address" />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl dark:bg-white duration-1000">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd" />
            </svg>
            <input class="pl-2 outline-none border-none" onChange={(e) => { setPassword(e.target.value) }} type="text" name="password" id="" value={password} placeholder="Password" />
          </div>
          <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>

        </form>
      </div>
    </div>
  )
}

export default SignUp