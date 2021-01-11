import React from "react";
import stules from "./Forms.module.css"



export const Textarea =(props)=>{
    return (
        <div>
            <textarea {...props}/>
        </div>
    )
}


export const Input =({input,meta, ...props})=>{
    const hasError = meta.touched && meta.error

    return (
        <div className={stules.formControl+ " "+ (hasError ? stules.error:" ")}>
            <div className="div"><input {...input} {...props}/></div>
            {hasError && <span>Same error</span>}
        </div>
    )
}
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)
