import React from "react";
import style from './Users.module.css'
import usersFotoNull from '../../img/UsesrFotoNull.png'
import {NavLink} from "react-router-dom";
import Preloader from "../../Elements/preloder/preloader";
import { Redirect } from "react-router-dom"

const Users = (props) => {
    debugger

    let pageCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    if (props.isAuth===false) return <Redirect to={'/login'}/>
    return (

        <div>

            {props.isPreloader ? (<Preloader/>
            ) : (

                <div>
                    <span>_totalCount_-_{props.totalCount}_</span>
                    <br/>
                    <span>_pageSize_-_{props.pageSize}_</span>
                    <br/>
                    <span>_pageCount_-_{pageCount}_</span>
                    <br/>
                    <span>_currentPage_-_{props.currentPage}_</span>
                    <br/>

                    <div>

                        {pages.map(p => {
                            return (

                                <span

                                    onClick={(e) => {
                                    props.onPageChangedThunkCreacor(p, props.pageSize)   // обавление и удаление из друзей
                                }}

                                      className={props.currentPage === p ? style.activPagesUsers : style.pagesUsers}>{p}

                                </span>

                            )
                        })}

                    </div>

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
        </div>
    )
}
export default Users