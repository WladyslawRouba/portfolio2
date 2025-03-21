import styled from 'styled-components'

import {SectionTitle} from '../../components/SectionTitle.tsx'

import photo1 from "../../assets/images/Rectangle-1.webp";
import photo2 from "../../assets/images/Rectangle-2.webp";
import photo3 from "../../assets/images/Rectangle-3-.webp";
import {Container} from "../../components/Container.tsx"
import { Fade } from "react-awesome-reveal";
import { PersonalCard} from "./Card.tsx";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.css'


export const Projects = () => {
    const items = [
        <PersonalCard photo = {photo1}/>,
        <PersonalCard photo = {photo2}/>,
        <PersonalCard photo = {photo3}/>,
    ];
    return(
        <StyledSection>
            <Container>
            <SectionTitle>Personal Projects</SectionTitle>
            <GridPhoto>
                <Fade duration={1000} delay={1000}>

                    <AliceCarousel mouseTracking items={items} />
                </Fade>
            </GridPhoto>
            </Container>

        </StyledSection>


    )
}

const StyledSection = styled.section`
position: relative;
    padding-bottom: 80px;
    
   
`
const GridPhoto = styled.div`
    padding-top: 80px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  

`







   //display: grid;
   // grid-template-columns: repeat(3, 1fr);
   // gap: 25px;
   // justify-items: center;
   // padding-top: 65px;
   // padding-bottom: 240px;

    
    
    


/*  @media ${Theme.media.mobile} {
      display: grid;
      grid-template-columns: repeat(1,1fr);
      padding-bottom: 150px;
      padding-top: 35px;
      
  }*/

