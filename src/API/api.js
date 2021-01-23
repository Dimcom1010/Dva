import axios from "axios";


const intance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'e4c34771-d376-444e-a0b5-b4cfda142428'}
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return (
            intance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then (resp=>{
                    return resp.data;
                })
        )
    },

    postFollowed(id) {
        return (
            intance.post(`follow/${id}`)
        )
    },

    postUnFollowed(id) {
        return (
            intance.delete(`follow/${id}`)
        )
    }
}


export const profileAPI = {
    getUser(id) {
        return (
            intance.get(`profile/` + id) //  с get параметром мы можем на сервер через( ? ) квери строка
        )
    },

    getStatus(userId){

        return (
            intance.get('profile/status/'+userId)
        )
    },

    updateStatus(status){

        return (
            intance.put('profile/status/',{status:status}) // мы на сервер отправляем обыект status которые тредуется по документации
        )
    },
    saveFoto(photoFile){
        const formData = new FormData()
        formData.append("image",photoFile)
        return (
            intance.put('/profile/photo',formData,{
                headers:{
                    'Content-Type': 'multipart/from-data'
                }
            }) // мы на сервер отправляем обыект status которые тредуется по документации
        )
    }
}


export const authAPI = {
    me(id) {
        return (
            intance.get(`auth/me`)
                .then (response=>{
                    return response.data
                })
        )
    },

    login( email, password, rememberMe= false ) {

        return intance.post(`auth/login`, {email, password, rememberMe}) //при пост запросе мы можем на сервер отправить щё и данные email,password,rememberMe,captcha
    },

    logOut() {

        return (
            intance.delete(`auth/login`)

        )
    },
}