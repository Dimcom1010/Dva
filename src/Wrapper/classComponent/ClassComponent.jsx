import React, {useState} from 'react';
import style from './ClassComponent.module.css'

const Calculator = (props) => {

    let [number1, addnumber1] = useState("")
    let [number, addnumber] = useState("")
    let [isUseZpt, addIsUseZpt] = useState(false)
    let [action, addAction] = useState(null)
    let [actionUse, addActionUse] = useState(0)
    let [resultValue, addresultValue] = useState(0)

    console.log(number1);
    console.log(number);
    console.log(isUseZpt);
    console.log(action);
    console.log(actionUse);
    console.log(resultValue)

    let nubrebUse = (x) => {
        actionUse === 1
            ? secondNumber(x)
            : summ(x)
    }
    let secondNumber = (x) => {
        addIsUseZpt(false)
        addActionUse(2)
        summ(x)
    }

    let summ = (x) => {
        x === ","
            ? ifZpt(x)
            : addnumber1(number1 += x)
    }

    let ifZpt = (x) => {
        if (x === "," && !isUseZpt) {
            addIsUseZpt(true)
            addnumber1(number1 += ".")
        } else {
            addnumber1(number1 += String(""))
        }
    }

    let onAction = (a) => {
        if (actionUse === 0) {
            addAction(a)
            addActionUse(1)
            addnumber(number1)
            addnumber1("")
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
        '/': (x, y) => parseFloat(x) / parseFloat(y)
    };

    let result = (a, x, y) => {
        addresultValue(functions[a](x, y))
        addnumber1("")
        addnumber("")
        addIsUseZpt(false)
        addAction(null)
        addActionUse(0)

    }

    let buttonsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ","].map(x => < button key={x} className={style.button}
                                                                               onClick={() => nubrebUse(x)}>{x}</button>)
    let buttonsAction = ["+", "-", "*", "/"].map(x => <button key={x} className={style.button}
                                                              onClick={() => onAction(x)}>{x}</button>)

    return (
        <>
            <div className={style.container1}>
                <div>
                    {buttonsNumbers}
                </div>
                <div>
                    {buttonsAction}
                </div>
                <button className={style.button} onClick={() => result(action, number, number1)}>=</button>
            </div>
        </>
    )
}

export default Calculator

