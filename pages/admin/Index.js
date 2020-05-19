import Layout from '../../components/Layout'
import Link from 'next/Link'
import Admin from '../../components/auth/Admin'

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
             <h1>Admin Dashboard</h1>      
            </Admin>
        </Layout>
    )
}

export default AdminIndex  