import fetch from 'isomorphic-fetch';
import { API } from '../config';

//Create category

export const createBlog = (blog,token) => {
    return fetch(`${API}/blog`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        //    'Content-Type': 'application/json',   // form data
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// get the list of blogs

export const listBlogsWithCategoriesAndTags = (skip, limit) => {
    const data = {
        limit,skip
    }

    return fetch(`${API}/blogs-categories-tags`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// get a single blog

export const singleBlog = (slug) => {

    return fetch(`${API}/blog/${slug}`, {
        method: 'GET',
    
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



/// related blogs

export const listRelated = blog => {
    return fetch(`${API}/blogs/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//// list blogs for admin

export const list = () => {
    return fetch(`${API}/blogs`, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

/// remove blog

export const removeBlog = (slug,token) => {
    return fetch(`${API}/blog/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',   // form data
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


/// UPDATE

export const updateBlog = (blog,token,slug) => {
    return fetch(`${API}/blog/${slug}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
        //    'Content-Type': 'application/json',   // form data
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

