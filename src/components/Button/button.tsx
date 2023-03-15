import React from "react"
import "./button.css"

interface ButtonProp{
    label:string;
}
const Button=(props:ButtonProp)=>{
    <button>{props.label}</button>
}
export default Button;