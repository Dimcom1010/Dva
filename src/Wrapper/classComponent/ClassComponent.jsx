import React, {useState} from 'react';
import style from './ClassComponent.module.css'

const Calculator = (props) => {

    let [number1, addnumber1] = useState("0")
    let [number, addnumber] = useState("0")
    let [isUseZpt, addIsUseZpt] = useState(false)
    let [action, addAction] = useState(null)
    let [actionUse, addActionUse] = useState(0)
    let [resultValue, addresultValue] = useState(0)

    console.log("number1", parseFloat(number1));
    console.log("number",parseFloat(number));
    console.log("isUseZpt",isUseZpt);
    console.log("action",action);
    console.log("actionUse",actionUse);
    console.log("resultValue",resultValue)
    console.log("______________")

    const nubrebUse = (x) => {
        actionUse === 1
            ? secondNumber(x)
            : summ(x)
    }
    const secondNumber = (x) => {
        addIsUseZpt(false)
        addActionUse(2)
        summ(x)
    }

    const summ = (x) => {
        x === ","
            ? ifZpt(x)
            : addnumber1(number1 += x)
    }

    const ifZpt = (x) => {
        if (x === "," && !isUseZpt) {
            addIsUseZpt(true)
            addnumber1(number1 += ".")
        } else {
            addnumber1(number1 += String(""))
        }
    }

    const onAction = (a) => {
        if (actionUse === 0) {
            addAction(a)
            addActionUse(1)
            addnumber(number1)
            addnumber1("0")
        } else if (actionUse === 1) {
            addAction(a)
        } else {
            addnumber1(number1 += String(""))
        }
    }
    const functions = {
        '+': (x, y) => parseFloat(x) + parseFloat(y),
        '-': (x, y) => parseFloat(x) - parseFloat(y),
        '*': (x, y) => parseFloat(x) * parseFloat(y),
        '/': (x, y) => parseFloat(y)
                    ?parseFloat(x) / parseFloat(y)
                    : "на ноль делить нельзя",
        'percent': (x, y) => parseFloat(x) /100 * parseFloat(y)
    };

    const result = (a, x, y) => {
        if(a) {
            addresultValue(functions[a](x, y))
            rec()
        }
    }
    const rec=()=>{
        addnumber1("0")
        addnumber("0")
        addIsUseZpt(false)
        addAction(null)
        addActionUse(0)
    }

    const inversion =()=>{
        addnumber1 ( String(parseFloat(number1)*(-1)) )
    }
    const backspace= ()=>{
        let last =String(number1).slice(-1)
        if (last===".") {
            addnumber1(String(number1).slice(0, -1))
            addIsUseZpt(false)
        } else {
            addnumber1(String(number1).slice(0, -1))
        }
    }

    let display = React.createRef()
    let textDisplay=display.current.value

    return (
        <div className={style.calculator_wrapper}>
            <div className={style.calculator_grid_body}>

                <input className={style.grid_item + " " + style.item_input} ref={display} type="text"/ value=display>

                <span className={style.grid_item + " " + style.item_span}>Super power 2000</span>

                <button className={style.grid_item} onClick={() => rec()}>C</button>

                <button className={style.grid_item} onClick={() => inversion()}>-/+</button>

                <button className={style.grid_item} onClick={() => backspace()}>←</button>

                <button className={style.grid_item} onClick={() => onAction("percent")}>%</button>

                <button className={style.grid_item} onClick={() => nubrebUse(1)}>1</button>

                <button className={style.grid_item} onClick={() => nubrebUse(2)}>2</button>

                <button className={style.grid_item} onClick={() => nubrebUse(3)}>3</button>

                <button className={style.grid_item} onClick={() => onAction("/")}>/</button>

                <button className={style.grid_item} onClick={() => nubrebUse(4)}>4</button>

                <button className={style.grid_item} onClick={() => nubrebUse(5)}>5</button>

                <button className={style.grid_item} onClick={() => nubrebUse(6)}>6</button>

                <button className={style.grid_item} onClick={() => onAction("*")}>*</button>

                <button className={style.grid_item} onClick={() => nubrebUse(7)}>7</button>

                <button className={style.grid_item} onClick={() => nubrebUse(8)}>8</button>

                <button className={style.grid_item} onClick={() => nubrebUse(9)}>9</button>

                <button className={style.grid_item} onClick={() => onAction("-")}>-</button>



                <button className={style.grid_item} onClick={() => nubrebUse(0)}>0</button>

                <button className={style.grid_item} onClick={() => nubrebUse(",")}>,</button>

                <button className={style.grid_item} onClick={() => result(action, number, number1)}>=</button>

                <button className={style.grid_item} onClick={() => onAction("+")}>+</button>




            </div>
        </div>
    )
}

export default Calculator

