import { profile, skills,projects, experiences } from "./data"
import About from "./Component/About"
import Hero from "./Component/Hero"
import Navbar from "./Component/Navbar"
import Skills from "./Component/Skills"
import Projects from "./Component/Projects"
import Journey from "./Component/Journey"

function App() {


  return (
    <>
    <Navbar profile={profile} />
    <Hero profile={profile} />
    <About skills={skills} />
    <Skills skills={skills} />
    <Projects projects={projects} />
    <Journey experiences={experiences}/>
    </>
  )
}

export default App
