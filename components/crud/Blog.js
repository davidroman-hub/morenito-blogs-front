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

    const [checked, setChecked] = useState([]) // categories checked
    const [checkedTag, setCheckedTag] = useState([])// tags checked



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
    const token = getCookie('token')
    useEffect(() => {
        setValues({...values,formData: new FormData});
        initCategories();
        initTags();
    },[router])


     /// CATEGORIES

    const initCategories = () => {
        getCategories().then(data => {
            if (data.error){
                setValues({...values,error: data.error})
            } else {
                setCategories(data)
            }
        })
    }

  

    const showCategories = () => {
        return (
            categories && categories.map((c, i) => (
                <li key={i}  className='list-unstyled'>
                    <input onChange={handleToggle(c._id)}  type='checkbox' className='mr-2'/>
                    <label className='form-check-label'>{c.name}</label>
                </li>
            ))
        )
    }
    
    const handleToggle = (c) => () => {
        setValues({...values,error:''})

        // return the first index or -1
        const clickCategory = checked.indexOf(c)
        const all = [...checked]
        if(clickCategory === -1) {
            all.push(c)
        }else{
            all.splice(clickCategory, 1)
        }
        console.log(all)
        setChecked(all)
        formData.set('categories', all)
    } 

////// TAGS

const initTags = () => {
    getTags().then(data => {
        if (data.error){
            setValues({...values,error: data.error})
        } else {
            setTags(data)
        }
    })
}

const showTags = () => {
    return (
        tags && tags.map((t, i) => (
            <li key={i} className='list-unstyled'>
                <input onChange={handleToggleTags(t._id)} type='checkbox' className='mr-2'/>
                <label className='form-check-label'>{t.name}</label>
            </li>
        ))
    )
}


  
const handleToggleTags = (t) => () => {
    setValues({...values,error:''})

    // return the first index or -1
    const clickTag = checkedTag.indexOf(t)
    const all = [...checkedTag]
    if(clickTag === -1) {
        all.push(t)
    }else{
        all.splice(clickTag, 1)
    }
    console.log(all)
    setCheckedTag(all)
    formData.set('tags', all)
} 



///////////////////////

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


    /// ERRORS AND SUCCESS MSJS

    const showError = () => (
             <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>{error}</div>
    )

    
    const showSuccess = () => (
           <div className="alert alert-success" style={{display: success ? '' : 'none'}}>{success}</div>
        )


    
/// CREATE A BLOG METHOD

    
    const createFormBlog = () => {
        
        const publishBlog = (e) => {
            e.preventDefault()
        //      console.log('ready tu publish')
            createBlog(formData, token).then( data => {
                if (data.error){
                    setValues({...values,error: data.error})
                } else {
                    setValues({...values, title:'', error: '', success:`El post  "${data.title}" ha sido creado!`})
                    setBody('')
                    setCategories([])
                    setTags([])
                }
            })
        } 


        ////// Form

        return (
            <form onSubmit={publishBlog}>
                <div className="form-group pl-5 pr-5">
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
            <div className='pt-3 ml-5 mr-5'>
                {createFormBlog()}
            </div>
            <div className='pt-3 ml-5 mr-5'> 
                {showError()}
                {showSuccess()}
           </div>     
                <hr/>
                    < div className='form-group pb-2 text-center'>
                        <h5>Imagen destacada</h5>
                        <hr/>
                        <small className='text-muted'>Tamaño máximo 1 mb</small>
                        <br/>
                        <label className='btn btn-outline-info'>Cargar la imagen destacada
                        <input onChange={handleChange('photo')} type='file' accept="image/*" hidden/>
                        </label>
                    </div>
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

