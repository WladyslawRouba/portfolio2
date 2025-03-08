import styled from 'styled-components'
import {SectionTitle} from '../../components/SectionTitle.tsx'
import {PersonalCard} from "./PersonalCard.tsx";
import photo1 from "../../assets/images/Rectangle-1.webp";
import photo2 from "../../assets/images/Rectangle-2.webp";
import photo3 from "../../assets/images/Rectangle-3-.webp";
import {Container} from "../../components/Container.tsx"

export const Projects = () => {
    return(
        <section>
            <Container>
            <SectionTitle>Personal Projects</SectionTitle>
            <GridPhoto>
            <PersonalCard photo = {photo1}/>
            <PersonalCard photo = {photo2}/>
            <PersonalCard photo = {photo3}/>
            </GridPhoto>
            </Container>

        </section>


    )
}
const GridPhoto = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    justify-items: center;
    padding-top: 66px;
    padding-bottom: 240px;
  
    
    




`