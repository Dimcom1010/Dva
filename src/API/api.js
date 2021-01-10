import React from "react";
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

            intance.get(`profile/` + id)

        )
    },

    getStatus(userId){
        debugger
        return (
            intance.get('profile/status/'+userId)

        )
    },

    updateStatus(status){
        debugger
        return (
            intance.put('profile/status/',{status:status}) // мы на сервер отправляем обыект status которые тредуется по документации

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
    login(email,password,rememberMe,captcha) {
        return (
            intance.post(`auth/login`)

        )
    },


}