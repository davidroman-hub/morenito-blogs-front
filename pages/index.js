import Layout from '../components/Layout'
import Link from 'next/Link'

const Index = () => {
    return (
        <Layout>
             <h1>Index page</h1>
             <Link href="/signup">
                <a >inicia Sesion</a>
             </Link>   
        </Layout>
    )
}

export default Index