import React, {useState} from "react";
import style from "../../Wrapper/users/Users.module.css";
import {Field, reduxForm} from "redux-form";
import {range} from "../forms/forms";



const Paginator = ({totalCount, pageSize, currentPage, onPageChangedThunkCreacor}) => {

    let onPull = (values) => {
        debugger
        console.log("значение ")
        console.log(values.PullUser)
    }


    let pageCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    const [page, setPage] = useState(currentPage);
    let leftLimit = page - 5
    let rightLimit = page + 5

    const FullForm = (props) => {
        debugger

        return (
            <form onSubmit={props.handleSubmit}>
                <Field name={'PullUser'} component={range} min="0" max="100" step="25"/>
            </form>
        )
    }
    const ReduxFullForm = reduxForm({form: 'FullForm'})(FullForm)

    return <>
{/*

        <span>_totalCount_-_{totalCount}_</span> <br/> <span>_pageSize_-_{pageSize}_</span> <br/>
        <span>_pageCount_-_{pageCount}_</span><br/><span>_currentPage_-_{currentPage}_</span><br/><span>leftLimit-_{leftLimit}_</span><br/>
        <span>rightLimit-_{rightLimit}_</span><br/>
*/}


        {leftLimit > 1 && <button onClick={() => setPage(0)}>{"|<<"} Suda ...</button>}
        {leftLimit > 1 && <button onClick={() => setPage(page - 1)}>{"<"} Suda ...</button>}
        {pages
            .filter(p => p >= leftLimit && p <= rightLimit)
            .map((p) => {
                return <span onClick={(e) => {
                    onPageChangedThunkCreacor(p, pageSize)
                }}
                             className={currentPage === p ? style.activPagesUsers : style.pagesUsers}>{p}
                 </span>
            })
        }
        {rightLimit < pageCount && <button onClick={() => setPage(page + 1)}>... Tuda {">"} </button>}
        {rightLimit < pageCount && <button onClick={() => setPage(pageCount)}>... Tuda {">>|"} </button>}

        <br/>


        {/*<ReduxFullForm onSubmit={onPull}/>*/}


    </>
}

export default Paginator