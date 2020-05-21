import Layout from '../../../components/Layout'
import Link from 'next/Link'
import Admin from '../../../components/auth/Admin'

const CategoryTag = () => {
    return (
        <Layout>
            <Admin>
                <div className="containerfluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5 pl-4">
                        <h1>Manejo de categorias y etiquetas</h1>   
                        </div>
                            <div className="col-md-4">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                    categorias
                                    </li>   
                                </ul>
                            </div>
                            <div className="col-md-8">
                                Etiquetas
                            </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default CategoryTag 