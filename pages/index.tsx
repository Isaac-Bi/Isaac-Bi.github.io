import type { NextPage } from 'next'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import piggyBank from '../public/images/piggybank.png'
import chronos from '../public/images/chronos.jpg'
import quarantineApp from '../public/images/covid19.png'
import warren from '../public/images/warren.jpg'
import cliffs from '../public/images/cliffs.jpg'
import shanghai from '../public/images/shanghai.jpg'


const Home: NextPage = () => {
  return (
    
    <div>
      <Head>
        <title>Isaac Bi</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
	      <meta name="description" content="Isaac Bi's Portfolio Website" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Tailwind, React, Next" />
        <meta name="author" content="Isaac Bi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />


      <main className="pt-20 pb-20 flex grow w-full flex-col items-center justify-center text-center">
      <h3 className="text-3xl font-bold text-slate-900 pb-5" id="project_heading">My Projects</h3>
      <section id="project" className="px-5 flex items-center gap-2 projects">
          <div className="piggybank transition duration-300 hover:scale-125 hover:z-50"> \
            <Link href="./piggybank">
              <Image className="rounded-md"
                src={piggyBank} 
                alt = "Piggybank app logo"
              />
            </Link>
          </div>
          <div className="chronos transition duration-300 hover:scale-125 hover:z-50">
            <a href="https://github.com/Isaac-Bi">
              <Image className="rounded-md"
                  src={chronos} 
                  alt="Chronos app logo"
                />
            </a>
          </div>
          <div className="covid transition duration-300 hover:scale-125 hover:z-50">
            <a href="https://github.com/Isaac-Bi/quarantine-app">
              <Image className="rounded-md"
                  src={quarantineApp} 
                  alt="COVID Risk Factor app logo"
                />
            </a>
          </div>
      </section>

      <h2 id="biography_heading">Biography</h2>
      <hr/>
      <section className="biography">
        <div>
          <h3>Education and Experience</h3>
          <Image className="rounded-md"
                  src={warren}
                  alt="Balcony photograph of Warren College"
          />
        </div>
        <p> 
          I attend the University of California, San Diego pursuing a B.S in Computer Science. I'll be graduating in Spring of 2022. I have been working part time at my University's IT Service Desk since the start of my 
          freshman year. I specialize in Front-End development and UI design, however I'm not afraid to get my hands dirty with nitty gritty frameworks, algorithms, and back-end software. 
        </p>
      </section>

      <section className="biography">
        <div>
          <h3>Hobbies and Interests</h3>
          <Image className="rounded-md"
                  src={cliffs}
                  alt="Landscape shot of La Jolla Cliffs"
          />
        </div>
        <p> 
          I've been on the stage for a variety of reasons, whether it be for public speaking competitions, orchestral concerts, or theatrical productions, I simply love diving head first into anything that lets me show
          off. The diversity of my interests has caused me to wear many hats. I'm a classically trained musician with a love for Jazz improvisation, I'm an excellent orator and debater (with a cheeky sense of humor), 
          and I'm determined to earn a hat for artistic talent too later in my life. 
        </p>
      </section>

      <section className="biography">
        <div>
          <h3>How are you managing during the pandemic?</h3>
          <Image className="rounded-md"
                  src={shanghai}
                  alt="Image of Shanghai shopping center"
          />
        </div>
        <p> 
          I've always thrived on consistent routines, so for me the pandemic hasn't been all too bad. Every morning is pretty much the same, but that also means I'm never really surprised by anything crazy. 
          Keeping myself busy has been the main goal, and with my job and constant flow of CS assignments, keeping busy hasn't been difficult at all. 
        </p>
    </section>


    <h2>Skills</h2>
    <hr/>
    <section className="skills">
      <div>
        <h3>Coding languages</h3> 
        <p>C, C++, Java, Python, HTML, CSS, PHP, MySQL, JavaScript, JQuery, XML</p>
      </div>

      <div>
        <h3>Soft skills</h3> 
        <p>Communication, public speaking, documentation, statistical analysis</p>
      </div>

      <div>
        <h3>Software</h3>
        <p>Git, Github, Unix, Bash, Android Studio, Google Firebase</p>
      </div>

      <div>
        <h3>Design</h3>
        <p>Adobe Photoshop, Adobe Illustrator, Figma, Adobe XD</p>
      </div>
    </section>
    </main>
    <Footer/>
  </div>
  )
}

export default Home
