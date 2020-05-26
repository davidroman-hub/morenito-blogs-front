import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import {useState,useEffect} from 'react'
import {singleBlog} from '../../actions/blog'
import Card from '../../components/blog/Card'
import {API, DOMAIN, APP_NAME, FB_APP_ID} from '../../config'
import {withRouter}from 'next/router'


const SingleBlog = ({router}) => {
    return (
        <React.Fragment>
            <Layout>
                <div className="container-fluid">
                    <section>
                        {JSON.stringify(router)}
                    </section>
                </div>
            </Layout>
        </React.Fragment>
    )

}



export default withRouter(SingleBlog)