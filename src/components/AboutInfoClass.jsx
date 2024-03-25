
import React from "react";
import { LOGO_URL } from "../utils/constants";


class AboutInfoClass extends React.Component{
constructor(Props){
super(Props)

this.state={
count:0,
userData:{
    location:"jdkdankj",
    name:"uidaa",
    avatar_url:"ujhuugdv"

}
}
}
async componentDidMount(){

     const res=await fetch("https://api.github.com/users/witcher077");
     const data= await res.json();
   //   console.log(data);

   //  this.timer= setInterval(()=>{
   //    //   console.log("Ashok is Op");
   //   },1000)

     this.setState({
        userData:data,
     })
     
}
 componentDidUpdate(){
  
   //  console.log("componentDidUpdate");
 }

 componentWillUnmount(){
    clearInterval(this.timer);
   //  console.log("componentWillUnmount");
 }


render(){
const {location,login,avatar_url}=this.state.userData;

    return( <div className='aboutCard'>
    <img src={avatar_url} alt="Avatar" width={200} />
    <h1>{login}</h1>
    <h4>{location}</h4>
   
</div>)
}
} 

export default AboutInfoClass;