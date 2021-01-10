import React from 'react';
import './LogoFooter.css';


import {NavLink} from "react-router-dom";

const LogoFooter = (props) => {

    return (
        <div>
            {props.isAuth?
            <div>
                <div>{props.login}</div>
                <div>{props.email}</div>
            </div>
            : <NavLink to='/login'>
            <div className="navBar_Item">login</div>
        </NavLink>}

        </div>
    )
}
export default LogoFooter