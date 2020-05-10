import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6805cea5-f6b1-496c-b7e9-c9391c11085f"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 12) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    
    unfollow(id) {
        return instance.delete(`follow/${id}`)
        .then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`)
        .then(response => response.data);
    }
    

}


export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
        .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}




export const authAPI = {
    me() {
        return instance.get(`auth/me`)
        .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}


