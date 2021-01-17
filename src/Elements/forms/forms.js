import React from "react";
import stules from "./Forms.module.css"



export const Textarea =({input,meta, ...props})=>{
    const hasError = meta.touched && meta.error

    return (
        <div >

            <textarea {...input} placeholder={props.lable}></textarea>

            {hasError && <span className={stules.styleSpan}>ERROR</span>}


        </div>
    )
}


export const Input =({input,meta, ...props})=>{
    const hasError = meta.touched && meta.error

    return (
        <div className={stules.formControl  + " "+ (hasError ? stules.error : " ") }>

            <div ><input {...input} {...props}/></div>
            {hasError && <span className={stules.styleSpan}>{meta.error}</span>}
        </div>
    )
}
