import {list, removeBlog} from '../../actions/blog'
import Link from 'next/Link'
import {useState,useEffect} from 'react'
import Router from 'next/router'
import {getCookie, isAuth} from '../../actions/auth'
import moment from 'moment'

const BlogRead = () => {

    const [blogs,setBlogs]= useState([])
    const [message, setMessage] = useState('')
    const token = getCookie('token')

    const loadBlogs = () => {
        list().then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                setBlogs(data)
            }
        })
    }

    
    const deleteBlog = (slug) => {
        removeBlog(slug,token).then( data => {
            if (data.error){
                console.log(data.error)
            } else {
                setMessage(data.message)
                loadBlogs()
            }
        })
    }


    const deleteConfirm = (slug) => {
        let answer = window.confirm('Estas seguro que quieres eliminar el Blog?')
        if(answer){
            deleteBlog(slug)
        }
    }



    const showAllBlogs = () => {
        return blogs.map((blog,i) => {
            return (
                <div key={i} className=" pb-5">
                    <h3>{blog.title}</h3>
                        <p className="mark"> Escrito por {blog.postedBy.name} | publicado el dia {moment(blog.createdAt).local('es_ES').format('LL')} </p>
                        <button className="btn btn-sm btn-danger " onClick={ () => deleteConfirm(blog.slug)}>Eliminar Blog</button>
                </div>
            )
        })
    }

    useEffect(() => {
        loadBlogs()
     
    },[])

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                          {showAllBlogs()}
                    </div>
                </div>
            </div>
        
          {JSON.stringify(blogs)}
        </React.Fragment>
    )
}

export default BlogRead