import Layout from '../../components/Layout'
import Link from 'next/Link'
import Admin from '../../components/auth/Admin'

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="containerfluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5 pl-4">
                        <h1>Admin Dashboard</h1>   
                        </div>
                            <div className="col-md-4 pl-4">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <Link href="/admin/crud/category-tag">
                                            <a> Crear Categorias y tags</a>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link href="/admin/crud/new-blog">
                                            <a> Crear un nuevo Blog</a>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">ddklhdkjhd</li>
                                    <li className="list-group-item">ddklhdkjhd</li>
                                </ul>
                            </div>
                            <div className="col-md-8">
                                right
                            </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminIndex  