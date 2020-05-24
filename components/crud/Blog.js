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
//import 'react-quill/dist/quill.bubble.css'
const NewBlog = ({router}) => {

    const [body, setBody] = useState({})
    const [values, setValues] = useState({
        error:'',
        sizeError:'',
        success:'',
        formData:'',
        title:'',
        hidePublishButton:false        
    })

    const {error, sizeError, success, formData, title, hidePublishButton} = values


    const handleChange = name => e => {
        return console.log(e.target.value);
    } 

    const handleBody = name => e => {
        return console.log(e.target.value);
    } 
    
    const createFormBlog = () => {
        
        const publishBlog = (e) => {
            e.preventDefault()
            console.log('ready tu publish')
        } 

        return (
            <form onSubmit={publishBlog}>
                <div className="form-group">
                    <label className="text-muted">Titulo</label>
                    <input type="text" className="form-control" value={title} onChange={handleChange('title')}/>
                </div>   
                <div className='form-group'>
                    <ReactQuill value={body} placeholder='Escribe algo increible' onChange={handleBody}/>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>
                        Publicar
                    </button>
                </div>    

            </form>
        )
    }

    return(
        <div>
            
        {/* {JSON.stringify(router)} */}
        {createFormBlog()}

        </div>
    )
}

export default withRouter(NewBlog)