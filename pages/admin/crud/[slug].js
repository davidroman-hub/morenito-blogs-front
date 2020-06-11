import Layout from '../../../components/Layout'
import Link from 'next/Link'
import Admin from '../../../components/auth/Admin'
import BlogUpdate from '../../../components/crud/BlogUpdate'



const Blog = () => {
    return(
        <Layout>
            <Admin>
            <div className="container-fluid">
                    <div className="">
                        <div className="col-md-12 pt-5 pb-5 pl-4">
                        <h1>Actualizar Blog</h1>   
                        </div>
                            {/* <div className="col-md-4 pb-3 pl-5"> */}
                            <div className='text'>
                                    <BlogUpdate/>
                            </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )}

export default Blog