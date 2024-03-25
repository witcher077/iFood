import {useRouteError} from "react-router-dom"


const Error=()=>{
const err=useRouteError()
console.log(err);
return(<div className="flex flex-col items-center ">
        <h1 className="font-bold text-red-600 mt-4 text-3xl">Ooops!!!</h1>
        <h2 className=" text-red-600 my-4 text-2xl">Something Went Wrong!!!</h2>
        <h3 className=" text-red-600 mb-4 text-2xl">{err.status}: {err.statusText}</h3>
        <img className="w-64 " src="https://www.clipartmax.com/png/small/8-84137_facial-expression-smiley-frech-albern-bl%C3%B6d-my-dildo-diary-blank-lined-journal.png" alt="Facial"/>
    </div>)
}
export default Error;