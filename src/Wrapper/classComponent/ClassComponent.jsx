import React, {useEffect, useState} from 'react';
import style from './ClassComponent.module.css'

const Calculator = (props) => {

    let [number1, addnumber1] = useState("")
    let [number, addnumber] = useState("")
    let [isUseZpt, addIsUseZpt] = useState(false)
    let [action, addAction] = useState("")
    let [actionUse, addActionUse] = useState(0)
    let [resultValue, addresultValue] = useState("")
    let [displey, addDispley] = useState("0")


    useEffect(() => {
        debugger
          if (!number1 && !number && !action && !resultValue && actionUse===0) {

              addDispley("He!")
          }else if (number1 && !number && !action && !resultValue && actionUse===0)
              { debugger
                  addDispley(number1)
          }else if ( action && !resultValue)
          { debugger
              addDispley(`${number} ${action} ${number1}`)
          }else if (action && resultValue && actionUse !==2)
          { debugger
              addDispley(resultValue)
              addnumber(resultValue)
              addnumber1("")
              addresultValue("")
          }else if (!action && resultValue  && actionUse===0)
          { debugger
              addDispley(resultValue)
              addActionUse(0)
              addnumber1(resultValue)
              addnumber("")
              addresultValue("")
          }
        }, [ number1,action,number,resultValue, actionUse]
    )
    console.log("number1", parseFloat(number1));
    console.log("number",parseFloat(number));
    console.log("isUseZpt",isUseZpt);
    console.log("action",action);
    console.log("actionUse",actionUse);
    console.log("resultValue",resultValue);
    console.log("displey",displey);
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
        if (x === ",")
            {ifZpt(x)
            }else {
            addnumber1(String(number1 += x))
        }
    }

    const ifZpt = (x) => {
        if (x === "," && !isUseZpt) {
            addIsUseZpt(true)
            addnumber1(String(
                number1
                    ?number1 += "."
                    :number1 += "0."
            ))
        } else {
            addnumber1(number1 += String(""))
        }
    }

    const onAction = (a) => {
        if (actionUse === 2){
            debugger
            result(action, number, number1, a)



        }  else if (number1 && actionUse === 0) {
            addAction(a)
            addnumber(String(number1))
            addnumber1("")
            addActionUse(1)

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
                    ? parseFloat(x) / parseFloat(y)
                    : "на ноль делить нельзя",
        '%': (x, y) => parseFloat(x) /100 * parseFloat(y)
    };

    const result = (a, x, y, actionFrom) => {
        debugger


        if(a && x && y && actionFrom==="equals") {
            debugger
            addresultValue(String(functions[a](x, y)))
            debugger
            addAction("")
            debugger
            addActionUse(0)

        } else if(a && x && y && actionFrom!=="equals"){
            debugger
            addresultValue(String(functions[a](x, y)))
            debugger
            addAction(actionFrom)
            debugger
            addActionUse(1)

        }
    }
    const rec=()=>{
        addnumber1("")
        addnumber("")
        addIsUseZpt(false)
        addAction(null)
        addActionUse(0)
        addDispley("")
        addresultValue("")
    }

    const inversion =()=>{
        addnumber1 ( String(parseFloat(number1)*(-1)) )
    }
    const backspace= ()=>{
        let last =number1.slice(-1)
        if (last===".") {
            addnumber1(number1.slice(0, -1))
            addIsUseZpt(false)
        } else {
            addnumber1(number1.slice(0, -1))
        }
    }

 /*   let display = React.createRef()*/
  /*  let textDisplay=display.current.value*/

    return (
        <div className={style.calculator_wrapper}>
            <div className={style.calculator_grid_body}>

                <input className={style.grid_item + " " + style.dipley_input} type="text" onChange="alert(this.value)" value={displey}/>

                <span className={style.grid_item + " " + style.item_span}>Super power 2000</span>

                <button className={style.grid_item} onClick={() => rec()}>C</button>

                <button className={style.grid_item} onClick={() => inversion()}>-/+</button>

                <button className={style.grid_item} onClick={() => backspace()}>←</button>

                <button className={style.grid_item} onClick={() => onAction("%")}>%</button>

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

                <button className={style.grid_item} onClick={() => result(action, number, number1,"equals")}>=</button>

                <button className={style.grid_item} onClick={() => onAction("+")}>+</button>




            </div>
        </div>
    )
}

export default Calculator

