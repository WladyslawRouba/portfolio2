import styled from "styled-components"
import Image1 from "../../../assets/images/01.webp"
import Image2 from "../../../assets/images/02.webp"
import Image3 from "../../../assets/images/03.webp"
import Image4 from "../../../assets/images/04-.png"
import { Work } from "../../../components/work"
import {Container}  from "../../../components/Container.tsx"
import {Theme} from "../../../styles/Theme"


export const Works = ()=> {

    return(
        <StyledSection id="work">
            <Container>
                <BoxWorks >
                    <Work src={Image1} span={"InVersion"}/>
                    <Work src={Image2} span={"InVersion"}/>
                    <Work src={Image3} span={"InVersion"}/>
                    <Work src={Image4} span={"InVersion"}/>
                </BoxWorks>
            </Container>

        </StyledSection>
    )
}
const StyledSection = styled.section`
position: relative;`
const BoxWorks = styled.div`
    background-color:${Theme.colors.primary};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    overflow: hidden;
    margin: 0 auto;
    padding-bottom: 80px;
   
    
    &>:nth-child(2n) {
        transform: translateY(100px);
    }
    @media ${Theme.media.mobile} {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 24px;
        padding-bottom: 0;
        &>:nth-child(2n) {
            transform: translateY(0);
        }
    }
`

