import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Person from '../components/Person'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Vakulio Portfolio</title>
      </Head>
      <Header/>
      <section id='person' className='snap-center'>
        <Person/>
      </section>

    </div>
  )
}

export default Home