import React, {useState} from "react";
import style from './Users.module.css'
import usersFotoNull from '../../img/UsesrFotoNull.png'
import {NavLink} from "react-router-dom";
import Preloader from "../../Elements/preloder/preloader";

const Paginator = ({totalCount, pageSize, currentPage, onPageChangedThunkCreacor}) => {

    let pageCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {pages.push(i);}
    let leftLimit =  currentPage-5
    let rightLimit = currentPage+5
    const [page, setPage] = useState(currentPage);


    return <>
        <span>_totalCount_-_{totalCount}_</span>
        <br/>
        <span>_pageSize_-_{pageSize}_</span>
        <br/>
        <span>_pageCount_-_{pageCount}_</span>
        <br/>
        <span>_currentPage_-_{currentPage}_</span>
        <br/>
        <span>leftLimit-_{leftLimit}_</span>
        <br/>
        <span>rightLimit-_{rightLimit}_</span>
        <br/>

        { leftLimit>1 && <button onClick={()=>setPage(page-1)} >{"<<"} Suda ...</button>}
        {pages
            .filter (p => p >= leftLimit && p <= rightLimit)
            .map( (p) => {
                return  <span onClick={(e) => {
                        onPageChangedThunkCreacor(p, pageSize)
                    }}
                          className={currentPage === p ? style.activPagesUsers : style.pagesUsers}>{p}
                 </span>
                })
        }
        {rightLimit<pageCount && <button onClick={()=>setPage(page+1) }>... Tuda {">>"} </button>}
    </>
}

const Users = ({totalCount, pageSize, currentPage, ...props}) => {
    return <>

        {props.isPreloader ? (<Preloader/>
        ) : (
            <div>

                <Paginator totalCount={totalCount}  pageSize={pageSize} currentPage={currentPage}
                           onPageChangedThunkCreacor={props.onPageChangedThunkCreacor}/>

                {props.users.map(u => <div key={u.id}>
                        <div className={style.users}>

                            <NavLink to={'/profile/' + u.id}>
                                <img alt="img" src={u.photos.small === null ? usersFotoNull : u.photos.small}
                                     className={style.foto}/>
                            </NavLink>
                            <div className={style.usersInfo}>
                                <div>id-{u.id}</div>
                                <div>name-{u.name}</div>
                                <div>uniqueUrlName-{u.uniqueUrlName}</div>
                                <div>status_{u.status}</div>
                                {u.followed                                            // обавление и удаление из друзей
                                    ? <button disabled={props.buttonInProgress.some(id => id === u.id)} onClick={() => {
                                        props.unFollowedThunkCreacor(u.id)
                                    }
                                    }>Unfollowed1</button>
                                    : <button disabled={props.buttonInProgress.some(id => id === u.id)} onClick={() => {
                                        props.FollowedThunkCreacor(u.id)
                                    }}>Followed</button>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )}
    </>

}
export default Users