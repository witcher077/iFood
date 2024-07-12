import React,{useEffect,useContext} from 'react';
import ThemeContext from '../../Context/themeContext';


const Detailsimmer = () => {
  const {theme}=useContext(ThemeContext);
    const element = document.documentElement;
    useEffect(() => {
  theme==="moon"?element.classList.add("dark"):element.classList.remove("dark");
    }, [theme])
  return (
    <div className='dark:bg-gray-800 w-6/12 m-auto' >
        <div className="m-4 rounded-lg py-4  w-6/12  h-9  bg-slate-100 dark:bg-gray-600 shadow-sm ">

        </div>
         <div className="flex  flex-col">
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        <div className=' w-100 h-52 m-4 p-4  bg-slate-100 dark:bg-gray-400 shadow-sm rounded-lg' ></div>
        </div>
       
    </div>
  )
}

export default Detailsimmer;