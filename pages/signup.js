import Layout from '../components/Layout'
import Link from 'next/Link'

const Signup = () => {
    return (
        <Layout>
             <h1>Sign up</h1>
             <Link href="/">
                <a >Home</a>
             </Link>
        </Layout>
    )
}

export default Signup