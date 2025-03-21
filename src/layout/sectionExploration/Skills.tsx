import {SectionTitle} from '../../components/SectionTitle.tsx';
import styled from "styled-components";
import {Skill} from './Skill.tsx';

import {Theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import { Fade } from "react-awesome-reveal";

export const Skills= () => {
    return (
        <ContainerGrid>
            <Container>
           < SectionTitle>My Skills</SectionTitle>
            <CardsGrid>
                <Fade cascade={true} damping={0.1}>
                    <Skill skillId = "git" title={"Git"}/> ;
                    <Skill skillId = "js" title={"JS"}/>;
                    <Skill skillId = "react" title={"React"}/>;
                    <Skill skillId = "styled" title={"Styled-components"}/>;
                    <Skill skillId = "redux" title={"Redux"}/>;
                    <Skill skillId = "ts" title={"Typescript"}/>;

                </Fade>
            </CardsGrid>
            </Container>
        </ContainerGrid>
    )
}
const CardsGrid= styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
    justify-content: center;
    padding-top: 65px;
    @media ${Theme.media.mobile}{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        gap: 40px;
        padding-top: 35px;
    }
    
 
    `
const ContainerGrid = styled.section`
    position: relative;
padding: 240px 0;
    background-color: ${Theme.colors.primary};
    @media ${Theme.media.mobile} {
        padding: 115px 0;
    }
`

