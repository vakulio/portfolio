import { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Person from '../components/Person'
import WorkExp from '../components/WorkExp'


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
      <section id='about' className='snap-center'>
        <About/>
      </section>
      <section id='exp' className='snap-center'>
        <WorkExp/>
      </section>

    </div>
  )
}

export default Home