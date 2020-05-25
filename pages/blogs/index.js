import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import {useState,useEffect} from 'react'
import {listBlogsWithCategoriesAndTags} from '../../actions/blog'
import {API} from '../../config'

const Blogs = ({blogs, categories, tags, size}) => {
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
                                 <div className="col-md-12"> {JSON.stringify(blogs)}</div>
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

