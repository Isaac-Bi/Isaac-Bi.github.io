import Link from 'next/link'

const Navbar = () => {
    return (
        <header className="bg-left bg-cover h-5 pb-16 bg-[url('/images/plain_banner.png')]">
            <nav>
                    <div className="flex items-center justify-end gap-x-10 pt-3 pr-10">
                        <Link href="/">
                                <a className="text-3xl text-gray-700 capitalize lg:mt-0 hover:text-orange-600">Home</a>
                        </Link> 
                        <Link href="/#biography-heading">
                                <a className="text-3xl text-gray-700 capitalize lg:mt-0 hover:text-orange-600">About Me</a>
                        </Link>                         <a href="mailto: isaacb836@gmail.com" className="text-3xl text-gray-700 capitalize lg:mt-0 hover:text-orange-600">Contact Me</a> 
                        <a href="/resume.pdf" className="flex justify-end text-3xl text-gray-700 capitalize lg:mt-0 hover:text-orange-600">Resume<img className="icon w-7" src="/images/icons/file.svg" alt="pdf file"/></a>
                    </div>
            </nav>
        </header>
    )
}

export default Navbar