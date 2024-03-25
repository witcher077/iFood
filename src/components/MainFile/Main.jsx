import React from 'react'


const Grocery =lazy(()=> import("./components/Grocery"))

const Main = () => {
  return (
    <div>
         <ThemeContextProvider>
        <Provider store={appStore}>
        <div className="App relative">
            {/* <button className="dark_light">dark mode</button> */}
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </Provider>
        </ThemeContextProvider>
    </div>
  )
}

export default Main