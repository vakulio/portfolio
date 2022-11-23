import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Person from '../components/Person'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vakulio Portfolio</title>
      </Head>
      <Header/>
      <section>
        <Person/>
      </section>

    </div>
  )
}

export default Home