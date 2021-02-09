import React, {useEffect, useState} from 'react';
import style from './ClassComponent.module.css'

const Calculator = (props) => {

    let [number1, addnumber1] = useState("")
    let [number, addnumber] = useState("")
    let [action, addAction] = useState("")
    let [actionUse, addActionUse] = useState(0)
    let [resultValue, addresultValue] = useState("")
    let [displey, addDispley] = useState("0")
    let [error, isError] = useState(false)
    let [disableEdits, isDisableEdits] = useState(false)


    useEffect(() => {
            if (!number1 && !number && !action && !resultValue && actionUse === 0 && !error) {
                addDispley("He!")
            } else if (error) {
                addDispley("Error! Division by zero")
            }
            else if (number1 && !number && !action && !resultValue && actionUse === 0 && !error) {
                addDispley(number1)
            } else if (action && !resultValue && !error) {
                addDispley(`${number} ${action} ${number1}`)
            } else if (action && resultValue && actionUse !== 2 && !error) {
                addDispley(resultValue)
                addnumber(resultValue)
                addnumber1("")
                addresultValue("")
            } else if (!action && resultValue && actionUse === 0 && !error) {
                addDispley(resultValue)
                addActionUse(0)
                addnumber1(resultValue)
                addnumber("")
                addresultValue("")
            }
        }, [number1, action, number, resultValue, actionUse,error]
    )
    console.log("number1", parseFloat(number1));
    console.log("number", parseFloat(number));
    console.log("action", action);
    console.log("actionUse", actionUse);
    console.log("resultValue", resultValue);
    console.log("displey", displey);
    console.log("______________")


    const nubrebUse = (x) => {
        isError(false)
        actionUse === 1
            ? secondNumber(x)
            : summ(x)
    }
    const secondNumber = (x) => {
        addActionUse(2)
        summ(x)
    }

    const summ = (x) => {
        if (x === "," && !disableEdits) {
            ifPoin()
        } else if (x === "0" && !disableEdits) {
            ifNull(x)
        } else if (!disableEdits) {
            addnumber1(String(number1 += x))
        }
    }

    const ifNull = (x) => {
        number1!=="0"
        ? addnumber1(String(number1 += x))
        :addnumber1(number1 += String(""))
    }

    const ifPoin = () => {
        if (number1.includes('.')) {
            addnumber1(number1 += String(""))
        } else {
            addnumber1(String(
                number1
                    ? number1 += "."
                    : number1 += "0."))
        }
    }

    const onAction = (a) => {
        isDisableEdits(false)
        if (number1 && actionUse === 0) {
            addAction(a)
            addnumber(String(parseFloat(number1)))
            addnumber1("")
            addActionUse(1)

        } else if (actionUse === 1) {
            addAction(a)

        } else if (actionUse === 2) {
            result(action, number, number1, a)
            isDisableEdits(false)

        } else {
            addnumber1(number1 += String(""))
        }
    }

    const functions = {

        '+': (x, y) => parseFloat(x) + parseFloat(y),
        '-': (x, y) => parseFloat(x) - parseFloat(y),
        '*': (x, y) => parseFloat(x) * parseFloat(y),
        '/': (x, y) => parseFloat(y)
            ? (parseFloat(x) / parseFloat(y)).toFixed(6)
            : "Error",
       /* '%': (x, y) => parseFloat(x) / 100 * parseFloat(y)*/
    };

    const result = (actuon, x, y, actionFrom) => {
        let scannerError =functions[actuon](x, y)
        debugger
        if (scannerError==="Error") {
            isError(true)
            rec()
        }else if (scannerError===0) {
            debugger
            addresultValue("0")

        }else {
            addresultValue(scannerError)
            isDisableEdits(true)
        }

        if (actuon && x!=="" && y!=="" && actionFrom === "equals") {
            addAction("")
            addActionUse(0)
        } else if (actuon && x!==null && y!==null && actionFrom !== "equals") {
            addAction(actionFrom)
            addActionUse(1)
        }
    }
    const rec = () => {
        addnumber1("")
        addnumber("")
        addAction(null)
        addActionUse(0)
        addDispley("")
        addresultValue("")
        isDisableEdits(false)
    }

    const inversion = () => {
        addnumber1(String(parseFloat(number1) * (-1)))
    }
    const backspace = () => {
        let last = number1.slice(-1)
        if (last === ".") {
            addnumber1(number1.slice(0, -1))
        } else {
            addnumber1(number1.slice(0, -1))
        }
    }

    /*   let display = React.createRef()*/
    /*  let textDisplay=display.current.value*/

    return (
        <div className={style.calculator_wrapper}>
            <div className={style.calculator_grid_body}>

                <input className={style.grid_item + " " + style.dipley_input} type="text" onChange="alert(this.value)"
                       value={displey}/>

                <span className={style.grid_item + " " + style.item_span}>Super power 2000</span>

                <button className={style.grid_item} onClick={() => rec()}>C</button>

                <button className={style.grid_item} onClick={() => inversion()}>-/+</button>

                <button className={style.grid_item} onClick={() => backspace()}>←</button>

                <button className={style.grid_item} > </button>
                {/*<button className={style.grid_item} onClick={() => onAction("%")}>%</button>*/}

                <button className={style.grid_item} onClick={() => nubrebUse("1")}>1</button>

                <button className={style.grid_item} onClick={() => nubrebUse("2")}>2</button>

                <button className={style.grid_item} onClick={() => nubrebUse("3")}>3</button>

                <button className={style.grid_item} onClick={() => onAction("/")}>/</button>

                <button className={style.grid_item} onClick={() => nubrebUse("4")}>4</button>

                <button className={style.grid_item} onClick={() => nubrebUse("5")}>5</button>

                <button className={style.grid_item} onClick={() => nubrebUse("6")}>6</button>

                <button className={style.grid_item} onClick={() => onAction("*")}>*</button>

                <button className={style.grid_item} onClick={() => nubrebUse("7")}>7</button>

                <button className={style.grid_item} onClick={() => nubrebUse("8")}>8</button>

                <button className={style.grid_item} onClick={() => nubrebUse("9")}>9</button>

                <button className={style.grid_item} onClick={() => onAction("-")}>-</button>

                <button className={style.grid_item} onClick={() => nubrebUse("0")}>0</button>

                <button className={style.grid_item} onClick={() => nubrebUse(",")}>,</button>

                <button className={style.grid_item} onClick={() => result(action, number, number1, "equals")}>=</button>

                <button className={style.grid_item} onClick={() => onAction("+")}>+</button>


            </div>
        </div>
    )
}

export default Calculator

