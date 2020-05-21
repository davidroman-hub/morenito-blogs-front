import {useState,useEffect} from 'react';
import Link from 'next/Link'
import Router from 'next/router'
import {Layout} from '../Layout'
import {isAuth, getCookie} from '../../actions/auth'
import {create} from '../../actions/category'

const Category = () => {
    const [values, setvalues] =useState ({
        name:'',
        error:'',
        success:'',
        categories:[],
        removed:false
    })



        const {name, error, success, categories,removed} = values
        const token = getCookie('token')

        const handleSubmit = (e) => {
            e.preventDefault()
            console.log('create Category', name)
            create({name}, token).then(data => {
                if (data.error){
                    setvalues({...values, error: data.error, success:false})
                }else {
                    setvalues({...values, error:false, success:true, name:''})
                }
            })
        }

        const handleChange = (e) => {
            setvalues({...values, name: e.target.value, error:false, success:false, removed:''})
        }

  
        const newCategoryForm = () => (

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Nombre</label>
                    <input type="text" className="form-control" onChange={handleChange} value={name} require/>
                </div>
                <div className='form-group'>
                     <button className="btn btn-primary">Crear Categoria</button>
                </div>
            </form>
        )


        return <React.Fragment>
                {newCategoryForm()}
               </React.Fragment>

}

export default Category