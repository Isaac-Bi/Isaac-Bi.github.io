import { Bounce_button } from "./bounce_button"
import Link from 'next/link'
import Script from 'next/script'

const Hero = () => {
    return (
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
           
            <div className="flex justify-around w-full">
                <div>
                    <h1 className="mt-32 mb-10 text-8xl text-slate-900">
                        Hello!
                    </h1>
                    <h2 className="mb-10 text-5xl font-bold text-slate-900 stroke-black">
                        My name is Isaac Bi.
                    </h2>
                    <p className="text-3xl text-slate-900">
                        Front-end Developer.
                    </p>
                    <p className="text-3xl text-slate-900">
                        Back-end Developer.
                    </p>
                    <p className="text-3xl text-slate-900">
                        Mobile Developer.
                    </p>
                    <p className="text-3xl text-slate-900">
                        Musician.
                    </p>
                    <p className="text-3xl text-slate-900">
                        Comedian.
                    </p>
                </div>
                <div className="mt-32 w-96">
                    <Bounce_button/>
                </div>
            </div>
        </header>
    )
}

export default Hero