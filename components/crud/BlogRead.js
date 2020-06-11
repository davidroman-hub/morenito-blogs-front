import {list, removeBlog} from '../../actions/blog'
import Link from 'next/Link'
import {useState,useEffect} from 'react'
import Router from 'next/router'
import {getCookie, isAuth} from '../../actions/auth'

const BlogRead = () => {
    return (
        <React.Fragment>
            actualizar y eliminar blogs
        </React.Fragment>
    )
}

export default BlogRead