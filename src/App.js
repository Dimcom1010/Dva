import './App.css';
import Route from 'react-router-dom/es/Route';
import {NavLink} from "react-router-dom";
import React from "react";
import My_friendsConteiner from './Wrapper/my_friends/My_friendsConteiner';
import My_fotoContainer from './Wrapper/my_foto/My_fotoContainer';

import ClassComponentConteiner from './Wrapper/classComponent/ClassComponentConteiner';
import UsersConteiner from './Wrapper/users/UsersConteiner';
import ProfileConteiner from './Wrapper/profile/ProfileConteiner';
import Login from "./Wrapper/Login/Login";
import LogoFooterConteiner from './Wrapper/LogoFooter/LogoFooterConteiner';

function App(props) {

    let addRefBurger = React.createRef(); /*создание ссылки для елемента бургер*/
    const cons = () => {
        console.log('действие при нажатии на бурер')
    }

    return (
        <div className="wrapper">
            <div className="header">
                <NavLink to='/profile'>                                {/*навигация*/}
                    <div className="navBar_Item">Profile</div>
                </NavLink>
                <NavLink to='/my_friends'>
                    <div className="navBar_Item">My friends</div>
                </NavLink>
                <NavLink to='/my_foto'>
                    <div className="navBar_Item">My foto</div>
                </NavLink>


                <NavLink to='/classComp'>
                    <div className="navBar_Item">Class Component</div>
                </NavLink>
                <NavLink to='/users'>
                    <div className="navBar_Item">Users</div>
                </NavLink>


            </div>

            <div className="burgerDark"></div>
            {/*полоса маскирюющая меню на моб версии*/}
            <div className="burger" ref={addRefBurger} onClick={cons}><span></span></div>
            {/*меню Бургр для мобильных версий*/}

            <div className="topRow"></div>
            <div className="content">

                <div className="conteiner">

                    <Route exact path='/profile' render={() => <ProfileConteiner/>}/>
                    <Route exact path='/profile/:userId' render={() => <ProfileConteiner/>}/>

                    <Route exact path='/My_friends' render={() => <My_friendsConteiner store={props.store}/>}/>

                    <Route exact path='/My_foto' render={() => <My_fotoContainer store={props.store}/>}/>
                    <Route exact path='/classComp' render={() => <ClassComponentConteiner/>}/>
                    <Route exact path='/users' render={() => <UsersConteiner/>}/>
                    <Route exact path='/login' render={() => <Login/>}/>
                </div>

            </div>
            <div className="footer">
                <LogoFooterConteiner/>


            </div>

        </div>

    );
}

export default App;
