import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        ordered:false
    },
    reducers:{
        setOrderFalse:(state,action)=>{
            state.ordered=false;
        },
        orderItem:(state,action)=>{
       state.ordered=true;
    //    console.log(state.ordered);
       state.items.length=0;
        },
        addItem:(state,action)=>{
            //mutating our state directly here.
            let flag=false;
            state.items.length!==0 && state.items.map(ele=>{
                if(ele.info.id===action.payload.info.id)
                flag=true;
            })
            if(!flag)
           state.items.push(action.payload);
           state.ordered=false;
    //  console.log(action.payload)
        },
        
        // addsameItemMultiple:(state,action)=>{
        //     state.items.map(ele=>{
        //         if(ele.info.id===action.payload){
        //            ele.info.price*2
        //     }})
        // },
        // subsameItemMultiple:(state,action)=>{
        //     state.items.map(ele=>{
        //         if(ele.info.id===action.payload){
        //            ele.info.price/2;
        //     }})
        // },

        removeItem:(state,action)=>{
            // state.items.pop();
             const filteredCart=state.items.filter(el=>el.info.id!==action.payload)
             state.items=filteredCart;
            console.log(action.payload);
            console.log(filteredCart);
        },

        clearCart:(state,action)=>{
          // state.items.length=0; // []\
           return {items:[]};
        }
    }
})

export const {addItem,removeItem,clearCart,orderItem,setOrderFalse}=cartSlice.actions;

export default cartSlice.reducer;