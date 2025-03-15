import {SectionTitle} from '../../components/SectionTitle.tsx';
import styled from "styled-components";
import {Card} from './Card.tsx';
import photo1 from '../../assets/images/tinified-3/001.webp';
import photo2 from '../../assets/images/tinified-3/002.webp';
import photo3 from '../../assets/images/tinified-3/003.webp';
import photo4 from '../../assets/images/tinified-3/004.webp';
import photo5 from '../../assets/images/tinified-3/005.webp';
import photo6 from '../../assets/images/tinified-3/006.webp';
import {Theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";

export const Section= () => {
    return (
        <ContainerGrid>
            <Container>
           < SectionTitle>Visual Explorations</SectionTitle>
            <CardsGrid>
                <Card img = {photo1}/>
                <Card img = {photo2}/>
                <Card img = {photo3}/>
                <Card img = {photo4}/>
                <Card img = {photo5}/>
                <Card img = {photo6}/>
            </CardsGrid>
            </Container>
        </ContainerGrid>
    )
}
const CardsGrid= styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    justify-content: center;
    padding-top: 65px;
    @media ${Theme.media.mobile}{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        gap: 25px;
        padding-top: 35px;
    }
    
    
   
   
    
 
    `
const ContainerGrid = styled.section`
padding: 240px 0;
    background-color: ${Theme.colors.primary};
    @media ${Theme.media.mobile} {
        padding: 115px 0;
    }
`

