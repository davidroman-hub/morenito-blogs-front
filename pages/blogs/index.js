import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import {useState,useEffect} from 'react'
import {listBlogsWithCategoriesAndTags} from '../../actions/blog'
import {API} from '../../config'
import renderHTML from 'react-render-html';
import moment from 'moment'

const Blogs = ({blogs, categories, tags, size}) => {



    const showAllBlogs = () => {
        return blogs.map((blog,i) => {
         return <article key={i}>
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
                            <p>categorias del blog y etiquetas</p>
                        </section>
                        <div className="row">
                            <div className="col-md-4">imagen</div>
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
                <hr/>
            </article>
        })
    }




    return (
       
            <Layout>
                <main>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3">
                                <h4 className="display-4 font-weight-bold text-center">Blogs sobre videojuegos, tutoriales y tecnología!</h4>
                            </div>
                            <section className="">
                                <p>Show categories and tags</p>
                            </section>
                        </header>
                    </div>
                    <div className="container-fluid">
                            <div className="row">
                                 {/* <div className="col-md-12"> {JSON.stringify(blogs)}</div> */}
                                 <div className="col-md-12"> {showAllBlogs()}</div>
                            </div>
                    </div>
                </main>
            </Layout>
       
    )
}

Blogs.getInitialProps = () => {
    return listBlogsWithCategoriesAndTags().then(data => {
        if (data.error){
            console.log(data.error)
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories, 
                tags: data.tags, 
                size: data.size
            }
        }
    } )
}

export default Blogs // getInitialProps

