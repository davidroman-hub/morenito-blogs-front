import {useState, useEffect} from 'react';
import {signin, authenticate, isAuth,} from '../../actions/auth';
import Router from 'next/router';


const SigninComponent = () => {
   
const [values, setvalues] = useState({
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

const { email, password, error, loading, message,showForm} = values


const handleSubmit = e => {
    e.preventDefault(),
   // console.table({name, email, password, error, loading, message,showForm})
    setvalues({...values, loading:true, error:false })
    const user = { email, password} 
    
    signin(user).then(data => {
        if(data.error){
            setvalues({...values, error:data.error, loading:false})
        } else {
            //Redirect// save user token to cookie
            // save user info to localstorage
                authenticate(data, () => {
                    Router.push('/');
                        })
                     }
                });
            }


const handleChange = name => e => {
    setvalues({...values, error: false,[name]: e.target.value})
}


const showLoading = () => ( loading ? <div className="alert alert-info">Cargando..</div>: '');
const showError = () => ( error ? <div className="alert alert-danger">{error}</div>: '');
const showMessage = () => ( message ? <div className="alert alert-info">{message}</div>: '');


    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Escribe tu E-mail"/>
                    </div>
                    <div className="form-group">
                        <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Escribe tu constraseña"/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary">Iniciar Sesión</button>
                    </div>
            </form>
        )
    }
    

    
    return (
        <React.Fragment>
        {showError()}
        {showLoading()}
        {showMessage()}
        {showForm && signinForm()}
        </React.Fragment>
    )
}

export default SigninComponent
