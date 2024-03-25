import React, {lazy} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ThemeContextProvider from "./Context/ThemeContextProvider";


// optimising our App
//Code Spliting
//Chunking
//Dynamic Bundling
//Lazy Loading
//On demand Loadingnbm
//Dynamic import




 export  default function  App() {
   
    return (
        <ThemeContextProvider>
        <Provider store={appStore}>
        <div className="App relative">
            <Header />
            <Outlet />
            <Footer/>
        </div>
        </Provider>
        </ThemeContextProvider>
    );
}



