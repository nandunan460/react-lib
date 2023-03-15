import React from "react"
import "./button.css"

interface ButtonProps{
    label:string;
}
const Button=(props:ButtonProps)=>{
    <button>{props.label}</button>
}
export default Button;