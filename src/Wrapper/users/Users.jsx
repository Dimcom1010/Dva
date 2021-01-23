import React, {useState} from "react";
import style from './Users.module.css'
import usersFotoNull from '../../img/UsesrFotoNull.png'
import {NavLink} from "react-router-dom";
import Preloader from "../../Elements/preloder/preloader";
import Paginator from "../../Elements/Paginator/Paginator";



const Users = ({totalCount, pageSize, currentPage, ...props}) => {
    return <>

        {props.isPreloader ? (<Preloader/>
        ) : (
            <div>

                <Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage}
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