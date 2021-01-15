import MyFriends from "./MyFriends";
import {connect} from "react-redux";
import {addPostCreator} from "../../Redux/dialogReduser";


let mapStateToProps =(state)=>{
    return{
        DialogsData: state.DialogsData2.DialogsData,
        FriendsData: state.DialogsData2.FriendsData,
        NowPostText: state.DialogsData2.NowPostText,
        from:state.form.MyFriends
    }
}


const MyFriendsConteiner = connect (mapStateToProps, {addPostCreator})(MyFriends);

export default MyFriendsConteiner