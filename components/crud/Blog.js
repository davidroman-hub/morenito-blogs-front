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
//import 'react-quill/dist/quill.bubble.css'
const NewBlog = ({router}) => {

    /// grab the blog from the localstorage
    const blogFromLocalStorage = () => {
        if(typeof window === 'undefined'){
            return false
        }
        if(localStorage.getItem('blog')){
            return JSON.parse(localStorage.getItem('blog'))
        } else {
            return false
        }
    }

    //show categories and tags

    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])




    const [body, setBody] = useState(blogFromLocalStorage())
    const [values, setValues] = useState({
        error:'',
        sizeError:'',
        success:'',
        formData:'',
        title:'',
        hidePublishButton:false        
    })

    const {error, sizeError, success, formData, title, hidePublishButton} = values

    useEffect(() => {
        setValues({...values,formData: new FormData});
        initCategories();
        initTags();
    },[router])

    const initCategories = () => {
        getCategories().then(data => {
            if (data.error){
                setValues({...values,error: data.error})
            } else {
                setCategories(data)
            }
        })
    }

    const initTags = () => {
        getTags().then(data => {
            if (data.error){
                setValues({...values,error: data.error})
            } else {
                setTags(data)
            }
        })
    }

    const showCategories = () => {
        return (
            categories && categories.map((c, i) => (
                <li key={i} className='list-unstyled'>
                    <input type='checkbox' className='mr-2'/>
                    <label className='form-check-label'>{c.name}</label>
                </li>
            ))
        )
    }
    
    const showTags = () => {
        return (
            tags && tags.map((t, i) => (
                <li key={i} className='list-unstyled'>
                    <input type='checkbox' className='mr-2'/>
                    <label className='form-check-label'>{t.name}</label>
                </li>
            ))
        )
    }



    const handleChange = name => e => {
        //return console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({...values, [name]:value, formData, error:''})
    } 

    const handleBody = e => {
        //return console.log(e.target.value);
        setBody(e)
        formData.set('body', e)
        if(typeof window !== 'undefined'){
            localStorage.setItem('blog', JSON.stringify(e))
        }
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
                    <ReactQuill modules={QuillModules} formats={QuillFormats} value={body} placeholder='Escribe algo increible...' onChange={handleBody}/>
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
        <div className='container-fluid'>
            
        {/* {JSON.stringify(router)} */}
            {createFormBlog()}
                <hr/>
                <div className='col-md-4'>
                    <h5>Categorias</h5>
                   <ul style={{maxHeight: '100px', overflow:'scroll'}}> {showCategories()}</ul>
                    <hr/>
                    </div>   
                <div className='col-md-4'>   
                    <h5>Etiquetas</h5>
                  <ul  style={{maxHeight: '100px', overflow:'scroll'}}> {showTags()} </ul>
                </div>    
            </div>
  
    )
}


export default withRouter(NewBlog)

