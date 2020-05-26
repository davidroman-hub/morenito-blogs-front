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

// // get a single category

// export const singleCategory = (slug) => {
//     return fetch(`${API}/category/${slug}`, {
//         method: 'GET',
    
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };

// //Create category

// export const removeCategory = (slug,token) => {
//     return fetch(`${API}/category/${slug}`, {
//         method: 'DELETE',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//         },
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };


