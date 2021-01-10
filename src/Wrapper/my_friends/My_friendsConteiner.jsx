import React from 'react';
import My_friends from "./My_friends";
import {connect} from "react-redux";
import {addPostCreator} from "../../Redux/dialogReduser";


let mapStateToProps =(state)=>{
    return{
        DialogsData: state.DialogsData2.DialogsData,
        FriendsData: state.DialogsData2.FriendsData,
        NowPostText: state.DialogsData2.NowPostText,
        from:state.form.My_friends
    }
}


const My_friendsConteiner = connect (mapStateToProps, {addPostCreator})(My_friends);

export default My_friendsConteiner