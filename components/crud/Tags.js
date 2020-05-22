

import {useState,useEffect} from 'react';
import Link from 'next/Link'
import Router from 'next/router'
import {Layout} from '../Layout'
import {getCookie} from '../../actions/auth'
import {createTag, getTags,singleTag,removeTag} from '../../actions/tags'

const Tags = () => {
    const [values, setvalues] = useState ({
        name:'',
        error:false,
        success:false,
        categories:[],
        removed:false,
        reload:false

    })



        const {name, error, success, categories,removed, reload} = values
        const token = getCookie('token')

        useEffect(() => {
            loadTags()
        },[reload])

        const loadTags = () => { 
                getTags().then( data => {
                    if (data.error){
                        console.log(data.error)
                    } else {
                        setvalues({...values, categories: data})
                    }
                })
        }

        const showTags = () => {
            return categories.map((t,i) => {
                return( <button  
                onDoubleClick={() => deleteConfirm(t.slug)} 
                title="Doble click para eliminar"  
                key={i} 
                className="btn btn-outline-primary mr-1 ml-1 mt-3">
                    {t.name}
                 </button>
                )
            })
        }

        const deleteConfirm = slug => {
            let answer = window.confirm('Realmente quieres eliminar esta Etiqueta?')
            if(answer){
                deleteTag(slug)
            }
        }


        const deleteTag = slug => {
            //console.log('delete', slug)
            removeTag(slug, token).then(data => {
                if(data.error){
                    console.log(data.error)
                } else {
                    setvalues({...values, error:false , success:false, name:'', removed:!removed, reload:!reload});
                }
            })
        }
  

    



        const handleSubmit = e => {
            e.preventDefault()
            //console.log('create Category', name)
            createTag({name}, token).then(data => {
                if (data.error){
                    setvalues({...values, error: data.error, success:false})
                }else {
                    setvalues({...values, error:false, success:true, name:'', reload:!reload})
                }
            })
        }

        const handleChange = e => {
            setvalues({...values, name: e.target.value, error:false, success:false, removed:''})
        }


        //// SUCCESS and ERROR MESSAGES


        const showSuccess = () => {
            if(success){
                 return <p className="text-success">La etiqueta ha sido creada!</p>
            }
        }

        
        const showError = () => {
            if(error){
            return <p className="text-danger">La etiqueta con ese nombre ya existe!</p>
            }
        }
        
        const showRemoved = () => {
            if(removed){
                return <p className="text-danger">La etiqueta ha sido eliminada</p>
            }
        }

        const mouseMoveHandler  = e => {
            setvalues({...values, error: false, success:false, removed:''})
        }


        const newTagForm = () => (

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Nombre</label>
                    <input type="text" className="form-control" onChange={handleChange} value={name} require/>
                </div>
                <div className='form-group'>
                     <button className="btn btn-primary">Crear Etiqueta</button>
                </div>
            </form>
        );


        return <React.Fragment>
               
                {showSuccess()}
                {showError()}
                {showRemoved()}            
                <div onMouseMove = {mouseMoveHandler}>
                    {newTagForm()}
                    {showTags()}
                </div>
               </React.Fragment>

}

export default Tags

