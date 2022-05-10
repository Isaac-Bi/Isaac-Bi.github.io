import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import piggyBank from '../public/images/piggybank.png'
import chronos from '../public/images/chronos.jpg'
import quarantineApp from '../public/images/covid19.png'

const Home: NextPage = () => {
  return (
    
    <div>
      <Head>
        <title>PiggyBank</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
	      <meta name="description" content="Isaac Bi's Portfolio Website" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Tailwind, React, Next" />
        <meta name="author" content="Isaac Bi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="bg-left bg-cover h-full pb-40 bg-opacity-50 bg-[url('/images/plain_banner.png')]">
            <nav>
                        <div className="flex items-center justify-end gap-x-10 pt-3 pr-10">
                            <Link href="/">
                                <a className="text-3xl text-gray-700 capitalize lg:mt-0 hover:text-orange-600">Home</a>
                            </Link> 
                            <a href="#biography_heading" className="text-3xl text-gray-700 capitalize lg:mt-0 hover:text-orange-600">About Me</a> 
                            <a href="mailto: isaacb836@gmail.com" className="text-3xl text-gray-700 capitalize lg:mt-0 hover:text-orange-600">Contact Me</a> 
                            <a href="/resume.pdf" className="flex justify-end text-3xl text-gray-700 capitalize lg:mt-0 hover:text-orange-600">Resume<img className="icon w-7" src="/images/icons/file.svg" alt="pdf file"/></a>
                        </div>
            </nav>
           
            <div className="pt-20 flex justify-around text-center w-full">
                <div>
                    <h1 className="mt-32 mb-10 text-8xl font-bold text-sunset">
                        Case Study
                    </h1>
                    <h2 className="mb-10 text-5xl font-semibold text-white">
                        PiggyBank
                    </h2>
                </div>
            </div>
        </header>


      <main className="pt-20 pb-20 flex grow w-full flex-col items-center justify-center text-center">
      <h3 className="text-3xl font-bold text-slate-900 pb-5" id="project_heading">PiggyBank</h3>

      <div className="piggybank transition duration-300 hover:scale-125 hover:z-50"> 
            <a href="https://github.com/Isaac-Bi/CSE110">
              <Image className="rounded-md"
                src={piggyBank} 
                alt = "Piggybank app logo"
              />
            </a>
      </div>
    </main>
    <Footer/>
  </div>
  )
}

export default Home
