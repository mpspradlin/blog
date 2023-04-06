import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import DefaultLayout from '../components/DefaultLayout';
import HomeView from '../components/HomeView'

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>{`Michael Spradlin`}</title>
      </Head>
      <DefaultLayout>
        <HomeView posts={allPosts} />
      </DefaultLayout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
