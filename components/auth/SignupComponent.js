import {useState, useEffect} from 'react';
import {signup, isAuth} from '../../actions/auth';
import Router from 'next/router'


const SignupComponent = () => {
   
const [values, setvalues] = useState({
    name:'david',
    email:'jobdavidroman@gmail.com',
    password:'123456',
    error:'',
    loading:false,
    message:'',
    showForm:true
});

useEffect(() => {
    isAuth() && Router.push('/') /// if is auth the user cant return to login again
},[])

const {name, email, password, error, loading, message,showForm} = values


const handleSubmit = e => {
    e.preventDefault(),
   // console.table({name, email, password, error, loading, message,showForm})
    setvalues({...values, loading:true, error:false })
    const user = {name, email, password} 
    
    signup(user).then(data => {
        if(data.error){
            setvalues({...values, error:data.error, loading:false})
        } else {
            setvalues({...values,
                            name:'', 
                            email:'', 
                            password:'', 
                            error:'', 
                            loading:false, 
                            message:data.message,
                            showForm:false
                        });
                     }
                });
            }


const handleChange = name => e => {
    setvalues({...values, error: false,[name]: e.target.value})
}


const showLoading = () => ( loading ? <div className="alert alert-info">Cargando..</div>: '');
const showError = () => ( error ? <div className="alert alert-danger">{error}</div>: '');
const showMessage = () => ( message ? <div className="alert alert-info">{message}</div>: '');


    const signupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Escribe tu nombre"/>
                    </div>
                    <div className="form-group">
                        <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Escribe tu E-mail"/>
                    </div>
                    <div className="form-group">
                        <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Escribe tu constraseña"/>
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-primary">Registrate</button>
                    </div>
            </form>
        )
    }
    

    
    return (
        <React.Fragment>
        {showError()}
        {showLoading()}
        {showMessage()}
        {showForm && signupForm()}
        </React.Fragment>
    )
}

export default SignupComponent
