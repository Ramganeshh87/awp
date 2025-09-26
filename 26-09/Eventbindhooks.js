import React,{useState} from "react";
function EventBindhook(){
    const [message,setMessage]=useState('hello');
    const clickhandler=()=>{
        setMessage("goood bye");
        console.log("Button clicked");
    };
    return (
        <div>
            <div>{message}</div>
            <button onClick={clickhandler}>Click me </button>
        </div>
    );
}
export default EventBindhook;