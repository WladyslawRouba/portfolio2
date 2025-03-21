import './App.css'
import { Header } from './layout/header/Header'
import { Works } from './layout/section/sectionWorks/SectionWorks'
import { Main } from './layout/section/main/Main'
import { Skills} from './layout/sectionExploration/Skills.tsx'
import {Projects} from './layout/personalProjects/PersonalProjects'
import {Contacts} from './layout/section/contacts/Contacts.tsx'
import {Footer} from './layout/footer/Footer.tsx'
import {Particle} from './components/particle/Particle.tsx'

function App() {
    return (
    <>
    <Particle/>
       <Header/>
       <Main/>
       <Works/>
        <Skills/>
        <Projects/>
        <Contacts/>
       <Footer/>
       </>
    )
}

export default App


