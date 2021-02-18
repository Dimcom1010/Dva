import './App.css';
import {NavLink, Route} from "react-router-dom";
import React from "react";
import UsersConteiner from './Wrapper/users/UsersConteiner';
import ProfileConteiner from './Wrapper/profile/ProfileConteiner';
import Login from "./Wrapper/Login/Login";
import LogoFooterConteiner from './Wrapper/LogoFooter/LogoFooterConteiner';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializationThunkCreator} from "./Redux/appReduser";
import Preloader from "./Elements/preloder/preloader";
import CalculatorConteiner from "./Wrapper/classComponent/ClassComponentConteiner";
import CartConteiner from "./Wrapper/cart/CartConteiner";
import ShopConteiner from "./Wrapper/Shop/ShopConteiner";


class App extends React.Component {
    componentDidMount() {
         this.props.initializationThunkCreator()
    }

    render() {
        this.initialization ? console.log("Вы авторизованы") : console.log("Вы не авторизованы")

        let addRefBurger = React.createRef(); //создание ссылки для елемента бургер
        const cons = () => {
            console.log('действие при нажатии на бурер')
        }


        if (!this.props.initialization) {
            return <Preloader/>
        }


        return (
            <div className="wrapper">
                <div className="header">
                    <NavLink to='/profile'>                                {/*навигация*/}
                        <div className="navBar_Item">Profile</div>
                    </NavLink>
                    <NavLink to='/Calculator'>
                        <div className="navBar_Item">Calculator</div>
                    </NavLink>
                    <NavLink to='/users'>
                        <div className="navBar_Item">Users</div>
                    </NavLink>
                    <NavLink to='/Shop'>
                        <div className="navBar_Item">Shop</div>
                    </NavLink>
                    <NavLink to='/Cart'>
                        <div className="navBar_Item">Cart</div>
                    </NavLink>
                    <NavLink to='/login'>
                        <div className="navBar_Item">Login</div>
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
                        <Route exact path='/Calculator' render={() => <CalculatorConteiner/>}/>
                        <Route exact path='/users' render={() => <UsersConteiner/>}/>
                        <Route exact path='/Shop' render={() => <ShopConteiner/>}/>
                        <Route exact path='/Cart' render={() => <CartConteiner/>}/>
                        <Route exact path='/login' render={() => <Login/>}/>
                    </div>

                </div>
                <div className="footer">
                    <LogoFooterConteiner/>


                </div>

            </div>

        );
    }
}


let mapStateToProps = (state) => {
    return {
        initialization: state.appReduser.initialization,

    }
}


export default compose(
    connect(mapStateToProps, {initializationThunkCreator}),
)
(App)
// если будет проблема с роутами смотреть (урок 80)9:50



