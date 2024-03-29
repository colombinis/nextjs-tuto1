import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import {getSortedPostsData} from '../lib/posts'

export default function Home({allPostData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>PHP dev ...now moving to nextjs...wishme luck :D</p>
      </section>

    <section>
      <h2>Blog</h2>
      <ul>
        {allPostData.map( ({id,date,title}) => (
          <li key={id}>
            <Link href='/posts/[id]' as={`/posts/${id}`}>
              <span>{title}</span>
            </Link>
            <br/>
            {id}
            <br/>
            {date}
          </li>
        ))}
      </ul>
    </section>

    </Layout>
  )
}

export async function getStaticProps(){
  const allPostData = getSortedPostsData()
  return {
    props:{
      allPostData
    }
  }
}