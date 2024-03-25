import React, { useEffect, useContext } from 'react';

import ThemeContext from '../../Context/themeContext';

const Shimmer = () => {

  const { theme } = useContext(ThemeContext);
  const element = document.documentElement;
  useEffect(() => {
    theme === "moon" ? element.classList.add("dark") : element.classList.remove("dark");
  },[theme])
  return (<div className="m-4 flex flex-col">
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <div className="my-4 rounded-lg py-4  w-52  h-9  bg-slate-100 dark:bg-gray-600 shadow-sm "></div>
        <div className="my-4 rounded-lg mx-4 py-4 w-20 h-9  bg-slate-100 dark:bg-gray-600 shadow-sm "></div>
      </div>
      <div className="my-4 rounded-lg mx-4 py-4 w-40 h-9  bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
    </div>
    <div className="flex flex-wrap justify-between">
      <div className=" my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
      <div className="my-4 py-4 w-[230px] h-[300px] rounded-lg bg-slate-100 dark:bg-gray-600 shadow-sm"></div>
    </div></div>)
}

export default Shimmer;