import { useState } from "react";
import ThemeContext from "./themeContext";
import React from 'react'

const ThemeContextProvider = ({children}) => {

  const [theme, setTheme] = useState("sunny")
  return (
    <ThemeContext.Provider value={{setTheme,theme}} >
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;