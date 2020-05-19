import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie'

//sign up

export const signup = user => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// sign in

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// Set the cookie

export const setCookie = (key, value) => {
    if( process.browser){
        cookie.set(key, value, {
            expires:7
        })
    }
} ;

// remove cookie

export const removeCookie = (key) => {
    if( process.browser){
        cookie.remove(key, {
            expires:7
        })
    }
};

// get the cookie

export const getCookie = (key) => {
    if( process.browser){
        cookie.get(key)
    }
};

//localstorage

// set in the local storage
export const setLocalStorage = (key, value) => {
    if( process.browser){
        localStorage.setItem(key, JSON.stringify(value))
    }
}


export const removeLocalStorage = (key) => {
    if( process.browser){
        localStorage.removeItem(key)
    }
}

// autth user data to cookie and locastorage


export const authenticate = (data, next) => {
    setCookie('token', data.token)
    setLocalStorage('user', data.user)
    next();
}

// get all the info from the token user

export const isAuth = () => {
    if(process.browser){
        const cookieChecked = getCookie('token')
        if(cookieChecked){
            if(localStorage.getItem('user')){
                return JSON.parse(localstorage.getItem('user'))
            }else{
                return false
            }
        }
    }
}