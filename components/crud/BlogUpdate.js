import {createBlog} from '../../actions/blog'
import Link from 'next/Link'
import {useState,useEffect} from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import {withRouter} from 'next/router'
import {getCookie, isAuth} from '../../actions/auth'
import {getCategories} from '../../actions/category'
import {getTags} from '../../actions/tags'
import {QuillModules, QuillFormats} from '../../helpers/quill'
const ReactQuill = dynamic(() => import('react-quill'), {ssr:false})
import '../../node_modules/react-quill/dist/quill.snow.css'

const BlogUpdate = () => {
  
    return(
        <div className='container-fluid'>
            
        {/* {JSON.stringify(router)} */}
            <div className='pt-3 ml-5 mr-5'>
                <p>Create blog form</p>
            </div>
            <div className='pt-3 ml-5 mr-5'> 
               show error and success msg
           </div>     
                <hr/>
                    < div className='form-group pb-2 text-center'>
                        <h5>Imagen destacada</h5>
                        <hr/>
                        <small className='text-muted'>Tamaño máximo 1 mb</small>
                        <br/>
                        
                    </div>   
            </div>
            
  
    )

    }
    export default BlogUpdate