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
            {hasError && <span className={stules.styleSpan}>Same error</span>}
        </div>
    )
}
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span className={stules.styleSpan} >{error}</span>) || (warning && <span className={stules.styleSpan}>{warning}</span>))}
        </div>
    </div>
)
