import React, { useEffect, useState,useContext } from 'react'
import Detailsimmer from './SimmerUi/detailsSimmer'
import { useParams } from 'react-router-dom'
import ResCatogory from './ResCatogory'
import ThemeContext from '../Context/themeContext'


const ResDetails = () => {
    const [resdetail, setResDetail] = useState([])
    const [expandIndex, setExpandIndex] = useState(null)

    const {theme}=useContext(ThemeContext);
    const element = document.documentElement;
    useEffect(() => {
          theme==="moon"?element.classList.add("dark"):element.classList.remove("dark");
    }, [theme])
    const resId = useParams();
    useEffect(() => {
        fetchresDetails();
    }, [])

    if (resdetail.length === 0) {
        return <Detailsimmer />
    }


    async function fetchresDetails() {
        try {

            const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId.reId);

            if (!res.ok) {
                const err = res.status;
                throw new console.error(err);
            }
            else {
                const json = await res.json();

                setResDetail(json.data.cards);

            }

        }
        catch (error) {
            console.error(error);
        }
    }

    const { name } = resdetail[0]?.card?.card?.info;



    // const allCards = (cards) => {

    //     for (let i = 0; i < cards.length; i++) {
    //         let checkList = cards[i]?.card?.card?.itemCards;
    //         if (checkList !== undefined) {
    //             return checkList;
    //         }
    //     }
    // }

    // let menu1 = allCards(resdetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)


    // const menu = resdetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards;

    const catogory=resdetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(catogory=>catogory.card?.card?.title);

    

    return (
        <div className='mx-auto w-6/12 bg-white  px-4 rounded-lg dark:bg-gray-800'>
            <h2 className='my-2 uppercase font-bold dark:text-white text-blue-700'>{name}</h2>
            <div className=' flex justify-between flex-wrap py-4'>
                {

                    catogory.map(( cat,index) =><ResCatogory key={Math.random()}  catogory={cat?.card?.card} 
                    showItems={index===expandIndex?true:false} setExpandIndex={()=>{setExpandIndex(index)}} />)
                 
                }
            </div>
        </div>
    )
}

export default ResDetails

