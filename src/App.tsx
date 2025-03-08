import './App.css'
import { Header } from './layout/header/Header'
import { Works } from './layout/section/sectionWorks/SectionWorks'
import { Main } from './layout/section/main/Main'
import { Section } from './layout/sectionExploration/SectionExploration'
import {Projects} from './layout/personalProjects/PersonalProjects'
import {Contacts} from './layout/section/contacts/Contacts.tsx'
import {Footer} from './layout/footer/Footer.tsx'


function App() {
    return (
    <>
       <Header/>
       <Main/>
       <Works/>
        <Section/>
        <Projects/>
        <Contacts/>
       <Footer/>
       </>
    )
}

export default App


