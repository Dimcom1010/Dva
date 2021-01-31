import React, {useState} from 'react';


const Calculator = (props) => {

    let [dozens, addDozens] = useState(0)
    let [drob, addDrob] = useState(1)
    let displey=0

    let summ = (x) =>{
        addDozens(dozens*10+x)
        addDrob(drob*10)
    }
    let tochka=()=>{
        addDrob(1)
    }
    let itog=()=>{
        displey = dozens/drob

    }

    let b="12364.215648"
    console.log(b)
    let b2=+b
    console.log(b2)


    return (
        <>

            <button onClick={() => summ(1)}>1</button>
            <button onClick={() => summ(2)}>2</button>
            <button onClick={() => summ(3)}>3</button>
            <br/>
            <button onClick={() => summ(4)}>4</button>
            <button onClick={() => summ(5)}>5</button>
            <button onClick={() => summ(6)}>6</button>
            <br/>
            <button onClick={() => summ(7)}>7</button>
            <button onClick={() => summ(8)}>8</button>
            <button onClick={() => summ(9)}>9</button>
            <button onClick={() => summ(0)}>0</button>
            <br/>
            <button onClick={() => tochka()}>,</button>
            {/*            <button onClick={() => action("*")}>x</button>
            <button onClick={() => action("+")}>+</button>
            <button onClick={() => action("-")}>-</button>
            <button onClick={() => action("/")}>/</button>*/}
            <button onClick={() => itog()}>=</button>
        </>
    )
}

export default Calculator

