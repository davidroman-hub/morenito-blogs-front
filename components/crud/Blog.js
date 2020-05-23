import {createBlog} from '../../actions/blog'
import Link from 'next/Link'
import {useState,useEffect} from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import {withRouter} from 'next/router'
import {getCookie, isAuth} from '../../actions/auth'
import {getCategories} from '../../actions/category'
import {getTags} from '../../actions/tags'
const ReactQuill = dynamic(() => import('react-quill'), {ssr:false})
import '../../node_modules/react-quill/dist/quill.snow.css'

const NewBlog = ({router}) => {

    return(
        <div>
        {JSON.stringify(router)}

        </div>
    )
}

export default withRouter(NewBlog)