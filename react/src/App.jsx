import { profile, skills } from "./data"
import About from "./Component/About"
import Hero from "./Component/Hero"
import Navbar from "./Component/Navbar"
import Skills from "./Component/Skills"


function App() {


  return (
    <>
    <Navbar profile={profile} />
    <Hero profile={profile} />
    <About skills={skills} />
    <Skills skills={skills} />
    </>
  )
}

export default App
