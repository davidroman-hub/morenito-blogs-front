import Layout from '../components/Layout'
import Link from 'next/Link'
import SignupComponent from '../components/auth/SignupComponent'

const Signup = () => {
    return (
        <Layout>
            <h2>Registro</h2>
             <SignupComponent/>
             <Link href="/">
                <a >Home</a>
             </Link>
        </Layout>
    )
}

export default Signup