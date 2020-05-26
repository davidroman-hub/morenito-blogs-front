import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import {useState,useEffect} from 'react'
import {singleBlog} from '../../actions/blog'
import Card from '../../components/blog/Card'
import {API, DOMAIN, APP_NAME, FB_APP_ID} from '../../config'
import {withRouter}from 'next/router'


const SingleBlog = ({blog,router}) => {
    return (
        <React.Fragment>
            <Layout>
                <div className="container-fluid">
                    <section>
                        {JSON.stringify(blog)}
                    </section>
                </div>
            </Layout>
        </React.Fragment>
    )

}


SingleBlog.getInitialProps = ({query}) => {
    return singleBlog(query.slug).then( data  => {
        if(data.error){
            console.log(data.error)
        } else {
            console.log('Get initial props in single blog',data)
            return {blog: data}
        }
    })
}

export default withRouter(SingleBlog)