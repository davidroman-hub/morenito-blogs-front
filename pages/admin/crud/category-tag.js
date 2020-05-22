import Layout from '../../../components/Layout'
import Link from 'next/Link'
import Admin from '../../../components/auth/Admin'
import Category from '../../../components/crud/Category'
import Tag from '../../../components/crud/Tags'


const CategoryTag = () => {
    return (
        <Layout>
            <Admin>
                <div className="containerfluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5 pl-4">
                        <h1>Manejo de categorias y etiquetas</h1>   
                        </div>
                            <div className="col-md-4 pb-3 pl-5">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                    <Category/>
                                    </li>   
                                </ul>
                            </div>
                            <div className="col-md-5  pb-5 pl-5 ">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                <Tag/>
                                    </li>
                                 </ul>
                            </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default CategoryTag 