import Link from 'next/Link'
import renderHTML from 'react-render-html';
import moment from 'moment'
import {API} from '../../config'


const Card = ({blog}) => {

    const showBlogCategories = blog => 
        blog.categories.map((c,i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ))
    

    
    const showBlogTags = blog => 
        blog.tags.map((t,i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ))
    



    return (
        <div className="lead pb-4">
                    <header>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a><h4 className="pt-3 pb-3 font-weight-bold">{blog.title}</h4></a>
                        </Link>
                    </header>
                        <section>
                            <p className="mark ml1 pt-2 pb-2">
                                    Escrito por {blog.postedBy.name} | Publicado el {moment(blog.createdAt).local('es').format('LL')}
                            </p>
                        </section>
                        <section>
                          {showBlogCategories(blog)}
                          {showBlogTags(blog)}
                          {/* {<JSON.stringify(blog.tags)} */}
                          <br/>
                          <br/>
                        </section>
                        <div className="row">
                            <div className="col-md-4">
                                <section className='mb-5'>
                                    <img className="img img-fluid" 
                                    style={{maxHeight:'150px', width:'auto', borderRadius:'100px'}} 
                                    src={`${API}/blog/photo/${blog.slug}`} 
                                    alt={blog.title}
                                     />
                                </section>
                            </div>
                            <div className="col-md-8">
                                <section>
                                <div className="pb-3">{renderHTML(blog.excerpt)}</div>
                                    <Link href={ `/blogs/${blog.slug}`}>
                                        <a className='btn btn-primary mt-2'> Leer mas!</a>
                                    </Link>
                                </section>
                            </div>
                        </div>
                </div>

    )

}

export default Card