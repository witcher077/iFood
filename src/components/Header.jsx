import { useEffect, useState, useContext } from "react";
import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { setOrderFalse } from '../utils/cartSlice'
import ThemeContext from "../Context/themeContext";


// import { unstable_renderSubtreeIntoContainer } from "react-dom";


const Header = () => {
  let [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { setTheme, theme } = useContext(ThemeContext)

  // without dependency arr useEffect will be called every time Component unstable_renderSubtreeIntoContainer
  // with empty dep err it will be called once when page loads
  // with dependecy veriable it will be called every time state changes

  // useEffect(() => {
  //   console.log("UseEffect Is Called");
  // }, [btnName])


  // Subscribing the store Selector

  const cartItems = useSelector((store) => store.cart.items);



  // const [iconDisplay, seticonDisplay] = useState("moon")
  const element = document.documentElement;
  // const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  // console.log(theme);

  // function onWindowMatch() {

  //   if (localStorage.theme == "dark" || (!(theme in localStorage) && darkQuery.matches)) {
  //     element.classList.add("dark")
  //   }
  //   else {
  //     element.classList.remove("dark");
  //   }
  // }
  // onWindowMatch();
  const dispatch = useDispatch();


  useEffect(() => {
    // switch (theme) {
    //   case "moon": element.classList.add("dark");
    //     localStorage.setItem("theme", "dark");
    //     break;
    //   case "sunny": element.classList.remove("dark");
    //     localStorage.setItem("theme", "light");
    //     break;
    //   default: localStorage.removeItem("theme");
    //     onWindowMatch();
    //     break;
    // }
    theme === "moon" ? element.classList.add("dark") : element.classList.remove("dark");

  }, [theme])

  // darkQuery.addEventListener("change", () => {

  //   if (!("theme" in localStorage)) {
  //     if (element.matches) {
  //       element.classList.add("dark");
  //     } else {
  //       element.classList.remove("dark");
  //     }
  //   }
  // })
  const CartOrder = () => {
    dispatch(setOrderFalse())
  }

  const ThemeHandler = () => {
    theme === "sunny" ? setTheme("moon") : setTheme("sunny")
  }

  return (<div className="flex justify-between duration-1000  dark:bg-gray-900 bg-slate-100  shadow-md  mb-0 static  top-0">
    <div className="Logo-container">

      <Link to="/"><img className=" m-2 p-2 w-32 " src={LOGO_URL} /></Link>
    </div>
    <div className=" m-5 duration-1000  rounded-lg cursor-pointer" onClick={() => {
      ThemeHandler()
    }}>
      {theme == "sunny" ? <button className={`leading-9 text-xl rounded-full m-2    ${theme === "moon" ? "text-sky-600" : "dark:text-white"}`}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-filled" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
        <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
        <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
        <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
        <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
        <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" stroke-width="0" fill="currentColor" />
        <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" stroke-width="0" fill="currentColor" />
        <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
        <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
      </svg></button> : <button
        className={`leading-9 text-xl rounded-full m-2  ${theme === "sunny" ? "text-sky-600" : "dark:text-white"}`}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-filled" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" stroke-width="0" fill="currentColor" />
        </svg></button>
      }
    </div>

    <div className="navItems items-center dark:text-white ">
      <ul className="flex p-4 m-4">
        <li className="px-4 font-bold text-center">Online-Status:{onlineStatus ? " 🟢" : " 🔴"}</li>
        <li className="px-4 font-semibold  hover:text-cyan-500" ><Link to="/">Home</Link></li>
        <li className="px-4 font-semibold hover:text-cyan-500"><Link to="/about">About Us</Link></li>
        <li className="px-4 font-semibold hover:text-cyan-500"><Link to="/contact">contact Us</Link></li>
        <li onClick={CartOrder} className="px-4 font-semibold hover:text-cyan-500 "><Link className="flex" to="/cart"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-filled" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" stroke-width="0" fill="currentColor" />
        </svg><span>({cartItems.length})</span></Link></li>
        <li className="px-4 font-semibold hover:text-cyan-500"><Link to="/grocery">Grocery</Link></li>
        <li className="px-4 py-1 rounded-md w-20 shadow-md  font-semibold hover:bg-violet-600 bg-violet-400 transition-all">
          <button className="login"><Link to="/login">Login</Link></button>
        </li>
      </ul>
    </div>
  </div>)
}

export default Header;
// export {theme};