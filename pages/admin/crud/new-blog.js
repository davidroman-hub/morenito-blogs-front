import Layout from '../../../components/Layout'
import Link from 'next/Link'
import Admin from '../../../components/auth/Admin'
import BlogCreate from '../../../components/crud/Blog'



const Blog = () => {
    return(
        <Layout>
            <Admin>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5 pl-4">
                        <h1>MCrear un nuevo Blog</h1>   
                        </div>
                            <div className="col-md-4 pb-3 pl-5">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                    <BlogCreate/>
                                    </li>   
                                </ul>
                            </div>
                            <div className="col-md-5  pb-5 pl-5 ">
                           
                            </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )}

export default Blog