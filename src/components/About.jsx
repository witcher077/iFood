
import AboutInfoClass from "./AboutInfoClass";
import { useContext,useEffect } from "react";
import ThemeContext from "../Context/themeContext";

const About=()=>{

    const {theme}=useContext(ThemeContext);
    const element = document.documentElement;
    useEffect(() => {
  theme==="moon"?element.classList.add("dark"):element.classList.remove("dark");
  
    }, [theme])

    return(<div className=" dark:bg-gray-800 duration-1000 dark:text-white pt-4 flex justify-center items-center">
    <AboutInfoClass name={"Ashok kr Class"} company={"Google"} place={"New York"}/>
    </div>)
}

export default About;